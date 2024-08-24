import userModel from "../models/userModel.js";
import slugify from "slugify";
import asyncHandler from "express-async-handler";
// 3) create Control:


/**create
 * @disc - الدالة: المسئولة عن إضافة البيانات إلي الجدول.
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns {null} - resolve data or error.
 * @access  Private|Public            --> صلاحيات الإضافة خاصة بالادمين أو عامة متاحة للجميع
 */
export const create_user = asyncHandler(async (req,res,next)=>{
    const { name } = req.body;
    const data = await userModel.create({name, slug:slugify(name)});
    res.status(200).json({status: 200, results: data.length, data});
});

/** طريقة أخرة لكتابة كود الإضافة

01:
export const create_user = async (req,res,next)=>{
  try {
    const { name } = req.body;
    const data = await userModel.create({name, slug:slugify(name)});
    res.status(200).json(data);
  } catch (err) {res.status(500).json({ message: "❌ Server Error!!" }); }
};

02:
export const create_user = async (req,res,next)=>{
  const { name } = req.body;
  const newUser = new userModel({name, slug:slugify(name)});
  newUser.save().then(data=>{
    res.json(data);
  }).catch(err=>{console.error(err); res.status(500).json({ message: "❌ Server Error!!" }); });
};
*/


/**get_all
 * @disc - الدالة: المسئولة عن جلب البيانات من الجدول.
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns {null} - resolve data or error.
 * @access  Private|Public            --> صلاحيات الإضافة خاصة بالادمين أو عامة متاحة للجميع
 */
export const get_user_all = asyncHandler(async (req,res,next)=>{
  const data = await userModel.find({});
  res.status(200).json({status: 200, results: data.length, data});
});



/**get_pag
 * @disc - الدالة: المسئولة عن جلب جميع البيانات بإستخدام طريقة الصفحة -pagination- من الجدول.
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns {null} - resolve data or error.
 * @access  Private|Public            --> صلاحيات الإضافة خاصة بالادمين أو عامة متاحة للجميع
 */
export const get_user_pag = asyncHandler(async (req,res,next)=>{
  const page =+ req.query.page, limit = + req.query.limit, skip = (page -1) * limit;
  const data = await userModel.find({}).skip(skip).limit(limit);
  res.status(200).json({status: 200,  data, results: data.length,page, limit, skip});
});