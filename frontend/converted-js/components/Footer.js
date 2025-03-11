"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _logoNameSmall = _interopRequireDefault(require("../assets/logoNameSmall.png"));
var _reactRouterDom = require("react-router-dom");
var _ti = require("react-icons/ti");
var _ai = require("react-icons/ai");
var _md = require("react-icons/md");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function Footer() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "footer"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sectionContainer container grid"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "gridOne"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "/"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _logoNameSmall.default,
    alt: "logo",
    className: "logoDiv"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "socialIcon flex"
  }, /*#__PURE__*/_react.default.createElement(_ti.TiSocialFacebook, {
    className: "icon"
  }), /*#__PURE__*/_react.default.createElement(_ai.AiOutlineTwitter, {
    className: "icon"
  }), /*#__PURE__*/_react.default.createElement(_ai.AiOutlineInstagram, {
    className: "icon"
  }), /*#__PURE__*/_react.default.createElement(_md.MdEmail, {
    className: "icon"
  }))), " ", /*#__PURE__*/_react.default.createElement("div", {
    className: "footerLinks"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "linkTitle"
  }, "Information"), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "/"
  }, "Home")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "/shedule"
  }, "Schedule")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "/booking"
  }, "Booking")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "/help"
  }, "Help"))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "quote"
  }, "Weaving experiences, ensuring a pleasant journey for every adventurer"), /*#__PURE__*/_react.default.createElement("p", {
    className: "underQuote"
  }, "Fly with us..."))), /*#__PURE__*/_react.default.createElement("div", {
    className: "copyrightDiv flex"
  }, /*#__PURE__*/_react.default.createElement(_ai.AiOutlineCopyrightCircle, {
    className: "copyright"
  }), /*#__PURE__*/_react.default.createElement("p", {
    className: "bottomText"
  }, "Designed by Group 24 | CSE")));
}
var _default = exports.default = Footer;