const utils = {
    checkDateFormat: function(date){
        var reg =/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/g
        return reg.test(date)
    },
    checkisNumber: function(number){
        return Number.isInteger(number)
    }

}

module.exports = utils