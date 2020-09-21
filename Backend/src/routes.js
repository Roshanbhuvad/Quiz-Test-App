const express = require("express")
const router = express.Router()
const Question = require("../models/Question")
// Get All quiz questions
router.get("/questions", (req, res) => {

})

// Get one quiz question
router.get("/question/:id", (req, res) => {

})

// Create one quiz question 
router.post("/questions", async (req, res) => {
    try {
        const {
            description
        } = req.body
        const {
            alternatives
        } = req.body

        const question = await Question.create({
            description,
            alternatives
        })

        return res.status(201).json(question)
    } catch (error) {
        return res.status(500).json({
            "error": error
        })
    }

})

// Update one quiz question
router.put("/questions/:id", (req, res) => {

})

// Delete one quiz question
router.delete("/questions/:id", (req, res) => {

})

module.exports = router