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
      cost: {
        type: Number,
        min: [1, 'Costmust be greater than 0'],
        max: [100, 'Cost cannot exceed 100'],
        required: [true, 'Cost is required']
      },
      brand: {
        type: String,
        validate: {
          validator: function (value) {
            return /^[a-zA-Z]+$/.test(value);
          },
          message: 'Brand name  should contain only alphabets'
        },
        required: [true, 'jacket is required']
      }
})
module.exports = mongoose.model("Jackets",jacketSchema)