var express = require('express');
var router = express.Router();

const {getAllClass, getClassRoomById, postClassRoom} = require("./controller")

/* GET users listing. */
router.get('/', getAllClass);
router.get('/:id', getClassRoomById);
router.post('/', postClassRoom);

module.exports = router;