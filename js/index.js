"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const postController_1 = __importDefault(require("./src/controllers/postController"));
const userController_1 = __importDefault(require("./src/controllers/userController"));
const authController_1 = __importDefault(require("./src/controllers/authController"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/post', postController_1.default);
app.use('/user', userController_1.default);
app.use('auth', authController_1.default);
app.get('/', (req, res) => res.send('Hello Worldwwwwwwww!'));
app.listen(process.env.PORT, () => console.log(`server is listen... ${process.env.PORT}`));
