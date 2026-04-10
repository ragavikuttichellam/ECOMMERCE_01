import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import Admin from "./models/Admin.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const createAdmin = async () => {
  const email = "admin@gmail.com";
  const password = "newpassword123";

  const existing = await Admin.findOne({ email });
  if (existing) {
    console.log("Admin already exists");
    process.exit();
  }

  const hashed = await bcrypt.hash(password, 10);

  await Admin.create({
    name: "Super Admin",
    email,
    password: hashed,
    role: "admin"
  });

  console.log("Admin Created Successfully");
  process.exit();
};

createAdmin();
