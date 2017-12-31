const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
	text: {
		type: String,
		required: true,
		minlenth: 1,
		trim: true
	},
	complete: {
		type: Boolean,
		default: false
	},
	completedAt: {
		type: Number,
		default: null
	}
});

var User = mongoose.model('User', {
	email: {
		type: String,
		minlenth: 1,
		required: true,
		trim: true
	}
})

var newTodo = new Todo({
	text: 'Visit the consulate   ',
	bla: 'Hey'
});

var newUser = new User({
	email: 'yehia.saleh@yale.edu'
});

newTodo.save().then((doc) => {
	console.log('Todo saved successfully');
	console.log(JSON.stringify(doc, undefined, 2));
}, (err) => {
	console.log('Todo failed to save', err);
});

newUser.save().then((doc) => {
	console.log('User saved successfully');
	console.log(JSON.stringify(doc, undefined, 2));
}, (err) => {
	console.log('User failed to save', err);
})