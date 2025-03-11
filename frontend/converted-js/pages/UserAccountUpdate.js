"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SignUp;
var React = _interopRequireWildcard(require("react"));
var _Avatar = _interopRequireDefault(require("@mui/material/Avatar"));
var _Button = _interopRequireDefault(require("@mui/material/Button"));
var _CssBaseline = _interopRequireDefault(require("@mui/material/CssBaseline"));
var _TextField = _interopRequireDefault(require("@mui/material/TextField"));
var _Box = _interopRequireDefault(require("@mui/material/Box"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _Container = _interopRequireDefault(require("@mui/material/Container"));
var _Navbar = _interopRequireDefault(require("./Navbar"));
var _HiveSharp = _interopRequireDefault(require("@mui/icons-material/HiveSharp"));
var _AdapterDayjs = require("@mui/x-date-pickers/AdapterDayjs");
var _LocalizationProvider = require("@mui/x-date-pickers/LocalizationProvider");
var _DatePicker = require("@mui/x-date-pickers/DatePicker");
var _muiTelInput = require("mui-tel-input");
var _demo = require("@mui/x-date-pickers/internals/demo");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
// TODO remove, this demo shouldn't need to reset the theme.

function SignUp() {
  function Label(_ref) {
    let {
      componentName,
      valueType,
      isProOnly
    } = _ref;
    const content = /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, componentName), "for ", valueType, "editing");
  }
  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password')
    });
  };
  const [value, setValue] = React.useState('+94');
  const handleChange = newValue => {
    setValue(newValue);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Navbar.default, null), " ", /*#__PURE__*/React.createElement(_Container.default, {
    component: "main",
    maxWidth: "xs"
  }, " ", /*#__PURE__*/React.createElement(_CssBaseline.default, null), " ", /*#__PURE__*/React.createElement(_Box.default, {
    sx: {
      marginTop: 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: "20vh"
    }
  }, " ", /*#__PURE__*/React.createElement(_Avatar.default, {
    sx: {
      m: 1,
      bgcolor: '#000000'
    }
  }, /*#__PURE__*/React.createElement(_HiveSharp.default, null)), " ", /*#__PURE__*/React.createElement(_Typography.default, {
    component: "h1",
    variant: "h5"
  }, " Sign Up "), /*#__PURE__*/React.createElement(_Box.default, {
    component: "form",
    onSubmit: handleSubmit,
    noValidate: true,
    sx: {
      mt: 1
    }
  }, /*#__PURE__*/React.createElement(_TextField.default, {
    margin: "normal",
    required: true,
    fullWidth: true,
    id: "name",
    label: "Name",
    name: "name",
    autoComplete: "name",
    autoFocus: true
  }), /*#__PURE__*/React.createElement(_Box.default, {
    sx: {
      marginTop: 2,
      marginBottom: 1
    }
  }, /*#__PURE__*/React.createElement(_LocalizationProvider.LocalizationProvider, {
    dateAdapter: _AdapterDayjs.AdapterDayjs
  }, /*#__PURE__*/React.createElement(_demo.DemoItem, null, /*#__PURE__*/React.createElement(_DatePicker.DatePicker, {
    label: "Date of Birth"
  })))), /*#__PURE__*/React.createElement(_TextField.default, {
    margin: "normal",
    required: true,
    fullWidth: true,
    id: "address",
    label: "Address",
    name: "address",
    autoComplete: "address"
  }), /*#__PURE__*/React.createElement(_muiTelInput.MuiTelInput, {
    margin: "normal",
    required: true,
    fullWidth: true,
    id: "phone-number",
    name: "phone-number",
    autoComplete: "",
    label: "Phone Number",
    value: value,
    onChange: handleChange
  }), /*#__PURE__*/React.createElement(_TextField.default, {
    margin: "normal",
    required: true,
    fullWidth: true,
    id: "nic",
    label: "NIC",
    name: "nic",
    autoComplete: "nic"
  }), /*#__PURE__*/React.createElement(_TextField.default, {
    margin: "normal",
    required: true,
    fullWidth: true,
    id: "passport-id",
    label: "Passport ID",
    name: "passport-id",
    autoComplete: "passportid"
  }), /*#__PURE__*/React.createElement(_TextField.default, {
    margin: "normal",
    required: true,
    fullWidth: true,
    id: "username",
    label: "User Name",
    name: "username",
    autoComplete: "username"
  }), /*#__PURE__*/React.createElement(_TextField.default, {
    margin: "normal",
    required: true,
    fullWidth: true,
    name: "password",
    label: "Password",
    type: "password",
    id: "password",
    autoComplete: "current-password"
  }), /*#__PURE__*/React.createElement(_TextField.default, {
    margin: "normal",
    required: true,
    fullWidth: true,
    name: "confirm-password",
    label: "Confirm Password",
    type: "password",
    id: "confirm-password",
    autoComplete: "current-password"
  }), /*#__PURE__*/React.createElement(_Button.default, {
    type: "submit",
    fullWidth: true,
    variant: "contained",
    sx: {
      mt: 6,
      mb: 2,
      backgroundColor: "black"
    }
  }, " Update ")), " "), " "));
}