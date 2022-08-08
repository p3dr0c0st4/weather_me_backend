"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const temperature = new mongoose_1.Schema({
    location: String,
    temperature: String,
    date: String,
});
exports.default = (0, mongoose_1.model)('temperature', temperature);
