const express= require('express');
const dotenv=require('dotenv');
const app=express();
const morgan=require('morgan');
const bodyparser=require('body-parser');
const path=require('path');
dotenv.config({path:'config.env'});
const PORT=process.env.PORT || 8080

const connectdb=require('./server/database/connection');

//log request
app.use(morgan('tiny'));

//mongodb conn
connectdb();
//parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}))

//set view engine
app.set("view engine","ejs")

//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))


// app.get("/",(req,resp)=>{
//     // resp.send("hello world");
//     resp.render('index');
// })

// app.get("/add-user",(req,resp)=>{
//     resp.render('add_user');
// })
// app.get('/update-user',(req,resp)=>{
//     resp.render('update_user');
// })

//load routes
app.use('/',require('./server/routes/router'));

app.listen(PORT,()=>{console.log(`server is running on http://localhost:${PORT}`)});