import { COOKIE_NAME, SECRET } from "@/constants";
import { serialize } from "cookie";
import { sign } from "jsonwebtoken";
import { NextResponse } from "next/server";

const MAX_AGE = 60 * 60 * 24 * 30;

export async function POST() {
  const secret = SECRET;
  const token = sign(
    {
      username: "test",
    },
    secret,
    {
      expiresIn: MAX_AGE,
    }
  );

  const serialized = serialize(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: MAX_AGE,
    path: "/",
  });

  return NextResponse.json(
    {
      message: "store token success",
    },
    {
      status: 200,
      headers: {
        "Set-Cookie": serialized,
      },
    }
  );
}
