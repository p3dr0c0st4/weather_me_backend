"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const v1_1 = __importDefault(require("./api/v1"));
const app = (0, express_1.default)();
const mongodb_1 = __importDefault(require("./infra/db/implementation/mongodb/mongodb"));
const PORT = 3000;
const initDB = () => {
    (0, mongodb_1.default)();
};
app.use(express_1.default.json());
app.use('/api/v1', v1_1.default);
app.get('/ping', (req, res) => {
    res.json({ success: true });
});
initDB();
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
