const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

const Role = new Scheme({
    role: { type: String, unique: true},
}, {
    timestamps: true
})

module.exports = mongoose.model('role', Role)