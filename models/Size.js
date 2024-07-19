const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

const Size = new Scheme({
    size: { type: Number, unique: true},
}, {
    timestamps: true
})

module.exports = mongoose.model('size', Size)