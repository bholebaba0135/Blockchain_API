const express=require('express');
const bodyParser = require('body-parser');
//creating instance of blockchain class
const Blockchain=require('../blockchain');
const HTTP_PORT=process.env.HTTP_PORT || 3001;//run server on local host on port 3001
const app=express();
const bc=new Blockchain();
app.use(bodyParser.json());
app.get('/blocks',(req,res)=>{
    res.json(bc.chain);
});
app.post('/mine',(req,res)=>{
    const block=bc.addBlock(req.body.data);
    console.log(`New block added: ${block.toString()}`);
    res.redirect('/blocks');
});
app.listen(HTTP_PORT,()=>console.log(`Listening on port ${HTTP_PORT}`));