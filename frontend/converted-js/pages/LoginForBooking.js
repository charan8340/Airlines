"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _axios = _interopRequireDefault(require("axios"));
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _Avatar = _interopRequireDefault(require("@mui/material/Avatar"));
var _Button = _interopRequireDefault(require("@mui/material/Button"));
var _CssBaseline = _interopRequireDefault(require("@mui/material/CssBaseline"));
var _Box = _interopRequireDefault(require("@mui/material/Box"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _Container = _interopRequireDefault(require("@mui/material/Container"));
var _Navbar = _interopRequireDefault(require("./Navbar"));
var _HiveSharp = _interopRequireDefault(require("@mui/icons-material/HiveSharp"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const LoginForBooking = () => {
  const navigate = (0, _reactRouterDom.useNavigate)();
  const location = (0, _reactRouterDom.useLocation)();
  const flight_id = location.pathname.split("/")[2];
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Navbar.default, null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_Container.default, {
    component: "main",
    maxWidth: "xs"
  }, /*#__PURE__*/_react.default.createElement(_CssBaseline.default, null), /*#__PURE__*/_react.default.createElement(_Box.default, {
    sx: {
      marginTop: '20vh',
      marginBottom: '20vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_Avatar.default, {
    sx: {
      m: 1,
      bgcolor: '#000000'
    }
  }, /*#__PURE__*/_react.default.createElement(_HiveSharp.default, null)), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    component: "h1",
    variant: "h5"
  }, "Join with Us"), /*#__PURE__*/_react.default.createElement(_Box.default, {
    component: "form",
    noValidate: true,
    sx: {
      mt: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    type: "submit",
    fullWidth: true,
    variant: "contained",
    href: "/sign-up",
    sx: {
      mt: 6,
      mb: 2,
      backgroundColor: "black",
      ":hover": {
        backgroundColor: "#36454F"
      }
    }
  }, "Sign Up"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    type: "submit",
    fullWidth: true,
    variant: "contained",
    href: "/sign-in",
    sx: {
      mt: 1,
      mb: 2,
      backgroundColor: "black",
      ":hover": {
        backgroundColor: "#36454F"
      }
    }
  }, "Sign In"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    type: "submit",
    fullWidth: true,
    variant: "contained",
    onClick: () => navigate("/guest/" + flight_id),
    sx: {
      mt: 6,
      mb: 2,
      backgroundColor: "black",
      ":hover": {
        backgroundColor: "#36454F"
      }
    }
  }, "Proceed as a Guest")))));
};
var _default = exports.default = LoginForBooking;