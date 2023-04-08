const express = require('express')
const router = express.Router()
const { protect } = require('../middleware/authMiddleware')
const { addWine, getWine, removeWine, editWine } = require('../controllers/diaryWineController.js')
const { addSpirit, getSpirit, removeSpirit, editSpirit } = require('../controllers/diarySpiritController.js')
const { addOther, getOther, removeOther, editOther } = require('../controllers/diaryOtherController.js')

router.post('/wine', protect, addWine)
router.get('/wine', protect, getWine)
router.delete('/wine/:id', protect, removeWine)
router.put('/wine/:id', protect, editWine)

router.post('/spirit', protect, addSpirit)
router.get('/spirit', protect, getSpirit)
router.delete('/spirit/:id', protect, removeSpirit)
router.put('/spirit/:id', protect, editSpirit)

router.post('/other', protect, addOther)
router.get('/other', protect, getOther)
router.delete('/other/:id', protect, removeOther)
router.put('/other/:id', protect, editOther)


module.exports = router