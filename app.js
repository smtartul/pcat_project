const express = require('express');
const path=require('path')

const app = express();

// middlewares
// const myLogger=(req,res,next)=>{
//   console.log("Middleware log 1");
//   next();
// }

// app.use(myLogger)
app.use(express.static('public'))

app.get('/', (req, res) => {

  //   const photo={
  //       id:1,
  //       name:"Photo Name",
  //       description:"Photo Description"
  //   }
  // res.send(photo);
  res.sendFile(path.resolve(__dirname,'temp/index.html'))
});

const port = 4000;
app.listen(port, () => {
  console.log(`Sunucu ${port} üzerinde çalışmaya basladı..`);
});
