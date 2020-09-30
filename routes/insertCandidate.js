const userDB = require('../models/candidate');

module.exports = (req, res) => {
    if(req.body.name && req.body.email){
                let newCandidate = new userDB({
                    name: req.body.name,
                    email: req.body.email
                })

                newCandidate.save( (err, data) => {
                    if(err){
                        console.log(err)
                        res.json({
                            success: false,
                            msg: "Enter the details properly!",
                            err
                        })
                    } else{
                        res.json({
                            success: true,
                            msg: "New candidate inserted!",
                            data: data
                        })
                    }
                }) 
    }
    else{
        res.json({
            success: false,
            msg: "Please fill all the details!"
        })
    }
}