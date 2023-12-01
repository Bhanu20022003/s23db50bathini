const mongoose = require("mongoose")
const jacketSchema = mongoose.Schema({
    jackets: {
        type: String,
        validate: {
          validator: function (value) {
            return /^[a-zA-Z]+$/.test(value);
          },
          message: 'Jacket name  should contain only alphabets'
        },
        required: [true, 'jacket is required']
      },
cost: Number,
brand:  String
})
module.exports = mongoose.model("Jackets",jacketSchema)