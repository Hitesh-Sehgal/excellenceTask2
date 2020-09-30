const userDB = require('../models/candidate');

module.exports = (req,res)=>{
    if(!req.body.email){
        res.json({
            success: false,
            msg: "Details missing"
        })
    }else{
            userDB.findOneAndUpdate({email: req.body.email},{$set: {first_round: req.body.first_round, second_round: req.body.second_round, third_round: req.body.third_round}}, (err, updated)=>{
                if(err){
                    res.json({
                        success: false,
                        msg: "Error in updating score. Please try again after some time."
                    })
                }else{
                    res.json({
                        success: true,
                        msg: "Score updated."
                    })
                }
            })
        }
    }