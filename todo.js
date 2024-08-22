// 22/08/2024         --> تاريخ العمل علي المشروع
// sudo pacman -S nvm &&	echo 'source /usr/share/nvm/init-nvm.sh' >> ~/.zshrc && source ~/.zshrc && nvm install --lts && node -v && npm -v
// node -v  == v20.17.0
// ------{ ExpressTest__000 }------
/*[0] إنشاء ملافات المشروع
  --- mkdir express-NAME-v1
    --- cd express-NAME-v1
    --- npm init --yes && npm pkg set type="module"

    --- تثبيت مكتبات إضافية مفيدة لتسهيل العمل، يمكنك تثبيت بعض المكتبات الإضافية:
      express: لإنشاء السيرفر.
      dotenv: لإدارة المتغيرات البيئية.
      morgan: لتسجيل ومراقبة الطلبات HTTP. (عملية مراقبة في كونسل السيرفر Loging to request or respond to consol)

      nodemon: لإعادة تشغيل الخادم تلقائيًا عند إجراء تغييرات.
    
    --- npm install express dotenv morgan
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

/*[0] إنشاء ملف HTML كصفحة رئيسية للمشروع:
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

/*[0] إنشاء ملف "config.env"
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

/*[0] إنشاء ملف ".gitignore"
  --- touch .gitignore
  افتح .gitignoreوأضف الكود التالي:
      node_modules/
      .env
      config.env
*/

/*[0] إنشاء ملف قواعد البيانات وضبطتها:
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
      --- --- ---
    - تنصيب mongoose للتعامل معا قاعدة البيانات
      npm i mongoose

      import mongoose from "mongoose";
      mongoose.connect(process.env.DB_CONN).then(conn=>{
        console.log(`🔗 MongoDB Connected: ${conn.connection.host}`); 
      }).catch(err=>{
        console.error(`❌ Error connecting to MongoDB: ${err.message}`);
        process.exit(1);  // exit process with error code 1 if connection fails.
      });

    - إنشاء schema للتعامل مع collection مثل الإنشاء
      * مع العلم ان:
      * schema        --> تعادل المايجريشاً في php laravel
      * collection    --> يعادل الجدول



    
      [الإضافة, التعديل, الحذف, جلب البيانا] 

        
    ---------------------------------------------------------

*/




// [ ]