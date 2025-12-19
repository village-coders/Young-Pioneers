const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    message: {type: String, required: true},
    phone: {type: String, required: true},
    service: {type: String, enum: ["website development", "cctv installation", "technical support", "consultation"], required: true}
})
const messageModel = mongoose.model('message', messageSchema)
module.exports = messageModel