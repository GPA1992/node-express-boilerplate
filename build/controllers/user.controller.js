"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
class UserController {
}
_a = UserController;
UserController.listAllUser = async (req, res) => {
    try {
        /* const users: IUser[] = await UserServices.findAll() */
        console.log('users');
        return res.status(200).json({ user: 'ok' });
    }
    catch (error) {
        return res.status(500).json({
            message: 500,
            error: error.message,
        });
    }
};
exports.default = UserController;
