import express from "express";
import dotenv from 'dotenv';
import morgan from 'morgan';



/**Load environment variables from config.env تحميل المتغيرات العامة من ملف*/
dotenv.config({ path: './config.env' });
/* ** ** ** ** */
const app = express();
const app_port = process.env.APP_PORT || 3000;
const app_url = process.env.APP_URL || "http://localhost";
const node_env=process.env.NODE_ENV||'Development';
/**********************************************************************/


//#region / { Middleware }  ====	====	====	====	====	====	====	====	====	====	====	====	====	====	====	====	====	====
if(node_env=="development") app.use(morgan('dev')); /* مكتبة لمراقبة الركوستات المرسلة إلي السيرفر وعرضها في الكونسول */

app.use(express.json());
app.use(express.static('public'));  /**Serve static files from the "public" directory */
//#endregion /  ====	====	====	====	====	====	====	====	====	====	====	====	====	====	====	====	====	====	====


//#region / { DB - mongoose }  ====	====	====	====	====	====	====	====	====	====	====	====	====	====	====	====	==

// 0) import & connection DataBath:
import mongoose from "mongoose";
mongoose.connect(process.env.DB_CONN).then(conn=>{
  console.log(`🔗 MongoDB Connected: ${conn.connection.host}`); 
}).catch(err=>{
  console.error(`❌ Error connecting to MongoDB: ${err.message}`);
  process.exit(1);  /**exit process with error code 1 if connection fails. */
});
// --- --- --- --- --- --- --- ---- ---
// 1) create schema:
const userSchema = new mongoose.Schema({
  name: { type: String,},
});
// const User = mongoose.model('User', userSchema);
// --- --- --- --- --- --- --- ---- ---
// 2) create model:
const userModel = mongoose.model('User', userSchema);

// --- --- --- --- --- --- --- ---- --- 
// 3) create route:
app.post('/user',(req,res)=>{
  const { name } = req.body;
  console.log(name);
  
  const newUser = new userModel({ name });
  newUser.save().then(data=>{
    res.json(data);
  }).catch(err=>{console.error(err); res.status(500).json({ message: "❌ Server Error!!" }); });
})

//#endregion /  ====	====	====	====	====	====	====	====	====	====	====	====	====	====	====	====	====	====	====


//#region / { Routes }  ====	====	====	====	====	====	====	====	====	====	====	====	====	====	====	====	====	====

app.get("/", (req, res) => {
  // res.send("Hello World!");
  res.sendFile(path.resolve('public/index.html'));
});

//#endregion /  ====	====	====	====	====	====	====	====	====	====	====	====	====	====	====	====	====	====	====


//#region / { SERVER LISTEN }  ====	====	====	====	====	====	====	====	====	====	====	====	====	====	====	====	====	====
app.listen(app_port, () => {
  console.log(`🖥️  The Server is running: ${app_url}:${app_port}`);
  console.log(`🏗️  Server is running in ${node_env} mode...`);
});
//#endregion /  ====	====	====	====	====	====	====	====	====	====	====	====	====	====	====	====	====	====	====




//#region / { ???? }  ====	====	====	====	====	====	====	====	====	====	====	====	====	====	====	====	====	====
//#endregion /  ====	====	====	====	====	====	====	====	====	====	====	====	====	====	====	====	====	====	====

// Server is running in production mode 🚀
// ✔️ - ❌ - ⚠️ - 🚫 - 🛑 - 🔴 - 🔒 - 🏗️ - ⚙️ - 🛠️
