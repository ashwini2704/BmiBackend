const express = require("express");
const jwt = require("jsonwebtoken");
const {BmiModel} = require('../model/bmi.model');

const bmiRouter = express.Router();

bmiRouter.get("/", async (req,res) => {
    const {userID} = req.body;
    try {
        const allBmi = await BmiModel.find({_id : userID});
        // console.log(allPosts);
        if(allBmi.length ==0) {
            res.status(200).send({"msg" : "No bmi" })
        }else{
            res.status(200).send({"All Bmi" : allBmi })
        }
    } catch (error) {
        res.status(400).send({"error": error})
    }
})

bmiRouter.post("/add", async(req,res) => {
    const {bmi,date} = req.body
    try {
        const newBmi = new BmiModel({bmi,date,userID: req.body.userID});
        await newBmi.save();
        res.status(200).send({"msg" : "New bmi has beed added"})
    } catch (error) {
        res.status(400).send({"error": error.message})
        
    }
})

module.exports = {
      bmiRouter
}