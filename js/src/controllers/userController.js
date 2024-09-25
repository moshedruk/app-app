"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userService_1 = __importDefault(require("../services/userService"));
const router = express_1.default.Router();
router.post('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield userService_1.default.createNewUser(req.body);
        if (result) {
            res.status(201).json({
                err: false,
                message: 'Login Successful',
                data: undefined
            });
        }
        else {
            throw new Error("cant save user");
        }
    }
    catch (err) {
        res.status(404).json({
            err: true,
            message: err || 'Invalid',
            data: null
        });
    }
}));
router.post('/follow', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json({
            err: false,
            message: 'Login Successful',
            data: undefined
        });
    }
    catch (err) {
        res.status(404).json({
            err: true,
            message: 'Invalid',
            data: null
        });
    }
}));
router.get('/search', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json({
            err: false,
            message: 'Login Successful',
            data: undefined
        });
    }
    catch (err) {
        res.status(404).json({
            err: true,
            message: 'Invalid',
            data: null
        });
    }
}));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json({
            err: false,
            message: 'Login Successful',
            data: undefined
        });
    }
    catch (err) {
        res.status(404).json({
            err: true,
            message: 'Invalid',
            data: null
        });
    }
}));
router.get('/profile', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json({
            err: false,
            message: 'Login Successful',
            data: undefined
        });
    }
    catch (err) {
        res.status(404).json({
            err: true,
            message: 'Invalid',
            data: null
        });
    }
}));
router.get('/followers', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json({
            err: false,
            message: 'Login Successful',
            data: undefined
        });
    }
    catch (err) {
        res.status(404).json({
            err: true,
            message: 'Invalid',
            data: null
        });
    }
}));
router.get('/following', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json({
            err: false,
            message: 'Login Successful',
            data: undefined
        });
    }
    catch (err) {
        res.status(404).json({
            err: true,
            message: 'Invalid',
            data: null
        });
    }
}));
exports.default = router;
