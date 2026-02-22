import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    {
      error: {
        code: "NOT_IMPLEMENTED",
        message: "Endpoint register belum tersedia di backend API saat ini.",
      },
    },
    { status: 501 }
  );
}
