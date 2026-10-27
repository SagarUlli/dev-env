import bcrypt from "bcryptjs";
import { createAuthToken, authTokenLifetimeSeconds } from "@/lib/auth";
import { readCredentials } from "@/lib/credentials";
import { getPrismaClient } from "@/lib/prisma";

export const runtime = "nodejs";

export async function POST(request: Request): Promise<Response> {
  const credentials = await readCredentials(request);

  if (!credentials) {
    return Response.json(
      {
        error:
          "Provide a valid email and a password of 8 to 72 UTF-8 bytes.",
      },
      { status: 400 },
    );
  }

  try {
    const user = await getPrismaClient().user.findUnique({
      where: { email: credentials.email },
    });

    if (!user || !(await bcrypt.compare(credentials.password, user.password))) {
      return Response.json({ error: "Invalid email or password." }, {
        status: 401,
      });
    }

    return Response.json({
      token: createAuthToken(user.id),
      tokenType: "Bearer",
      expiresIn: authTokenLifetimeSeconds,
    });
  } catch (error) {
    console.error("User login failed.", error);
    return Response.json({ error: "Unable to log in." }, { status: 500 });
  }
}
