import connectMongoDb from "@/libs/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { name, email, password } = await req.json();

  try {
    await connectMongoDb();
    await User.create({ name, email, password });

    return NextResponse.json({ message: "User registered." }, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}

