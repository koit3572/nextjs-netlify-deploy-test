import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const url = "https://jsonplaceholder.typicode.com/photos";
    const photos = await fetch(url, {
      method: "GET",
      cache: "no-store",
    });
    const res = await photos.json();
    return NextResponse.json(res);
  } catch (error) {
    console.error(error);
  }
};
