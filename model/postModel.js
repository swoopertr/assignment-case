const mongoose = require("mongoose")

const recordsSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
    key: String,
    createdAt: Date,
    counts: Array,
    value: String
})

module.exports = mongoose.model("Post", recordsSchema)