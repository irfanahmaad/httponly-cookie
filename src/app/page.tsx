"use client";
import axios from "axios";
import { MouseEvent } from "react";
import Cookies from "js-cookie";

export default function Home() {
  const handleSetCookie = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post("api/create-httponly");

      console.log({ response });
    } catch (error) {
      console.log({ error });
    }
  };

  const handleGetCookie = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const response = await axios.get("api/me");

      console.log({ response });
    } catch (error) {
      console.log({ error });
    }
  };

  const handleGetCookieClient = (e: MouseEvent<HTMLButtonElement>) => {
    const tokenHttpOnly = Cookies.get("tokenHttpOnly");

    console.log({ tokenHttpOnly });
  };

  return (
    <div className="flex items-center">
      <button
        onClick={handleSetCookie}
        className="bg-neutral-300 p-3 rounded-lg m-4 hover:bg-neutral-400"
      >
        set cookie
      </button>
      <button
        onClick={handleGetCookie}
        className="bg-neutral-300 p-3 rounded-lg m-4 hover:bg-neutral-400"
      >
        get cookie
      </button>
      <button
        onClick={handleGetCookieClient}
        className="bg-neutral-300 p-3 rounded-lg m-4 hover:bg-neutral-400"
      >
        get cookie client
      </button>
    </div>
  );
}
