import {
  getBearerToken,
  verifyAuthToken,
} from "@/lib/auth";
import { isJsonObject, readJsonBody } from "@/lib/request";

export const runtime = "nodejs";

const MAX_TEXT_LENGTH = 20_000;

export async function POST(request: Request): Promise<Response> {
  const token = getBearerToken(request);

  if (!token) {
    return Response.json({ error: "A bearer token is required." }, {
      status: 401,
    });
  }

  try {
    if (!verifyAuthToken(token)) {
      return Response.json({ error: "Invalid or expired bearer token." }, {
        status: 401,
      });
    }
  } catch (error) {
    console.error("JWT verification is not configured correctly.", error);
    return Response.json({ error: "Authentication is unavailable." }, {
      status: 500,
    });
  }

  const body = await readJsonBody(request);

  if (!isJsonObject(body) || typeof body.text !== "string") {
    return Response.json({ error: "Provide text as a JSON string." }, {
      status: 400,
    });
  }

  const text = body.text.trim();

  if (!text) {
    return Response.json({ error: "Text cannot be empty." }, { status: 400 });
  }

  if (text.length > MAX_TEXT_LENGTH) {
    return Response.json(
      { error: `Text must be ${MAX_TEXT_LENGTH} characters or fewer.` },
      { status: 413 },
    );
  }

  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return Response.json({ error: "AI summarization is not configured." }, {
      status: 503,
    });
  }

  try {
    const upstreamResponse = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: process.env.OPENAI_MODEL || "gpt-4o-mini",
          messages: [
            {
              role: "system",
              content:
                "Summarize the educational material accurately. Preserve key concepts and explain them clearly and concisely.",
            },
            { role: "user", content: text },
          ],
          temperature: 0.3,
        }),
        signal: AbortSignal.timeout(30_000),
        cache: "no-store",
      },
    );

    if (!upstreamResponse.ok) {
      console.error(
        "OpenAI summarization request failed.",
        upstreamResponse.status,
      );
      return Response.json({ error: "The summarization provider failed." }, {
        status: 502,
      });
    }

    const result: unknown = await upstreamResponse.json();
    const choices =
      isJsonObject(result) && Array.isArray(result.choices)
        ? result.choices
        : [];
    const firstChoice = choices[0];
    const message = isJsonObject(firstChoice) ? firstChoice.message : null;
    const summary =
      isJsonObject(message) && typeof message.content === "string"
        ? message.content.trim()
        : "";

    if (!summary) {
      console.error("OpenAI returned an invalid summarization response.");
      return Response.json({ error: "The summarization provider failed." }, {
        status: 502,
      });
    }

    return Response.json({ summary });
  } catch (error) {
    console.error("AI summarization request failed.", error);
    return Response.json({ error: "The summarization provider failed." }, {
      status: 502,
    });
  }
}
