var mongoose = require('mongoose');

var facultySchema = mongoose.Schema({
    faculty_name: String,
    faculty_id: String
});

var facultyModel = mongoose.model('faculty', facultySchema);

module.exports = facultyModel;