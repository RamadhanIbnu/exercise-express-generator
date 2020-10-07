var express = require('express');
var router = express.Router();

const {getAllStudent, getStudentById, postStudent, getStudentInClass, deleteStudent} = require("./controller")

/* GET users listing. */
router.get('/', getAllStudent);
router.get("/:id", getStudentById);
router.get("/class/:id", getStudentInClass);
router.post('/', postStudent);
router.delete('/:id', deleteStudent);

module.exports = router;