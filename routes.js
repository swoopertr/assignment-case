const express = require("express")
const model = require('./data/recordsCollection')
const router = express.Router()
const utils = require('./utils/utils')

//only accepts post requests
router.post("/post", async (req, res)=>{
    var result = {
        "code" : 0,
        "msg" : "Success",
        "records":[]
    }
    if(!utils.checkDateFormat(req.body.startDate)){
        errorResult.code=1
        errorResult.msg ="startDate format is invalid"
    }
    if(!utils.checkDateFormat(req.body.endDate)){
        errorResult.code=2
        errorResult.msg ="endDate format is invalid"
    }
    if(!utils.checkisNumber(req.body.minCount)){
        errorResult.code=3
        errorResult.msg ="minCount is invalid"
    }
    if(!utils.checkisNumber(req.body.maxCount)){
        errorResult.code=4
        errorResult.msg ="maxCount is invalid"
    }
    if(result!=0){
        //this finishes the request if any invalid input
        res.send(result)
    }
    
    const payload = {
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        minCount: req.body.minCount,
        maxCount: req.body.maxCount
    }
    
    //res.send({result})
    res.send({status:"ok"});
})

module.exports = router