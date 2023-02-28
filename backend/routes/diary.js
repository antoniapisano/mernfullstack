const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.json({message: "get diary entries"})
})

router.get("/:id", (req, res) => {
    res.json({message: "get user's diary entries"})
})

router.post("/", (req, res) => {
    res.json({message: "add new diary entry"})
})

router.delete("/:id", (req, res) => {
    res.json({message: "delete a specific diary entry"})
})

router.patch("/:id", (req, res) => {
    res.json({message: "update a specific diary entry"})
})



module.exports = router