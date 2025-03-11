"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CustomerFormGuest;
var React = _interopRequireWildcard(require("react"));
var _Avatar = _interopRequireDefault(require("@mui/material/Avatar"));
var _Button = _interopRequireDefault(require("@mui/material/Button"));
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
var _reactRouterDom = require("react-router-dom");
var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function CustomerFormGuest() {
  const [name, setName] = React.useState("");
  const [dob, setDob] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [nic, setNic] = React.useState("");
  const [passport_id, setPassportId] = React.useState("");

  // Instead of simply adding the value, we need to create a custom function
  // to concatenate the previous value with the incoming value.

  // TODO: THE ABOVE DOESN'T WORK. Phone number functionality is broken. 

  const removeTAndZ = dateString => {
    const [date, time] = dateString.split(/T|Z/);
    return date;
  };
  const location = (0, _reactRouterDom.useLocation)();
  const flight_id = location.pathname.split("/")[2];
  const navigate = (0, _reactRouterDom.useNavigate)();
  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const response = await _axios.default.post("http://localhost:8000/guest", {
        user_type: 'guest',
        name: name,
        date_of_birth: dob,
        address: address,
        nic: nic,
        passport_id: passport_id
      });
      const id = response.data.customer_id;
      navigate('/seat_select/' + flight_id + '/' + id);
    } catch (error) {
      console.log(error);
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Navbar.default, null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(_Container.default, {
    component: "main",
    maxWidth: "xs"
  }, /*#__PURE__*/React.createElement(_Box.default, {
    sx: {
      marginTop: 10,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: "20vh"
    }
  }, /*#__PURE__*/React.createElement(_Avatar.default, {
    sx: {
      m: 1,
      bgcolor: '#000000'
    }
  }, /*#__PURE__*/React.createElement(_HiveSharp.default, null)), /*#__PURE__*/React.createElement(_Typography.default, {
    component: "h1",
    variant: "h5"
  }, "Your Details"), /*#__PURE__*/React.createElement(_Box.default, {
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
    label: "Date of Birth",
    format: "DD/MM/YYYY",
    name: "dob",
    id: "dob",
    onChange: val => {
      setDob(removeTAndZ(val.format()));
    }
  })))), /*#__PURE__*/React.createElement(_TextField.default, {
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
  }), /*#__PURE__*/React.createElement(_TextField.default, {
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
  }), /*#__PURE__*/React.createElement(_Button.default, {
    type: "submit",
    fullWidth: true,
    variant: "contained",
    sx: {
      mt: 6,
      mb: 2,
      backgroundColor: "black"
    }
  }, "Next")))));
}