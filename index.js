import express from "express"
import moongose from "moongose"

const app=express()
const PORT=8080

//connection
moongose.connect("mongodb://localhost:27017/")
.then(()=>{
    console.log("conectado a la base de datos")
})
.catch((error)=>{
    console.log("error al conectar a la base de datos", error)
})

//schema
const userSchema=moongose.Schema({
    "name":{
        type:String,
        required:TextTrackCue
    },
    "age":{type:Number},
    "gpa":{type:Number}
})

//Model
const Student=moongose.model("Student", studentSchema)

app.get("/",(req,res)=>{
    const data= await Student.find()
    res.send(data)
})


app.listen(PORT,()=>{
    console.log("Server Started")
})

