const express = require("express");
const app = express();
const palabrasController = require('./src/API/controllers/palabrasController');
//settings
app.set('port', 3050);

//routes


app.listen(app.get('port'), ()=>{
    console.log(`app run in port ${app.get('port')}`);
});

app.use('/',palabrasController);

