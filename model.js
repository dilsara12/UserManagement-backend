const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: Number,
    name: String,
    age: Number,
    contact: String,
    email: String,
    position: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
