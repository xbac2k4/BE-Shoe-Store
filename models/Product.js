const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

const Products = new Scheme({
    name: { type: String, required: true, maxlength: 255 },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    images: { type: Array, required: true },
    brandID: { type: Scheme.Types.ObjectId, ref: 'brand' },
},{
    timestamps: true,
})

module.exports = mongoose.model('product', Products)