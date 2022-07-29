"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = exports.myfunct = void 0;
var express_1 = __importDefault(require("express"));
var mainRoutes_1 = __importDefault(require("./routes/mainRoutes"));
var app = (0, express_1.default)();
exports.app = app;
var port = 3000;
app.listen(port, function () {
    console.log("server started at localhost/".concat(port));
});
app.use("/", mainRoutes_1.default);
var myfunct = function (num) {
    return 5 * num;
};
exports.myfunct = myfunct;
