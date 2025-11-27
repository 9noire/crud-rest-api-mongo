const express = require("express")
const router = express.Router()
const courseController = require('../controllers/courseController')

// create (post)
router.post('/', courseController.createCourse)

// read all (get)
router.get('/', courseController.getAllCourses)

// read one (get)
router.get("/:id", courseController.getCourseById)

// update (put)
router.put("/:id", courseController.updateCourse)

// delete (delete)
router.delete("/:id", courseController.deleteCourse)

module.exports = router