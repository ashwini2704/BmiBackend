const mongoose = require("mongoose");

const bmiSchema = mongoose.Schema({
      bmi : Number,
      date: Date
}, {
    versionKey : false
})

const BmiModel = mongoose.model("bmi", bmiSchema);

module.exports = {
    BmiModel
}