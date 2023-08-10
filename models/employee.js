import mongoose,{Schema} from "mongoose";

const employeeSchema = new Schema(
  {
    name: String,
    avatar: String,
    email: String,
    salary: String,
    date: Date,
    status: String,
  },
  {
    timestamps: true,
  }
);

const Employee =
  mongoose.models.Employee || mongoose.model("Employee", employeeSchema);

export default Employee;
