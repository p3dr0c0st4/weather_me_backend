"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const sensors = new mongoose_1.Schema({
    guid: {
        type: String,
        required: true,
    },
    timeStamp: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
});
exports.default = (0, mongoose_1.model)('sensors', sensors);
