const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

const Product = new Scheme({
    name: { type: String, required: true, maxlength: 255 },
    price: { type: Number, required: true },
    discount: { type: Number, required: true},
    description: { type: String, required: true },
    images: { type: Array, required: true },
    brandID: { type: Scheme.Types.ObjectId, ref: 'brand' },
},{
    timestamps: true,
})

module.exports = mongoose.model('product', Product)