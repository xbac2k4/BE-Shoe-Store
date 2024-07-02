const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

const Brands = new Scheme({
    name: { type: String, required: true, maxlength: 255 },
    image: { type: String } 
},{
    timestamps: true,
})

module.exports = mongoose.model('brand', Brands)