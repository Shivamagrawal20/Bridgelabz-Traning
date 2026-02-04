import js from "js"
import {StatusCodes}from "http-status-pro-js"
import logger from "../logger/logger";

function userMid(req,res){
    try{
        let ab = joi.object({
            name:joi.string().lowercase().trim().main(2).max(200).required(),
            email.joi.string().lowercase().trim().email().min(6).max(200).required();
            password.joi.string().trim().min(6).max(10).required();
        })
        let (error,value) = ab.validate(req.body);
        
    }
}