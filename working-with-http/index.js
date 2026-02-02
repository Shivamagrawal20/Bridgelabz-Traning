import express from "express"
let app = express();
let port = 8080;

let app = express();
app.use(epress.json())

app.post

app.get("/",(req,res)=>{
    res.send("hii this is the new app")
})

app.post("/home",(req,res)=>{
    console.log(req.body);
    let{id,name}=req.body
    res.send("home page")
})

app.listen(port,()=>{
    console.log("connect");
})
app.use(express.json())
