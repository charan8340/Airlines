"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SignUp;
var React = _interopRequireWildcard(require("react"));
var _TextField = _interopRequireDefault(require("@mui/material/TextField"));
var _Box = _interopRequireDefault(require("@mui/material/Box"));
var _Navbar = _interopRequireDefault(require("./Navbar"));
var _AdapterDayjs = require("@mui/x-date-pickers/AdapterDayjs");
var _LocalizationProvider = require("@mui/x-date-pickers/LocalizationProvider");
var _DatePicker = require("@mui/x-date-pickers/DatePicker");
var _muiTelInput = require("mui-tel-input");
var _demo = require("@mui/x-date-pickers/internals/demo");
var _reactRouterDom = require("react-router-dom");
var _axios = _interopRequireDefault(require("axios"));
var _Background = _interopRequireDefault(require("../components/Background"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function SignUp() {
  const [name, setName] = React.useState("");
  const [dob, setDob] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [phone_number, setPhoneNumber] = React.useState("");
  const [nic, setNic] = React.useState("");
  const [passport_id, setPassportId] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirm_password, setConfirmPassword] = React.useState("");

  // Instead of simply adding the value, we need to create a custom function
  // to concatenate the previous value with the incoming value.
  const setChangedPhoneNumber = value => {
    setPhoneNumber(prev => ({
      ...prev,
      phone_number: prev.country_code + value
    }));
  };
  // TODO: THE ABOVE DOESN'T WORK. Phone number functionality is broken.

  console.log(phone_number);
  const navigate = (0, _reactRouterDom.useNavigate)();
  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const response = await _axios.default.post("http://localhost:8000/auth/register", {
        Name: name,
        Dob: dob,
        Address: address,
        Phone_Number: phone_number,
        Nic: nic,
        Passport_Id: passport_id,
        Username: username,
        Password: password,
        Confirm_Password: confirm_password
      });
      console.log(response);
      //navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Navbar.default, null), /*#__PURE__*/React.createElement(_Background.default, null), /*#__PURE__*/React.createElement("div", {
    className: "signinContainer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "glassBox"
  }, /*#__PURE__*/React.createElement(_Box.default, {
    className: "signin",
    sx: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("h1", null, "Sign up"), /*#__PURE__*/React.createElement("div", {
    className: "allBoxes"
  }, /*#__PURE__*/React.createElement(_Box.default, {
    component: "form",
    onSubmit: handleSubmit,
    noValidate: true,
    sx: {
      mt: 1
    }
  }, /*#__PURE__*/React.createElement(_TextField.default, {
    InputLabelProps: {
      sx: {
        fontFamily: "Ubuntu"
      }
    },
    margin: "normal",
    required: true,
    fullWidth: true,
    id: "name",
    label: "Name",
    name: "name",
    autoComplete: "name",
    autoFocus: true,
    onChange: e => {
      setName(e.target.value);
    }
  }), /*#__PURE__*/React.createElement(_Box.default, {
    sx: {
      marginTop: 2,
      marginBottom: 1
    }
  }, /*#__PURE__*/React.createElement(_LocalizationProvider.LocalizationProvider, {
    dateAdapter: _AdapterDayjs.AdapterDayjs
  }, /*#__PURE__*/React.createElement(_demo.DemoItem, null, /*#__PURE__*/React.createElement(_DatePicker.DatePicker, {
    sx: {
      fontFamily: "Ubuntu"
    },
    label: "Date of Birth",
    format: "DD/MM/YYYY",
    name: "dob",
    id: "dob",
    onChange: val => {
      setDob(val);
    }
  })))), /*#__PURE__*/React.createElement(_TextField.default, {
    InputLabelProps: {
      sx: {
        fontFamily: "Ubuntu"
      }
    },
    margin: "normal",
    required: true,
    fullWidth: true,
    id: "address",
    label: "Address",
    name: "address",
    onChange: e => {
      setAddress(e.target.value);
    },
    autoComplete: "address"
  }), /*#__PURE__*/React.createElement(_muiTelInput.MuiTelInput, {
    InputLabelProps: {
      sx: {
        fontFamily: "Ubuntu"
      }
    },
    margin: "normal",
    required: true,
    fullWidth: true,
    id: "phone-number",
    name: "phone_number",
    autoComplete: "",
    label: "Phone Number",
    onChange: setChangedPhoneNumber
  }), /*#__PURE__*/React.createElement(_TextField.default, {
    InputLabelProps: {
      sx: {
        fontFamily: "Ubuntu"
      }
    },
    margin: "normal",
    required: true,
    fullWidth: true,
    id: "nic",
    label: "NIC",
    name: "nic",
    onChange: e => {
      setNic(e.target.value);
    },
    autoComplete: "nic"
  }), /*#__PURE__*/React.createElement(_TextField.default, {
    InputLabelProps: {
      sx: {
        fontFamily: "Ubuntu"
      }
    },
    margin: "normal",
    required: true,
    fullWidth: true,
    id: "passport-id",
    label: "Passport ID",
    name: "passport_id",
    onChange: e => {
      setPassportId(e.target.value);
    },
    autoComplete: "passportid"
  }), /*#__PURE__*/React.createElement(_TextField.default, {
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
    onChange: e => {
      setUsername(e.target.value);
    },
    autoComplete: "username"
  }), /*#__PURE__*/React.createElement(_TextField.default, {
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
    onChange: e => {
      setPassword(e.target.value);
    },
    autoComplete: "current-password"
  }), /*#__PURE__*/React.createElement(_TextField.default, {
    InputLabelProps: {
      sx: {
        fontFamily: "Ubuntu"
      }
    },
    margin: "normal",
    required: true,
    fullWidth: true,
    name: "confirm_password",
    label: "Confirm Password",
    type: "password",
    id: "confirm-password",
    onChange: e => {
      setConfirmPassword(e.target.value);
    },
    autoComplete: "current-password"
  }), /*#__PURE__*/React.createElement("button", {
    className: "bttn bttnsignin",
    type: "submit",
    fullWidth: true,
    variant: "contained",
    sx: {
      mt: 6,
      mb: 2,
      backgroundColor: "black"
    }
  }, "Sign Up")))))));
}