"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const WeatherSchema = new mongoose_1.default.Schema({
    city: String,
    country: String,
    temperatureC: Number,
    temperatureF: Number,
    humidity: Number,
    main: String,
    icon: String,
    date: { type: Date, default: Date.now }
});
const Weather = mongoose_1.default.model('Weather', WeatherSchema);
exports.default = Weather;
