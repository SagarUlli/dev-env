import bcrypt from "bcryptjs";
import { getPrismaClient } from "@/lib/prisma";
import { readCredentials } from "@/lib/credentials";

export const runtime = "nodejs";

function isUniqueConstraintError(error: unknown): boolean {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    error.code === "P2002"
  );
}

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
    const password = await bcrypt.hash(credentials.password, 12);
    const user = await getPrismaClient().user.create({
      data: { email: credentials.email, password },
      select: { id: true, email: true, createdAt: true },
    });

    return Response.json({ user }, { status: 201 });
  } catch (error) {
    if (isUniqueConstraintError(error)) {
      return Response.json({ error: "An account with that email exists." }, {
        status: 409,
      });
    }

    console.error("User registration failed.", error);
    return Response.json({ error: "Unable to register user." }, { status: 500 });
  }
}
