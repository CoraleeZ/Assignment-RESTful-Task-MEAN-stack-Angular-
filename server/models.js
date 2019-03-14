const mongoose = require('mongoose');
// const connectionString = 'mongodb://localhost/tasks_api';
mongoose.connect('mongodb://localhost/tasks_api', { useNewUrlParser: true });

const TaskSchema = new mongoose.Schema({
    title: String,
    description: {
        type: String,
        default: ''
    },
    completed: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

module.exports = mongoose.model('Task', TaskSchema);