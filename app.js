const express = require('express');
const ejs=require('ejs')
const path = require('path');

const app = express();
app.set("view engine","ejs")
// middlewares
// const myLogger=(req,res,next)=>{
//   console.log("Middleware log 1");
//   next();
// }

// app.use(myLogger)
app.use(express.static('public'));

app.get('/', (req, res) => {
  //   const photo={
  //       id:1,
  //       name:"Photo Name",
  //       description:"Photo Description"
  //   }
  // res.send(photo);
  // res.sendFile(path.resolve(__dirname,'temp/index.html'))
  res.render('index');
});
app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/add', (req, res) => {
  res.render('add');
});


const port = 4000;
app.listen(port, () => {
  console.log(`Sunucu ${port} üzerinde çalışmaya basladı..`);
});
