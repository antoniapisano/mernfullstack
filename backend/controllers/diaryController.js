const asyncHandler = require('express-async-handler')

const Diary = require('../models/diaryModel')


// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getDiary = asyncHandler(async (req, res) => {
  const diary = await Diary.find({ user: req.user.id })

  res.status(200).json(diary)
})

// @desc    Set goal
// @route   POST /api/goals
// @access  Private
const setDiary = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }

  const diary = await Diary.create({
    text: req.body.text,
    user: req.user.id,
  })

  res.status(200).json(diary)
})

// @desc    Update goal
// @route   PUT /api/goals/:id
// @access  Private
const updateDiary = asyncHandler(async (req, res) => {
  const diary = await Diary.findById(req.params.id)

  if (!diary) {
    res.status(400)
    throw new Error('Diary not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the goal user
  if (diary.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const updatedDiary = await Diary.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedDiary)
})

// @desc    Delete goal
// @route   DELETE /api/goals/:id
// @access  Private
const removeDiary = asyncHandler(async (req, res) => {
  const diary = await Diary.findById(req.params.id)

  if (!Diary) {
    res.status(400)
    throw new Error('Diary not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the goal user
  if (diary.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  await diary.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getDiary,
  setDiary,
  updateDiary,
  removeDiary,
}


