"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _hi = require("react-icons/hi");
var _ri = require("react-icons/ri");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function Search() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "search section"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sectionContainer grid"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "header"
  }, "Search Flight"), /*#__PURE__*/_react.default.createElement("div", {
    className: "btns flex"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "singleBtn"
  }, /*#__PURE__*/_react.default.createElement("span", null, "Economy")), /*#__PURE__*/_react.default.createElement("div", {
    className: "singleBtn"
  }, /*#__PURE__*/_react.default.createElement("span", null, "Business Class")), /*#__PURE__*/_react.default.createElement("div", {
    className: "singleBtn"
  }, /*#__PURE__*/_react.default.createElement("span", null, "First Class"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "searchInputs flex"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "singleInput flex"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "iconDiv"
  }, /*#__PURE__*/_react.default.createElement(_hi.HiOutlineLocationMarker, {
    className: "icon"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "texts"
  }, /*#__PURE__*/_react.default.createElement("h4", null, "Depature"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    placeholder: "location"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "singleInput flex"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "iconDiv"
  }, /*#__PURE__*/_react.default.createElement(_hi.HiOutlineLocationMarker, {
    className: "icon"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "texts"
  }, /*#__PURE__*/_react.default.createElement("h4", null, "Destination"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    placeholder: "location"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "singleInput flex"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "iconDiv"
  }, /*#__PURE__*/_react.default.createElement(_ri.RiAccountPinCircleLine, {
    className: "icon"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "texts"
  }, /*#__PURE__*/_react.default.createElement("h4", null, "Date"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    placeholder: "DD/MM/YY"
  }))), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "bttn btnBlock flex"
  }, "Search"))));
}
var _default = exports.default = Search;