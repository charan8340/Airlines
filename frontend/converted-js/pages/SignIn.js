"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SignIn;
var React = _interopRequireWildcard(require("react"));
var _CssBaseline = _interopRequireDefault(require("@mui/material/CssBaseline"));
var _TextField = _interopRequireDefault(require("@mui/material/TextField"));
var _Box = _interopRequireDefault(require("@mui/material/Box"));
var _Navbar = _interopRequireDefault(require("./Navbar"));
var _pi = require("react-icons/pi");
var _cg = require("react-icons/cg");
var _axios = _interopRequireDefault(require("axios"));
var _reactRouterDom = require("react-router-dom");
var _Background = _interopRequireDefault(require("../components/Background"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function SignIn() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = (0, _reactRouterDom.useNavigate)();
  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const response = await _axios.default.post("http://localhost:8000/auth/login", {
        Username: username,
        Password: password
      });

      // If returned status is 200, then login was successfu
      if (response.status === 200) {
        if (response.data.token) {
          // setUser(response.data.user);
          // Store the JWT (if it exists) in the client's local-storage
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user_id", response.data.user.user_id);
          localStorage.setItem("username", response.data.user.username);
          localStorage.setItem("customer_id", response.data.user.customer_id);
          if (response.data.user.username == "Admin") {
            navigate("/dashboard");
          } else {
            navigate(-1);
          }
        } else {
          // Redirect to the previous page on successful login
          navigate(-1);
        }
      } else if (response.status === 401) {
        alert("ERROR: " + response.data.message);
      } else if (response.status === 500) {
        alert("ERROR: " + response.data.message);
      }
    } catch (error) {
      alert("ERROR: " + error);
      navigate("/sign-in");
      console.log(error);
      //useNavigate('/somewhere');
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Navbar.default, null), /*#__PURE__*/React.createElement(_Background.default, null), /*#__PURE__*/React.createElement("div", {
    className: "signinContainer"
  }, /*#__PURE__*/React.createElement(_CssBaseline.default, null), /*#__PURE__*/React.createElement("div", {
    className: "glassBox"
  }, /*#__PURE__*/React.createElement(_Box.default, {
    className: "signin",
    sx: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("h1", null, "Sign in"), /*#__PURE__*/React.createElement("div", {
    className: "allBoxes"
  }, /*#__PURE__*/React.createElement(_Box.default, {
    component: "form",
    onSubmit: handleSubmit,
    noValidate: true,
    sx: {
      mt: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "iconDiv"
  }, /*#__PURE__*/React.createElement(_cg.CgProfile, {
    className: "icon"
  })), /*#__PURE__*/React.createElement(_TextField.default, {
    sx: {
      width: 400
    },
    InputLabelProps: {
      sx: {
        fontFamily: "Ubuntu"
      }
    },
    margin: "normal",
    required: true,
    fullWidth: true,
    id: "username",
    label: "User Name",
    name: "username",
    autoComplete: "username",
    autoFocus: true,
    onChange: e => {
      setUsername(e.target.value);
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "iconDiv"
  }, /*#__PURE__*/React.createElement(_pi.PiPasswordFill, {
    className: "icon"
  })), /*#__PURE__*/React.createElement(_TextField.default, {
    sx: {
      width: 400
    },
    InputLabelProps: {
      sx: {
        fontFamily: "Ubuntu"
      }
    },
    margin: "normal",
    required: true,
    fullWidth: true,
    name: "password",
    label: "Password",
    type: "password",
    id: "password",
    autoComplete: "current-password",
    onChange: e => {
      setPassword(e.target.value);
    }
  })), /*#__PURE__*/React.createElement("button", {
    className: "bttn bttnsignin",
    type: "submit",
    fullWidth: true,
    variant: "contained"
  }, "Sign In")))))));
}