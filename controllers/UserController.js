const UserService = require("../services/UserService");

class UserController {
    postLogin = async (req, res) => {
        const { email, password } = req.body;
        console.log(req.body);
        try {
            const user = await new UserService().login(email, password);
            if (user) {
                res.json({
                    status: user.status,
                    message: user.message,
                    data: user.data,
                    token: user.token,
                    refreshToken: user.refreshToken
                })
            }
            console.log(
                {
                    status: user.status,
                    message: user.message,
                    data: user.data,
                    token: user.token,
                    refreshToken: user.refreshToken
                }
            );
        } catch (error) {
            console.log(error);
            res.status(500).json({ status: 500, message: "Internal server error" });
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
                return res.json({
                    status: user.status,
                    message: user.message,
                    data: user.data
                })
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ status: 500, message: "Internal server error" });
        }
    }
}

module.exports = UserController;
