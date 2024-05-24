import { Request } from "express";
import { verify } from "jsonwebtoken";

export function getUserIdFromRequest(request: Request) {
  const authHeader = request.headers.authorization;

  const [, token] = authHeader!.split(" ");

  const { sub } = verify(token, process.env.AUTH_HASH_SECRET!) as IPayload;
  return Number(sub);
}
