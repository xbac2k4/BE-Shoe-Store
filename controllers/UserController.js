const UserService = require("../services/UserService");
const HttpResponse = require("../utils/HttpResponse");

class UserController {
    postLogin = async (req, res) => {
        const { email, password } = req.body;
        try {
            const user = await new UserService().login(email, password);
            if (user) {
                return res.json(HttpResponse.resultAuth(user));
            }
        } catch (error) {
            console.log(error);
            return res.json(HttpResponse.error(error));
        }
    }
    postRegister = async (req, res) => {
        // username: { type: String, unique: true, maxlength: 255 },
        // email: { type: String, unique: true },
        // password: { type: String, maxLeght: 255 },
        // avatar: { type: String },
        // gender: { type: Number, default: 0 },
        // address: { type: String },
        // phone: { type: String, unique: true, default: "" },
        // lock: { type: Boolean, unique: true, default: 0},
        // status: { type: Boolean, unique: true, default: 0},
        // roleID: { type: Scheme.Types.ObjectId, ref: 'role' },
        try {
            const { fullname, email, password, address} = req.body;
            console.log(req.body);
            const user = await new UserService().register(fullname, email, password, address);
            if (user) {
                return res.json(HttpResponse.result(user))
            }
        } catch (error) {
            console.log(error);
            return res.json(HttpResponse.error(error));
        }
    }
}

module.exports = UserController;
