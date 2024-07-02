const mongoose = require('mongoose');
const Role = require('./Role');
const Scheme = mongoose.Schema;

const Users = new Scheme({
    fullname: { type: String,required: true, maxlength: 255 },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, maxLeght: 255 },
    avatar: { type: String, default: ""},
    gender: { type: Number, default: 0 },
    address: { type: String, required: true},
    phone: { type: String, default: "" },
    status: { type: Boolean, default: false},
    roleID: { type: Scheme.Types.ObjectId, ref: 'role'},
},{
    timestamps: true,
})

module.exports = mongoose.model('user', Users)