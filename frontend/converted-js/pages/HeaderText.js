"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Container = _interopRequireDefault(require("@mui/material/Container"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _material = require("@mui/material");
var _Grid = _interopRequireDefault(require("@mui/material/Grid"));
var _ArrowForward = _interopRequireDefault(require("@mui/icons-material/ArrowForward"));
var _PersonAddAlt = _interopRequireDefault(require("@mui/icons-material/PersonAddAlt"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function HeaderText() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Container.default, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      // justifyContent: 'center',
      padding: 5
    }
  }, /*#__PURE__*/React.createElement(_Typography.default, {
    variant: "h1",
    noWrap: true,
    component: "a",
    href: "#app-bar-with-responsive-menu",
    sx: {
      mt: '10vh',
      mr: 2,
      display: {
        xs: 'none',
        md: 'flex'
      },
      fontFamily: 'monospace',
      fontWeight: 700,
      letterSpacing: '.0rem',
      color: 'inherit',
      textDecoration: 'none',
      color: '#fff'
    }
  }, "Your Journey", /*#__PURE__*/React.createElement("br", null), "Begins Here")), /*#__PURE__*/React.createElement(_Container.default, {
    sx: {
      // display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 5
    }
  }, !localStorage.getItem("token") && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_material.Button, {
    variant: "contained",
    color: "primary",
    size: "large",
    sx: {
      margin: '2vh',
      backgroundColor: '#000000',
      padding: '3vh'
    },
    endIcon: /*#__PURE__*/React.createElement(_ArrowForward.default, null),
    href: "booking"
  }, "\xA0Book a Flight\xA0"), /*#__PURE__*/React.createElement(_material.Button, {
    variant: "contained",
    color: "primary",
    size: "large",
    sx: {
      margin: '2vh',
      backgroundColor: '#000000',
      padding: '3vh'
    },
    endIcon: /*#__PURE__*/React.createElement(_PersonAddAlt.default, null),
    href: "sign-up"
  }, "\xA0Sign Up\xA0")), localStorage.getItem("token") && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_material.Button, {
    variant: "contained",
    color: "primary",
    size: "large",
    sx: {
      margin: '2vh',
      backgroundColor: '#000000',
      padding: '3vh'
    },
    endIcon: /*#__PURE__*/React.createElement(_ArrowForward.default, null),
    href: "booking"
  }, "\xA0Book a Flight\xA0"))));
}
var _default = exports.default = HeaderText;