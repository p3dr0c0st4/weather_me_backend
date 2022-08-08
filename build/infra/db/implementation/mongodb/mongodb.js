"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const init = () => {
    mongoose_1.default.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/weatherme`);
    const db = mongoose_1.default.connection;
    db.on('error', (error) => console.log(error));
    db.once('open', () => console.log('Connected to Database'));
};
exports.default = init;
