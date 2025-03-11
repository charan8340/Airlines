"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _si = require("react-icons/si");
var _bs = require("react-icons/bs");
var _ai = require("react-icons/ai");
var _cg = require("react-icons/cg");
var _logoNameSmall = _interopRequireDefault(require("../assets/logoNameSmall.png"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Navbar = () => {
  const [noBg, addBg] = (0, _react.useState)("navBar");
  const addBgColor = () => {
    if (window.scrollY >= 10) {
      addBg("navBar navbar_With_Bg");
    } else {
      addBg("navBar");
    }
  };
  window.addEventListener("scroll", addBgColor);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: noBg
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "logoDiv"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _logoNameSmall.default,
    alt: "B Airways logo",
    className: "logo"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "navBarMenu"
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: "menu flex"
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: "listItem"
  }, "Home"), /*#__PURE__*/_react.default.createElement("li", {
    className: "listItem"
  }, "Schedule"), /*#__PURE__*/_react.default.createElement("li", {
    className: "listItem"
  }, "Book"), /*#__PURE__*/_react.default.createElement("li", {
    className: "listItem"
  }, "About"), /*#__PURE__*/_react.default.createElement("button", {
    className: "bttn flex btnTwo"
  }, "Contact"))));
};
var _default = exports.default = Navbar;