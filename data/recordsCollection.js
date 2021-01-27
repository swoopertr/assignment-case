const mongoose = require("mongoose");
const postModel = require('./../model/postModel')

    /*
   db.getCollection('records').aggregate([
    { 
        "$project": {
            "_id":1,
            "key": "$key",
            "createdAt":"$createdAt",
            "total": { 
               "$sum": { "$sum": "$counts" }
            }
        } 
    },
    {
        $match:{
            total:{
                $lt:177, 
                $gt:174
            }
        }
    },
    {
        $match:{
            createdAt:{
                 $lt:ISODate("2016-12-17"), 
                 $gt:ISODate("2016-12-14")
                }
            }
        }
])

    */
var repository = {
    customQuery: function(data, cb){
        //postModel.
    }
}

module.exports = repository

