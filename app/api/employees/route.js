import connectMongoDb from "@/libs/mongodb";
import Employee from "@/models/employee";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await connectMongoDb();
    const employees = await Employee.find();

    if (!employees)
      return NextResponse.json({ message: "Data not Found" }, { status: 200 });
    return NextResponse.json(employees);
  } catch (error) {
    console.log(error);
  }
}

export async function POST(req) {
  const formData = await req.json();

  try {
    await connectMongoDb();
    if (!formData)
      return NextResponse.json({
        message: "Form Data Not Provided!",
        status: 404,
      });
    await Employee.create(formData);
    return NextResponse.json(
      { message: "Employee is added successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
  }
}

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");

  try {
    await connectMongoDb();
    await Employee.findByIdAndDelete(id);

    return NextResponse.json(
      { message: "Employee is deleted." },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
  }
}
