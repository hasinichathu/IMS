const express = require('express');
const router = express.Router();
const students = require("../controllers/student.controller.js");

// Create a new student
router.post("/students", students.create);

// Retrieve all student
router.get("/students", students.findAll);

// Retrieve a single student with studentId
router.get("/students/:studentId", students.findOne);

// Update a Customer with studentId
router.put("/students/:studentId", students.update);

// Delete a student with studentId
router.delete("/students/:studentId", students.delete);

// delete all students
router.delete("/students", students.deleteAll);

module.exports = router;