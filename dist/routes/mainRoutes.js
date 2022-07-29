"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var imagesRoute_1 = __importDefault(require("./api/imagesRoute"));
var mainRoutes = express_1.default.Router();
/**
* @description middleware to verify routing
* @param {express.Request} req
* @param {express.Response} res
* @param {Function} next
*/
var logger = function (req, res, next) {
    var url = req.url;
    console.log("url is visited ".concat(url));
    next();
};
mainRoutes.get("/", logger, function (req, res) {
    res.status(200);
    res.send("opened main routes");
});
mainRoutes.use("/images", imagesRoute_1.default);
exports.default = mainRoutes;
