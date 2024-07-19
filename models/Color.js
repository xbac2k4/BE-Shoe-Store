const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

const Color = new Scheme({
    color: { type: Number, unique: true},
}, {
    timestamps: true
})

module.exports = mongoose.model('color', Color)