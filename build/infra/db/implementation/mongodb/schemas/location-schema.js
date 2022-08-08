"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const location = new mongoose_1.Schema({
    sensors: Array,
    guid: {
        type: String,
        required: true,
    },
});
exports.default = (0, mongoose_1.model)('location', location);
