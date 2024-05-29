import { COOKIE_NAME, SECRET } from "@/constants";
import { verify } from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore = cookies();

  const token = cookieStore.get(COOKIE_NAME);

  if (!token) {
    return NextResponse.json(
      {
        message: "Token not available",
      },
      {
        status: 500,
      }
    );
  }

  const { value } = token;
  const secret = SECRET;

  try {
    const username = verify(value, secret);

    const response = {
      user: username,
    };

    return new Response(JSON.stringify(response), {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}
