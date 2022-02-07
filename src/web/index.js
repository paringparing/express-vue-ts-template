"use strict";
exports.__esModule = true;
var express_1 = require("express");
var path_1 = require("path");
var app = (0, express_1["default"])();
var clientDir = path_1["default"].join(process.cwd(), 'dist/client');
app.use(express_1["default"].static(clientDir));
app.use(function (req, res, next) {
    if (req.path.startsWith('/api')) {
        return next();
    }
    res.sendFile(path_1["default"].join(clientDir, 'app.html'));
});
exports["default"] = app;
