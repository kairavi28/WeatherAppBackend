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
const Weather_1 = __importDefault(require("./model/Weather"));
const router = express_1.default.Router();
// @desc    Create new weather data
// @route   POST /api/weather
// @access  Public
router.post('/weather', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const weather = new Weather_1.default(req.body);
        yield weather.save();
        res.status(201).json({ success: true, data: weather });
    }
    catch (error) {
        res.status(500).json({ success: false, message: 'Server Error' });
    }
}));
exports.default = router;
