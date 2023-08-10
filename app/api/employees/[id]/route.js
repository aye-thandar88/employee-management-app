import connectMongoDb from "@/libs/mongodb";
import Employee from "@/models/employee";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  const { id } = params;
  const formData = await req.json();
  try {
    await connectMongoDb();
    await Employee.findByIdAndUpdate(id, formData);
    return NextResponse.json(
      { message: "Employee is updated." },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
  }
}

export async function GET(req, { params }) {
  const { id } = params;
  try {
    await connectMongoDb();
    const employee = await Employee.findOne({ _id: id });
    return NextResponse.json({ employee }, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}
