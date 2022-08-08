"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const humidity = new mongoose_1.Schema({
    location: String,
    humidity: String,
    date: String,
});
exports.default = (0, mongoose_1.model)('humidity', humidity);
