"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Info = void 0;
var _react = _interopRequireWildcard(require("react"));
var _sl = require("react-icons/sl");
var _bs = require("react-icons/bs");
var _indo = _interopRequireDefault(require("../assets/indo.jpg"));
var _taj = _interopRequireDefault(require("../assets/taj.jpg"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
class Info extends _react.Component {
  render() {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "info section"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "infoContainer container"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "titleDiv flex"
    }, /*#__PURE__*/_react.default.createElement("h2", null, "Travel to make memories all around the world!")), /*#__PURE__*/_react.default.createElement("div", {
      className: "cardsDiv grid"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "singleCard grid"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "iconDiv flex colorOne"
    }, /*#__PURE__*/_react.default.createElement(_sl.SlCalender, {
      className: "icon"
    })), /*#__PURE__*/_react.default.createElement("span", {
      className: "cardTitle"
    }, "Book & Relax"), /*#__PURE__*/_react.default.createElement("p", null, "Effortlessly reserve your journey and unwind before you even take off.")), /*#__PURE__*/_react.default.createElement("div", {
      className: "singleCard grid"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "iconDiv flex colorOne"
    }, /*#__PURE__*/_react.default.createElement(_bs.BsShieldCheck, {
      className: "icon"
    })), /*#__PURE__*/_react.default.createElement("span", {
      className: "cardTitle"
    }, "Safe & Secure"), /*#__PURE__*/_react.default.createElement("p", null, "Travel with peace of mind knowing that your safety is our top priority.")), /*#__PURE__*/_react.default.createElement("div", {
      className: "singleCard grid"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "iconDiv flex colorOne"
    }, /*#__PURE__*/_react.default.createElement(_bs.BsBookmarkCheck, {
      className: "icon"
    })), /*#__PURE__*/_react.default.createElement("span", {
      className: "cardTitle"
    }, "Save Money"), /*#__PURE__*/_react.default.createElement("p", null, "Maximize your budget with our cost-effective travel solutions."))), /*#__PURE__*/_react.default.createElement("div", {
      className: "cardsDiv2 grid"
    }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("img", {
      src: _indo.default,
      className: "singleImage grid"
    })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("img", {
      src: _taj.default,
      className: "singleImage grid"
    })))));
  }
}
exports.Info = Info;
var _default = exports.default = Info;