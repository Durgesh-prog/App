const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Task = require('../models/Task.js');
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

console.log('user ')
router.get('/dashboard',ensureAuthenticated, function(req, res, next) {
  console.log(req.user)
  let tasks = Task.find({userId:req.user._id}).then(data => {
	 console.log(data)
	 res.json({'data':data})
  }).catch(err => {
	  console.log(err)
  })

 
});


router.post('/dashboard/create',ensureAuthenticated, function(req, res, next) {
  console.log(req.user)
  console.log(req.body)
  let task = new Task({userId:req.user._id,task:req.body.task,section:req.body.section})
	task.save(function (err) {
		if (err) {
		  console.log(err)
		  return;
		}
		console.log('New Task: ' + task);
	  });
	  console.log('check')
	res.json({'task':task})
});

//update
/* router.get('/dashboard/update/:id',ensureAuthenticated, function(req, res, next) {
  console.log(req.params.id)
   Task.findById(req.params.id).then(data => {
	   console.log(data)
	   res.render('update',{
		   id:req.params.id
	   })
   })
}); */

router.post('/dashboard/update',ensureAuthenticated, function(req, res, next) {
  console.log(req.body.id)
   Task.updateOne({_id:req.body.id},{completed:true}).then(data => {
	   console.log(data)
	   res.json({'id':req.body.id})
   })
});

router.post('/dashboard/delete',ensureAuthenticated, function(req, res, next) {
  console.log(req.body.id)
  Task.deleteOne({_id:req.body.id},(err) => {
	  if(err) console.log(err)
	  res.send(200)
  })
});



module.exports = router;
