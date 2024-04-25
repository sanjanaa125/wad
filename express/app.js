const express=require('express');

const app=express();
const port=3000;

app.use(express.static('public'));

app.get('/',(req,res)=>{
        res.sendFile(_dirname+'/public/index.html');
});

app.get('/',(req,res)=>{
    res.sendFile(_dirname+'/public/about.html');
});

app.get('/',(req,res)=>{
    res.sendFile(_dirname+'/public/contact.html');
});

app.listen(port);


