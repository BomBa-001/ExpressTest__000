import mongoose from "mongoose";

// 1) create schema:
/**
 * @disc - إنشاء هيكل الجدول داخل قاعدة البيانات.
 */
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      minlength: [2, "Name must be at least 2 characters long"],
      maxlength: [60, "Name can be a maximum of 60 characters long"],
      unique: [true, "Name must be unique"],
      lowercase: [true, "Name must be lowercase"],
    },
    slug: { type: String, lowercase: [true, "Name must be lowercase"] },
    image: { type: String,},
  },
  { timestamps: true }
);
// --- --- --- --- --- --- --- ---- ---

// 2) create model:
/**
 * @disc - تنفيز هيكل الجدول داخل قاعدة البيانات, تهيئته ليتم عمل العمليات عليه.
 */
const userModel = mongoose.model("user", userSchema);
export default userModel;
