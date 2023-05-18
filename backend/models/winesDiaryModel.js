const mongoose = require('mongoose')
const wineSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name_of_wine: {
      type: String,
      require: true,
    },
    vintage: {
      type: String,
      require: true,
    },
    price: {
      type: String,
      require: true,
    },

    place_of_purchase: {
      type: String,
      require: true,
    },
    primary_aromas: {
        type: String,
        require: true,
      },
    secondary_aromas: {
        type: String,
        require: false,
      },  
    tertiary_aromas: {
        type: String,
        require: true,
      },
    description: {
        type: String,
        require: true,
      },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Wines', wineSchema);