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
var _TextField = _interopRequireDefault(require("@mui/material/TextField"));
var _Box = _interopRequireDefault(require("@mui/material/Box"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _Container = _interopRequireDefault(require("@mui/material/Container"));
var _Navbar = _interopRequireDefault(require("../../Navbar"));
var _AdapterDayjs = require("@mui/x-date-pickers/AdapterDayjs");
var _LocalizationProvider = require("@mui/x-date-pickers/LocalizationProvider");
var _DatePicker = require("@mui/x-date-pickers/DatePicker");
var _demo = require("@mui/x-date-pickers/internals/demo");
var _DateTimePicker = require("@mui/x-date-pickers/DateTimePicker");
var _HiveSharp = _interopRequireDefault(require("@mui/icons-material/HiveSharp"));
var _MenuItem = _interopRequireDefault(require("@mui/material/MenuItem"));
var _FormControl = _interopRequireDefault(require("@mui/material/FormControl"));
var _Select = _interopRequireDefault(require("@mui/material/Select"));
var _InputLabel = _interopRequireDefault(require("@mui/material/InputLabel"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Report_2 = () => {
  const [originAirports, setOriginAirports] = (0, _react.useState)(['']);
  const [targetAirports, setTargetAirports] = (0, _react.useState)(['']);
  const [originAirport, setOriginAirport] = _react.default.useState('');
  const [targetAirport, setTargetAirport] = _react.default.useState('');
  const navigate = (0, _reactRouterDom.useNavigate)();
  (0, _react.useEffect)(() => {
    // Make an API request to your backend to get the list of airports
    fetch('http://localhost:8000/location/airports').then(response => response.json()).then(data => {
      setOriginAirports(data);
      setTargetAirports(data);
    }).catch(error => {
      console.error('Error fetching airports:', error);
    });
  }, []);
  const handleOriginAirportChange = event => {
    // handle origin change
    setOriginAirport(event.target.value);
  };
  const handleTargetAirportChange = event => {
    // handle origin change
    setTargetAirport(event.target.value);
  };
  const handleClick = async e => {
    e.preventDefault();
    try {
      navigate("/reports_4_results/" + originAirport + "/" + targetAirport);
    } catch (err) {
      console.log(err);
    }
  };

  // console.log(targetAirports);
  // console.log(departure.format());
  // console.log(arrival.format());

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Container.default, {
    component: "main",
    maxWidth: "xs"
  }, /*#__PURE__*/_react.default.createElement(_CssBaseline.default, null), /*#__PURE__*/_react.default.createElement(_Box.default, {
    sx: {
      marginTop: '20vh',
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
  }, "Past Flights"), /*#__PURE__*/_react.default.createElement(_Box.default, {
    component: "form",
    noValidate: true,
    sx: {
      mt: 1
    },
    width: 400
  }, /*#__PURE__*/_react.default.createElement(_Box.default, {
    sx: {
      marginTop: 2,
      marginBottom: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_FormControl.default, {
    fullWidth: true
  }, /*#__PURE__*/_react.default.createElement(_InputLabel.default, {
    id: "demo-simple-select-label"
  }, "Origin Airport"), /*#__PURE__*/_react.default.createElement(_Select.default, {
    labelId: "demo-simple-select-label",
    id: "demo-simple-select-1",
    value: originAirport,
    label: "originAirport",
    autoFocus: true,
    onChange: handleOriginAirportChange
  }, originAirports.map(originAirport => /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
    key: originAirport.airport_code,
    value: originAirport.airport_code
  }, originAirport.name))))), /*#__PURE__*/_react.default.createElement(_Box.default, {
    sx: {
      marginTop: 2,
      marginBottom: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_FormControl.default, {
    fullWidth: true
  }, /*#__PURE__*/_react.default.createElement(_InputLabel.default, {
    id: "demo-simple-select-label"
  }, "Target Airport"), /*#__PURE__*/_react.default.createElement(_Select.default, {
    labelId: "demo-simple-select-label",
    id: "demo-simple-select-2",
    value: targetAirport,
    label: "targetAirport",
    onChange: handleTargetAirportChange
  }, targetAirports.map(targetAirport => /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
    key: targetAirport.airport_code,
    value: targetAirport.airport_code
  }, targetAirport.name))))), /*#__PURE__*/_react.default.createElement(_Button.default, {
    color: "error",
    fullWidth: true,
    variant: "contained",
    sx: {
      mt: 6,
      mb: 2,
      backgroundColor: "black",
      width: "49%",
      float: "left",
      ":hover": {
        backgroundColor: "#36454F"
      }
    },
    href: "/reports"
  }, "Cancel"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    type: "submit",
    fullWidth: true,
    variant: "contained",
    sx: {
      mt: 6,
      mb: 2,
      backgroundColor: "black",
      width: "49%",
      float: "right",
      ":hover": {
        backgroundColor: "#36454F"
      }
    },
    onClick: handleClick
  }, "Check")))));
};
var _default = exports.default = Report_2;