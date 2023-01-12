const {UserModel} = require("../models/Users.model");
const express = require("express");
const bcrypt = require('bcrypt');
const e = require("express");

const userRouter = express.Router();

userRouter.get("/", async (req,res) => {
    const users = await UserModel.find();
    res.send(users);
});

userRouter.get("/:id", async (req,res) => {
    let Id = req.params.id;
    const user = await UserModel.find({_id:Id});
    res.send(user);
});

userRouter.post("/register", async(req,res) => {
    let {username,email,DOB,isAdmin,location,password} = req.body;
    try {
        bcrypt.hash(password, 5, async (error, hash) => {
            if(error){
                res.send({message : "something went wrong.." , error});
            }else{
                const newUser = new UserModel({username,email,DOB,isAdmin,location,password : hash});
                await newUser.save();
                res.send({message : "added succefully"});
            }
        });
    } catch (error) {
        res.send({message : "something went wrong.." , error});
    }
});

userRouter.post("/login", async(req,res) => {
    let {username,password} = req.body;
    try {
        const user = await UserModel.find({username});
        if(user.length > 0){
            bcrypt.compare(password, user[0].password, function(err, result) {
                if(result){
                    res.send({message : "successfully logged in...",token : "lkasjbdfknsaondfsdfsdf"});
                }else{
                    res.send("wrong credentials...");
                }
            });
        }else{
            res.send("username is wrong..");
        }
    } catch (error) {
        res.send({message : "something went wrong.." , error});
    }
});

module.exports = {
    userRouter
}

