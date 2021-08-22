"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
const Server_1 = require("./Server");
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const logging_1 = __importDefault(require("./config/logging"));
const config_1 = __importDefault(require("./config/config"));
const mongoose_1 = __importStar(require("mongoose"));
const NAMESPACE = 'Server';
const router = express_1.default();
mongoose_1.default.connect(config_1.default.mongo.url, config_1.default.mongo.options)
    .then((result) => {
    logging_1.default.info(NAMESPACE, 'Connect Successfully');
})
    .catch((error) => {
    logging_1.default.error(NAMESPACE, error.message, error);
});
/**
 * Application class.
 * @description Handle init config and components.
 */
dotenv_1.default.config({
    path: ".env",
});
class Application {
    init() {
        this.initServer();
    }
    initServer() {
        this.server = new Server_1.Server();
    }
    start() {
        ((port = process.env.APP_PORT || 5000) => {
            this.server.app.listen(port, () => console.log(`> Listening on port ${port}`));
            this.server.app.use('/api', this.server.router);
        })();
    }
}
exports.Application = Application;
function loginRouter(arg, userRouter) {
    throw new mongoose_1.Error("Function mot implemented");
}
//# sourceMappingURL=app.js.map