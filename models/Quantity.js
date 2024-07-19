const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

const Quantity = new Scheme({
    quantity: { type: Number, required: true},
    colorID: { type: Scheme.Types.ObjectId, ref: 'color' },
    sizeID: { type: Scheme.Types.ObjectId, ref: 'size' },
    productID: { type: Scheme.Types.ObjectId, ref: 'product' },
},{
    timestamps: true,
})

module.exports = mongoose.model('quantity', Quantity)