
// 0) import & connection DataBath:
import mongoose from "mongoose";

/**
 * @disc - دالة: للإتصال بقاعدة البيانات
 * @disc - mongoDb py Mongoose
 * @param {string} url - رابط الإتصال بقاعدة البيانات.
 * @returns {null} - يتم طباعة حالة الإتصال داخل القونصول.
 */
export default function dbConnection(url){
  mongoose.connect(url).then(conn=>{
    console.log(`🔗 MongoDB Connected: ${conn.connection.host}`); 
  }).catch(err=>{
    console.error(`❌ Error connecting to MongoDB: ${err.message}`);
    process.exit(1);  /**exit process with error code 1 if connection fails. */
  });
} ;