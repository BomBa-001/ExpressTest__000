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
import dbConnection from './database/config/database.js';
dbConnection(process.env.DB_CONN);
//#endregion /  ====	====	====	====	====	====	====	====	====	====	====	====	====	====	====	====	====	====	====


//#region / { Mount Routes }  ====	====	====	====	====	====	====	====	====	====	====	====	====	====	====	====	====	====

app.get("/", (req, res) => {
  // res.send("Hello World!");
  res.sendFile(path.resolve('public/index.html'));
});

// import userRoute from './database/routes/userRoute';
import userRoute from './database/routes/userRoute.js';
// const userRoute = require('./database/routes/userRoute');
app.use('/api/v1/user', userRoute);


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
// console.error('DB - mongoose:','23-4.26');
