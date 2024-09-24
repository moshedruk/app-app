var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import exp from 'express';
const router = exp.Router();
router.post('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json({
            err: false,
            message: 'Login Successful',
            data: undefined
        });
    }
    catch (arr) {
        res.status(404).json({
            err: true,
            message: 'Invalid',
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
    catch (arr) {
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
    catch (arr) {
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
    catch (arr) {
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
    catch (arr) {
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
    catch (arr) {
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
    catch (arr) {
        res.status(404).json({
            err: true,
            message: 'Invalid',
            data: null
        });
    }
}));
export default router;
