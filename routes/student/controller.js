const Student = require('../../models/Student');

module.exports = {
  getAllStudent: (req, res) => {
      console.log(Student)
    Student.find()
    .populate("class")
    .then(result => {
      res.status(200).json({
        message: "success get data student",
        result
      })
    })
    .catch(err => {
      res.status(404).json(err)
    })
  },

  getStudentById: async (req, res) => {
    const students = await Student.findById(req.params.id);
  
    try {
      res.json({
        message: "success get user with id",
        students
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },

  getStudentInClass: async (req, res) => {
    const students = await Student.find({class: req.params.id});
  
    try {
      res.json({
        message: "success get student in class",
        students
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },

  postStudent: async (req, res) => {
    // console.log("Student", Student);
    const students = await Student.create(req.body);
    // console.log("students", students);
    try {
      res.json({
        message: "success add data student",
        students
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },
  deleteStudent: async (req, res) =>{
      const student = await Student.findByIdAndDelete(req.params.id);

      try {
          if (student){
              res.send('student berhasil dihapus')
          } else{
              res.status(404).send('gagal dihapus')
          }
      } catch (error) {
          res.status(404).send(error)
      }
  }

}