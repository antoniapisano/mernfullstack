const mongoose = require('mongoose')
const spiritSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name_of_spirit: {
      type: String,
      require: true,
    },
    type_of_spirit: {
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
    aromas: {
        type: String,
        require: false,
      },
    appearance: {
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

module.exports = mongoose.model('Spirits', spiritSchema);