const Users = require("../models/User");
const JWT = require('jsonwebtoken');
const role = require('../models/Role');
const HttpResponse = require("../utils/HttpResponse");
const SECRETKEY = "ShoeStore"

class UserService {
    login = async (email, password) => {
        try {
            const user = await Users.findOne({ email, password }).populate('roleID')
            if (user) {
                //Token người dùng sẽ sử dụng gửi lên trên header mỗi lần muốn gọi api
                const token = JWT.sign({ id: user._id }, SECRETKEY, { expiresIn: '1h' })
                //Khi token hết hạn, người dùng sẽ call 1 api khác để lấy token mới
                //Lúc này người dùng sẽ truyền refreshToken lên để nhận về 1 cặp token,refreshToken mới
                //Nếu cả 2 token đều hết hạn người dùng sẽ phải thoát app và đăng nhập lại
                const refreshToken = JWT.sign({ id: user._id }, SECRETKEY, { expiresIn: '1d' })
                //expiresIn thời gian token
                return HttpResponse.auth(user, token, refreshToken)
            } else {
                return HttpResponse.authFail()
            }
        } catch (error) {
            return HttpResponse.error(error)
        }
    }
    register = async (fullname, email, password, address) => {
        try {
            const existingEmail = await Users.findOne({
                email: email
            });
            if (existingEmail) {
                return {
                    status: 400,
                    message: "Email already exists",
                    data: null
                };
            }

            const newUser = new Users({
                fullname: fullname,
                email: email,
                password: password,
                address: address,
                roleID: "66753952a7d9ef8882ac64ac",
            })

            const result = await newUser.save();
            if (result) {
                await result.populate('roleID');
                return {
                    status: 200,
                    message: "Register successful",
                    data: result
                };
            } else {
                return {
                    status: 400,
                    message: "Error, Register failed",
                    data: null
                };
            }

        } catch (error) {
            console.log(error.message);
            return {
                status: -1,
                message: 'Internal server error',
                data: null
            };
        }
    }
    // deleteUser = async (id) => {
    //     try {
    //         const result = await Users.findByIdAndDelete(id);
    //         if (result) {
    //             return {
    //                 status: 200,
    //                 message: "Xóa thành công",
    //                 data: result
    //             };
    //         } else {
    //             return {
    //                 status: 400,
    //                 message: "Lỗi, xóa không thành công",
    //                 data: []
    //             }
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
}

module.exports = UserService;