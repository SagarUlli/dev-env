import jwt from "jsonwebtoken";

const JWT_ISSUER = "dev-env-api";
const JWT_AUDIENCE = "dev-env";
const JWT_LIFETIME_SECONDS = 60 * 60;

function getJwtSecret(): string {
  const secret = process.env.JWT_SECRET;

  if (!secret || Buffer.byteLength(secret, "utf8") < 32) {
    throw new Error("JWT_SECRET must be set to at least 32 characters.");
  }

  return secret;
}

export function createAuthToken(userId: string): string {
  return jwt.sign({ sub: userId }, getJwtSecret(), {
    algorithm: "HS256",
    audience: JWT_AUDIENCE,
    expiresIn: JWT_LIFETIME_SECONDS,
    issuer: JWT_ISSUER,
  });
}

export function verifyAuthToken(token: string): string | null {
  const secret = getJwtSecret();

  try {
    const payload = jwt.verify(token, secret, {
      algorithms: ["HS256"],
      audience: JWT_AUDIENCE,
      issuer: JWT_ISSUER,
    });

    return typeof payload === "object" && typeof payload.sub === "string"
      ? payload.sub
      : null;
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return null;
    }

    throw error;
  }
}

export function getBearerToken(request: Request): string | null {
  const authorization = request.headers.get("authorization");
  const match = authorization?.match(/^Bearer\s+([^\s]+)$/i);

  return match?.[1] ?? null;
}

export const authTokenLifetimeSeconds = JWT_LIFETIME_SECONDS;
