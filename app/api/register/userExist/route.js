import connectMongoDb from "@/libs/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { email } = await req.json();
  try {
    await connectMongoDb();
    const user = await User.findOne({ email }).select("_id");
    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}
