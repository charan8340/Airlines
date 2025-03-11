"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("../App.css");
var _Navbar = _interopRequireDefault(require("./Navbar"));
var _Background = _interopRequireDefault(require("../components/Background"));
var _Homelogo = _interopRequireDefault(require("../components/Homelogo"));
var _Support = _interopRequireDefault(require("../components/Support"));
var _Info = _interopRequireDefault(require("../components/Info"));
var _Footer = _interopRequireDefault(require("../components/Footer"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function Home() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "App"
  }, /*#__PURE__*/_react.default.createElement(_Navbar.default, null), /*#__PURE__*/_react.default.createElement(_Background.default, null), /*#__PURE__*/_react.default.createElement(_Homelogo.default, null), /*#__PURE__*/_react.default.createElement(_Support.default, null), /*#__PURE__*/_react.default.createElement(_Info.default, null), /*#__PURE__*/_react.default.createElement(_Footer.default, null));
}
var _default = exports.default = Home;