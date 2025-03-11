"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _video = _interopRequireDefault(require("../assets/video.mp4"));
var _logoNameLarge = _interopRequireDefault(require("../assets/logoNameLarge.png"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const HomeLogo = () => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "homelogo flex"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _logoNameLarge.default,
    className: "logoLarge"
  }));
};
var _default = exports.default = HomeLogo;