const ClassRoom = require('../../models/ClassRoom');

module.exports = {
  getAllClass: (req, res) => {
    ClassRoom.find()
    .then(result => {
      res.status(200).json({
        message: "success get data Class Room",
        result
      })
    })
    .catch(err => {
      res.status(404).json("cannot get data class")
    })
  },

  getClassRoomById: async (req, res) => {
    const classRooms = await ClassRoom.findById(req.params.id);
  
    try {
      res.json({
        message: "success get class room with id",
        classRooms
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },

  postClassRoom: async (req, res) => {
    // console.log("Student", Student);
    const classRoom = await ClassRoom.create(req.body);
    // console.log("students", students);
    try {
      res.json({
        message: "success add data class room",
        classRoom
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  }
}