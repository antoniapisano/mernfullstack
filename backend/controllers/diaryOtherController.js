const asyncHandler = require('express-async-handler')
const Others = require('../models/otherDiaryModel.js')

const addOther = asyncHandler(async (req, res) => {
  const {   user, 
            name, 
            type_of_alcohol,
            vintage, 
            price, 
            place_of_purchase, 
            aromas, 
            appearance, 
            description } = req.body;

  if (  !user || 
        !name || 
        !type_of_alcohol || 
        !vintage ||
        !price || 
        !place_of_purchase ||
        !aromas ||
        !appearance ||
        !description ) {
    res.status(400);
    throw new Error("Please fill in all fields but write unknown if not known");
  }

  const newOther = await Others.create({
            user, 
            name, 
            type_of_alcohol,
            vintage, 
            price, 
            place_of_purchase, 
            aromas, 
            appearance, 
            description});

  res.status(200).json({ Message: "Added to Others", newOther });
});
  


const getOther = asyncHandler(async (req, res) => {
  const booze = await Others.find({ user: req.user.id });

  res.status(200).json({ booze });
});

const removeOther = asyncHandler(async (req, res) => {
    const booze = await Others.findById(req.params.id)
  
    if (!booze) {
      res.status(400)
      throw new Error('Other alcohol not found')
    }
  
    if (!req.user) {
      res.status(401)
      throw new Error('User not found')
    }
  
    if (booze.user.toString() !== req.user.id) {
      res.status(401)
      throw new Error('User not authorized')
    }
  
    await booze.remove()
  
    res.status(200).json({ id: req.params.id })
  })

  const editOther = asyncHandler(async (req, res) => {
    const booze = await Others.findById(req.params.id)
  
    if (!booze) {
      res.status(400)
      throw new Error('Other alcohol not found')
    }
  
    if (!req.user) {
      res.status(401)
      throw new Error('User not found')
    }
  
    if (booze.user.toString() !== req.user.id) {
      res.status(401)
      throw new Error('User not authorized')
    }
  
    const editedOther = await Others.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
  
    res.status(200).json({editedOther})
  })
  
  module.exports = { addOther, getOther, removeOther, editOther }