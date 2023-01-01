const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let studentSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  rollno: {
    type: Number
  },
  GPA: {
    type: Number
  },
  Semester: {
    type: Number
  }
}, {
    collection: 'students'
  })
module.exports = mongoose.model('Student', studentSchema)