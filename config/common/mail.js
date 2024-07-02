var nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "ngoxuanbac2k4@gmail.com",
        pass: "nxb12345"
    }
});
module.exports = transporter 