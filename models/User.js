import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true }, // you’re using string IDs instead of ObjectId
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true }, // unique to avoid duplicates
    imageUrl: { type: String, required: true },
    enrolledCourses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course", // reference to Course model
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
