const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  userId:{
	  type:String,
	  required:true
  },
  task: {
    type: String,
    required: true
  },
  section:{
	type: String,
    required: true
  },
  completed:{
	type:Boolean,
	default:false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;
