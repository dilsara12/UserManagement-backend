const express = require('express');
const app = express();
const cors = require('cors');
const controller=require('./controller');

app.use(cors());
app.use(
    express.urlencoded({
        extended:true,
    })
);

app.use(express.json());

app.get('/users',(req,res)=>{
    //var resObj=[];
    controller.getUsers((req, res, next )=>{
        res.send();
    });
});

app.post('/createuser',(req,res)=>{
    //const id =req.query.id;
    controller.addUser(req.body, (callback)=>{
        res.send();
    });
});

app.post('/updateuser',(req,res)=>{
    //const id =req.query.id;
    controller.updateUser(req.body, (callback)=>{
        res.send(callack);
    });
});

app.post('/deleteuserS',(req,res)=>{
   // const id =req.query.id;
    controller.deleteUser(req.body, (callback)=>{
        res.send();
    });
});

module.exports = app; 