const asyncHandler = require('express-async-handler')
const Spirits = require('../models/spiritsDiaryModel.js')

const addSpirit = asyncHandler(async (req, res) => {
  const {   user, 
            name_of_spirit, 
            type_of_spirit,
            vintage, 
            price, 
            place_of_purchase, 
            aromas, 
            appearance, 
            description } = req.body;

  if (  !user || 
        !name_of_spirit || 
        !type_of_spirit || 
        !vintage ||
        !price || 
        !place_of_purchase ||
        !aromas ||
        !appearance ||
        !description ) {
    res.status(400);
    throw new Error("Please fill in all fields but write unknown if not known");
  }

  const newSpirit = await Spirits.create({
    user, 
    name_of_spirit, 
    type_of_spirit,
    vintage, 
    price, 
    place_of_purchase, 
    aromas, 
    appearance, 
    description});

  res.status(200).json({ Message: "Added to Spirits", newSpirit });
});
  


const getSpirit = asyncHandler(async (req, res) => {
  const spirited = await Spirits.find({ user: req.user.id });

  res.status(200).json({ spirited });
});

const removeSpirit = asyncHandler(async (req, res) => {
    const spirited = await Spirits.findById(req.params.id)
  
    if (!spirited) {
      res.status(400)
      throw new Error('Spirit not found')
    }
  
    if (!req.user) {
      res.status(401)
      throw new Error('User not found')
    }
  
    if (spirited.user.toString() !== req.user.id) {
      res.status(401)
      throw new Error('User not authorized')
    }
  
    await spirited.remove()
  
    res.status(200).json({ id: req.params.id })
  })

  const editSpirit = asyncHandler(async (req, res) => {
    const spirited = await Spirits.findById(req.params.id)
  
    if (!spirited) {
      res.status(400)
      throw new Error('Spirit not found')
    }
  
    if (!req.user) {
      res.status(401)
      throw new Error('User not found')
    }
  
    if (spirited.user.toString() !== req.user.id) {
      res.status(401)
      throw new Error('User not authorized')
    }
  
    const editedSpirit = await Spirits.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
  
    res.status(200).json({editedSpirit})
  })
  
  module.exports = { addSpirit, getSpirit, removeSpirit, editSpirit }