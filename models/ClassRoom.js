 const mongoose = require('mongoose');

const ClassRoomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  teacher: String,
  floor: Number,
})

const ClassRoom = mongoose.model("class-room", ClassRoomSchema)

module.exports = ClassRoom