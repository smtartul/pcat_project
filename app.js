const express = require('express');

const app = express();

app.get('/', (req, res) => {

    const photo={
        id:1,
        name:"Photo Name",
        description:"Photo Description"
    }
  res.send(photo);
});

const port = 4000;
app.listen(port, () => {
  console.log(`Sunucu ${port} üzerinde çalışmaya basladı..`);
});
