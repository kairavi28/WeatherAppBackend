"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const weatherRoutes_1 = __importDefault(require("./weatherRoutes"));
const createMessage_1 = __importDefault(require("./createMessage"));
const app = (0, express_1.default)();
const PORT = 3000;
const userName = 'Kairavi641';
const userPass = 'Pizza098';
const getConnectionString = (user, pass) => {
    const MONGO_URI = `mongodb+srv://${user}:${pass}@cluster0.dqce4d5.mongodb.net/WeatherApp`;
    return MONGO_URI;
};
// instance of class and get message
let messages = new createMessage_1.default(PORT);
let database = getConnectionString(userName, userPass);
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Routes
app.use('/api', weatherRoutes_1.default);
app.get('/', (req, res) => {
    res.send(messages.messagePrint());
});
// Connect to MongoDB and start the server
mongoose_1.default.connect(database).then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}).catch((error) => {
    console.error('MongoDB connection error:', error);
});
