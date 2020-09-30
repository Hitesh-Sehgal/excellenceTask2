const userDB = require('../models/candidate');

module.exports = (req,res)=>{
    userDB.aggregate([{"$group" : {"_id" : null,
    "highest_score" : {"$max" : {"$sum" : ["$first_round", "$second_round", "$third_round"]}},
    "avg_firstRound" : {"$avg" : "$first_round"},
    "avg_secondRound" : {"$avg" : "$second_round"},
    "avg_thirdRound" : {"$avg" : "$third_round"} }}
    ], (err, data)=>{
                if(err){
                    res.json({
                        success: false,
                        msg: err
                    })
                }else{
                    res.json({
                        success: true,
                        data: data
                    })
                }
            })
    }