import { isJsonObject, readJsonBody } from "./request";

export interface Credentials {
  email: string;
  password: string;
}

export async function readCredentials(
  request: Request,
): Promise<Credentials | null> {
  const body = await readJsonBody(request);

  if (!isJsonObject(body)) {
    return null;
  }

  const { email, password } = body;

  if (
    typeof email !== "string" ||
    typeof password !== "string" ||
    email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) ||
    password.length < 8 ||
    Buffer.byteLength(password, "utf8") > 72
  ) {
    return null;
  }

  return { email: email.trim().toLowerCase(), password };
}
