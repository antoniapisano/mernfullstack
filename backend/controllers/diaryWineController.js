const asyncHandler = require('express-async-handler')
const Wines = require('../models/winesDiaryModel.js')

const addWine = asyncHandler(async (req, res) => {
  const {   user, 
            name_of_wine, 
            vintage, 
            price, 
            place_of_purchase, 
            primary_aromas, 
            secondary_aromas, 
            tertiary_aromas,
            description } = req.body;

  if (  !user || 
        !name_of_wine || 
        !vintage || 
        !price || 
        !place_of_purchase ||
        !primary_aromas ||
        !secondary_aromas ||
        !tertiary_aromas ||
        !description ) {
    res.status(400);
    throw new Error("Please fill in all fields but write unknown if not known");
  }

  const newWine = await Wines.create({
    user, 
    name_of_wine, 
    vintage, 
    price, 
    place_of_purchase, 
    primary_aromas, 
    secondary_aromas, 
    tertiary_aromas,
    description});

  res.status(200).json({ Message: "Added to Favorites", newWine });
});
  


const getWine = asyncHandler(async (req, res) => {
  const vino = await Wines.find({ user: req.user.id });

  res.status(200).json({ vino });
});

const removeWine = asyncHandler(async (req, res) => {
    const vino = await Wines.findById(req.params.id)
  
    if (!vino) {
      res.status(400)
      throw new Error('Wine not found')
    }
  
    if (!req.user) {
      res.status(401)
      throw new Error('User not found')
    }
  
    if (vino.user.toString() !== req.user.id) {
      res.status(401)
      throw new Error('User not authorized')
    }
  
    await vino.remove()
  
    res.status(200).json({ id: req.params.id })
  })

  const editWine = asyncHandler(async (req, res) => {
    const vino = await Wines.findById(req.params.id)
  
    if (!vino) {
      res.status(400)
      throw new Error('Wine not found')
    }
  
    if (!req.user) {
      res.status(401)
      throw new Error('User not found')
    }
  
    if (vino.user.toString() !== req.user.id) {
      res.status(401)
      throw new Error('User not authorized')
    }
  
    const editedWine = await Wines.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
  
    res.status(200).json({editedWine})
  })
  
  module.exports = { addWine, getWine, removeWine, editWine }