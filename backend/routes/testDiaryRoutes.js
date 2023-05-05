const express = require('express')
const router = express.Router()
const { protect } = require('../middleware/authMiddleware')
const { setDiary, getDiary, removeDiary, updateDiary } = require('../controllers/diaryController.js')

//test route for initial frontendbackend
router.post('/',  protect, setDiary)
router.get('/', protect, getDiary)
router.delete('/:id', protect, removeDiary)
router.put('/:id', protect, updateDiary)
