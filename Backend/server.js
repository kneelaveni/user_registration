const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Malli2006@12',
    database:'signup'
})

app.post('/signup',(req,res)=>{
    var sql ="INSERT INTO login (name,email,password) VALUES (?)";
      const values=[
        req.body.name,
        req.body.email,
        req.body.password
      ]
    //    const name=req.body.name;
    //     const email=req.body.email;
    //     const password=req.body.password;
    db.query(sql,[ values],(err,data)=>{
        if(err){
            return res.send(err)
        }
        return res.send(data)
    })
})

app.post('/login',(req,res)=>{
    var sql ="SELECT * FROM login WHERE 'email' =? AND 'password'=?";
    console.log(req.body.email);
    console.log(req.body.password)
    db.query(sql,[ req.body.email,
        req.body.password],(err,data)=>{
        if(err){
            return res.json(err)
        }
        if(data.length >0){
            return res.json('Success')
        }else{
            return res.json(err)
        }
    })
    
})

app.listen(8081,()=>{
    console.log("Listening...")
})