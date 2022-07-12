"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("./myLabel.css");
function MyLabel(_a) {
    var _b = _a.label, label = _b === void 0 ? 'No Label' : _b, _c = _a.size, size = _c === void 0 ? 'normal' : _c, allCaps = _a.allCaps, color = _a.color, fontColor = _a.fontColor, _d = _a.backgroundColor, backgroundColor = _d === void 0 ? 'transparent' : _d;
    return ((0, jsx_runtime_1.jsx)("span", __assign({ className: "".concat(size, " ").concat('text-' + color), style: { color: fontColor, backgroundColor: backgroundColor } }, { children: allCaps ? label.toUpperCase() : label })));
}
exports.default = MyLabel;
