"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _reactRouterDom = require("react-router-dom");
var _Navbar = _interopRequireDefault(require("./Navbar"));
var _Box = _interopRequireDefault(require("@mui/material/Box"));
var _Container = _interopRequireDefault(require("@mui/material/Container"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// NoFlightsPage.js

const NoFlightsPage = () => {
  const navigate = (0, _reactRouterDom.useNavigate)();
  const handleReturn = () => {
    navigate(-1);
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Navbar.default, null), /*#__PURE__*/_react.default.createElement(_Container.default, {
    component: "main",
    maxWidth: "xs"
  }, /*#__PURE__*/_react.default.createElement(_Box.default, {
    sx: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: "20vh"
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "no-flights-page"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Sorry.... No Flights Available"), /*#__PURE__*/_react.default.createElement("p", null, "There are no flights available during the given time period."), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_material.Button, {
    type: "submit",
    onClick: handleReturn,
    fullWidth: true,
    variant: "contained",
    sx: {
      mt: 6,
      mb: 2,
      backgroundColor: "black"
    }
  }, " ", "Return"))));
};
var _default = exports.default = NoFlightsPage;