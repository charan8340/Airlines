"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _Menu = _interopRequireDefault(require("@mui/material/Menu"));
var _MenuItem = _interopRequireDefault(require("@mui/material/MenuItem"));
var _logoNameSmall = _interopRequireDefault(require("../assets/logoNameSmall.png"));
var _cg = require("react-icons/cg");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ResponsiveAppBar = () => {
  const navigate = (0, _reactRouterDom.useNavigate)();

  // opening annd closing profile menu
  const [anchorElUser, setAnchorElUser] = _react.default.useState(null);
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    localStorage.removeItem("customer_id");
    localStorage.removeItem("username");
    window.location.reload();
  };
  const handleBookingClick = event => {
    navigate("/booking");
  };
  const handleScheduleClick = event => {
    navigate("/shedule");
  };
  const handleHomeClick = event => {
    navigate("/");
  };
  const handleHelpClick = event => {
    navigate("/help");
  };
  const handleSignInClick = event => {
    navigate("/sign-in");
  };
  const handleSignUPClick = event => {
    navigate("/sign-up");
  };
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
    className: "listItem",
    onClick: handleHomeClick
  }, "Home"), /*#__PURE__*/_react.default.createElement("li", {
    className: "listItem",
    onClick: handleScheduleClick
  }, "Schedule"), /*#__PURE__*/_react.default.createElement("li", {
    className: "listItem",
    onClick: handleBookingClick
  }, "Booking"), /*#__PURE__*/_react.default.createElement("li", {
    className: "listItem",
    onClick: handleHelpClick
  }, "Help"), !localStorage.getItem("token") && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("button", {
    className: "bttn flex btnOne",
    onClick: handleSignUPClick
  }, "Sign Up"), /*#__PURE__*/_react.default.createElement("button", {
    className: "bttn flex btnTwo",
    onClick: handleSignInClick
  }, "Sign In")), localStorage.getItem("token") && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "profile",
    onClick: handleOpenUserMenu
  }, /*#__PURE__*/_react.default.createElement(_cg.CgProfile, {
    className: "profile"
  }), /*#__PURE__*/_react.default.createElement("p", {
    style: {
      whiteSpace: "pre"
    }
  }, localStorage.getItem("username"))), /*#__PURE__*/_react.default.createElement(_Menu.default, {
    id: "menu-appbar",
    anchorEl: anchorElUser,
    open: Boolean(anchorElUser),
    onClose: handleCloseUserMenu
  }, /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
    onClick: handleLogout
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    textAlign: "center",
    color: "text.secondary"
  }, "Logout"))))))));
};
var _default = exports.default = ResponsiveAppBar;