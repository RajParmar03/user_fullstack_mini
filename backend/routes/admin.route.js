const {UserModel} = require("../models/Users.model");
const express = require("express");

const adminRouter = express.Router();

adminRouter.patch("/update/:id", async (req,res) => {
    const Id = req.params.id;
    try {
        await UserModel.findByIdAndUpdate({_id:Id},req.body);
        res.send("updated successfully");
    } catch (error) {
        console.log(error);
        res.send({error : error});
    }
   
});

adminRouter.delete("/delete/:id", async (req,res) => {
    const Id = req.params.id;
    try {
        await UserModel.findByIdAndDelete({_id:Id});
        res.send("deleted successfully");
    } catch (error) {
        console.log(error);
        res.send({error : error});
    }
});


module.exports = {
    adminRouter
}

