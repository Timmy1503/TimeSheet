"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const BaseRouter_1 = require("./BaseRouter");
const TestService_1 = __importDefault(require("../services/test/TestService"));
const userController_1 = __importDefault(require("../controllers/userController"));
class userRouter extends BaseRouter_1.BaseRouter {
    constructor() {
        super();
        this._server = TestService_1.default;
        this.init();
    }
    init() {
        this.router.post("/Authenticate", userController_1.default.register);
    }
}
module.exports = new userRouter().router;
//# sourceMappingURL=userRouter.js.map