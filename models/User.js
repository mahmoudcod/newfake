const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
}, { collection: 'fake' }); // Sets the collection name to "fake"
module.exports = mongoose.model('User', userSchema);
