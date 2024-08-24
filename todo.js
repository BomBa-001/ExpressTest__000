// 22/08/2024         --> تاريخ العمل علي المشروع
// sudo pacman -S nvm &&	echo 'source /usr/share/nvm/init-nvm.sh' >> ~/.zshrc && source ~/.zshrc && nvm install --lts && nvm alias default node && npm install --global yarn && node -v && npm -v && yarn -v
// node -v  == v20.17.0
// ------{ ExpressTest__000 }------
/*[x] إنشاء ملافات المشروع
  --- mkdir express-NAME-v1
    --- cd express-NAME-v1
    --- npm init --yes && npm pkg set type="module"

    --- تثبيت مكتبات إضافية مفيدة لتسهيل العمل، يمكنك تثبيت بعض المكتبات الإضافية:
      express: لإنشاء السيرفر.
      dotenv: لإدارة المتغيرات البيئية.
      morgan: لتسجيل ومراقبة الطلبات HTTP. (عملية مراقبة في كونسل السيرفر Loging to request or respond to consol)
      slugify: مكتبة مسؤلة عن تحويل الفراغات إلي رموز أو علامات أخري عند الإضافة في قاعدة البيانات.
      express-async-handler: مكتبة لتنطيم الكود عند التكلم مع قاعدة البيانات بشكل افضل وخاصتاً كود الخطأ.
      nodemon: لإعادة تشغيل الخادم تلقائيًا عند إجراء تغييرات.
    
    --- npm install express dotenv morgan slugify express-async-handler
    --- npm install nodemon -D
      لتتمكن من استخدام ES6 Modules في مشروعك، افتح ملف package.json وأضف السطر التالي:
      "type": "module",
      إذا كنت ترغب في استخدام nodemon دائمًا، يمكنك تعديل ملف package.json ليكون على النحو التالي:
      "scripts": {
        "start": "node index.js",
        "dev": "nodemon index.js"
      }

    --- touch index.js
      افتح index.js وأضف الكود التالي: (بشكل مأقط سيتم التعديل علي الملف اسناء العمل)
        import express from 'express';

        const app = express();
        const port = 3000;

        app.get('/', (req, res) => {
          res.send('Hello World!');
        });

        app.listen(port, () => {
          console.log(`Server is running at http://localhost:${port}`);
        });

    *** يمكنك تشغيل الخادم في وضع التطوير باستخدام:
    --- npm run dev
*/

/*[x] إنشاء ملف HTML كصفحة رئيسية للمشروع:
  --- قم بإنشاء ملف HTML جديد باسم public/index.html أو أي اسم تفضله.
  --- mkdir public
  --- touch index.html
      افتح index.html وأضف الكود التالي:
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome BomBa Server</title>
          <style>
            :root{
              --bg-body: #282c34;
              --c-text: white;
              --c-title: #61dafb;
              --bg-btn: #61dafb;
              --bg-btn-hover: #21a1f1;
              --c-btn: #282c34;
            }
              body {
                  margin: 0;
                  padding: 0;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  height: 100vh;
                  background-color: var(--bg-body);
                  font-family: Arial, sans-serif;
                  font-size: 1rem;
                  color: var(--c-text);
              }

              .welcome-container {text-align: center;}
              h1 {font-size: 400%; margin-bottom: 0.5em; color: var(--c-title);}
              p {font-size: 150%;}
              .button {
                  display: inline-block;
                  margin-top: 1.25em;
                  padding: .625em 1.25em;
                  font-size: 1.2em;
                  color: var(--c-btn);
                  background-color: var(--bg-btn);
                  border: none;
                  border-radius: .3125em;
                  cursor: pointer;
                  text-decoration: none;
              }

              .button:hover {
                  background-color: var(--bg-btn-hover);
              }
          </style>
      </head>
      <body>
          <div class="welcome-container">
              <h1>Welcome to BomBa Server</h1>
              <p>Your server is up and running!</p>
              <a href="#" class="button">Get Started</a>
          </div>
      </body>
      </html>
*/

/*[x] إنشاء ملف "config.env"
  --- touch config.env
      افتح config.env وأضف الكود التالي:
      PORT=5000
      NODE_ENV=development
      
      DB_TYPE=mongodb
      DB_HOST=localhost
      DB_USER=your_username
      DB_PASSWORD=your_password
      DB_NAME=your_database_name
*/

/*[x] إنشاء ملف ".gitignore"
  --- touch .gitignore
  افتح .gitignoreوأضف الكود التالي:
      node_modules/
      .env
      config.env
*/

/*[x] إنشاء ملف قواعد البيانات وضبطتها:
  --- MongoDB:-------------------------------------------------
    - التسجيل في الموقع وإستخراج بيانات الإتصال:
      link:https://www.mongodb.com/
      firstName:ali
      lastName:pomp
      Company:BomBa
      Emali:kaliq.cory@moonversion.com
      Password:hIH5i3D714B\9O+vwEFR
      --- --- ---
      Cluster0:-
        DB_TYPE:MongoDB
        DB_HOST:
        DB_Name:testDB
        DB_USER:BomBa
        DB_PASS:gAWKo6Ki2Yd9OnT6
        DB_CONN:mongodb+srv://BomBa:gAWKo6Ki2Yd9OnT6@cluster0.fcwcb.mongodb.net/
    --- --- --- --- --- --- --- --- ---
    00. الإتصال بقاعدت البيانات.
    01. بناء الهيكل للجداول -schema-
    02. بناء المديول المسأول عن العمليات داخل الهيكل مثل [الإضافة, التعديل, الحذف, جلب البيانا]  -model-
    03. بناء الروابط المسئولة عن تنفيز أوامر المديول -api route-

    // 0) import & connection DataBath:
    import mongoose from "mongoose";
    mongoose.connect(process.env.DB_CONN).then(conn=>{
      console.log(`🔗 MongoDB Connected: ${conn.connection.host}`); 
    }).catch(err=>{
      console.error(`❌ Error connecting to MongoDB: ${err.message}`);
      process.exit(1);  //exit process with error code 1 if connection fails.
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
  ---------------------------------------------------------
*/

/*[x] تنظيم ملفات المشروع */

/*[ ] العمل علي:31  */


/*[ ]  */





/*
انا استعمل نظام "linux manjaro xfce"


section__001
- تنظيم الملفات,
*/


/**
 * الطريقة المفضلة لعمل الدوال
 * يضيف رقمين معًا.
 *
 * @param {number} a - الرقم الأول.
 * @param {number} b - الرقم الثاني.
 * @returns {number} - حاصل جمع الرقمين.
 */
// function add(a, b) {
//   return a + b;
// }



// class name {
//   constructor(parameters) {
    
//   }
// }




/*
00) تسبيت get:
  sudo pacman -S git
01) تكوين Git:
  git config --global user.name "BomBa-001"
  git config --global user.email "alipomp001@gmail.com"

02) فتح مشروعك في VS Code:
  - تهيئة مستودع Git:
  git init
  - أضف الملفات إلى الـ staging area:
  git add .
  - قم بإنشاء commit للتغييرات:
  git commit -m "Initial commit"

  -- ربط المستودع المحلي بالمستودع على GitHub
  git remote add origin <repository-url>

  - دفع الملفات إلى GitHub
  git push -u origin master

  * إذا كان لديك فرع رئيسي باسم main بدلاً من master، استخدم
  git push -u origin main

*/