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
      require: false,
    },
    price: {
      type: String,
      require: false,
    },

    place_of_purchase: {
      type: String,
      require: false,
    },
    primary_aromas: {
        type: String,
        require: false,
      },
    secondary_aromas: {
        type: String,
        require: false,
      },  
    tertiary_aromas: {
        type: String,
        require: false,
      },
    description: {
        type: String,
        require: false,
      },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Wines', wineSchema);