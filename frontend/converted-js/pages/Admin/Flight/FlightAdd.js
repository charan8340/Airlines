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
var _HiveSharp = _interopRequireDefault(require("@mui/icons-material/HiveSharp"));
var _Stack = _interopRequireDefault(require("@mui/material/Stack"));
var _demo = require("@mui/x-date-pickers/internals/demo");
var _AdapterDayjs = require("@mui/x-date-pickers/AdapterDayjs");
var _LocalizationProvider = require("@mui/x-date-pickers/LocalizationProvider");
var _DateTimePicker = require("@mui/x-date-pickers/DateTimePicker");
var _dayjs = _interopRequireDefault(require("dayjs"));
var _InputLabel = _interopRequireDefault(require("@mui/material/InputLabel"));
var _MenuItem = _interopRequireDefault(require("@mui/material/MenuItem"));
var _FormControl = _interopRequireDefault(require("@mui/material/FormControl"));
var _Select = _interopRequireDefault(require("@mui/material/Select"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Flight_Add = () => {
  const [flights, setFlights] = (0, _react.useState)({});
  const [routes, setRoutes] = (0, _react.useState)([]);
  const [aircrafts, setAircrafts] = (0, _react.useState)([]);
  const [depature_time, setDepature] = _react.default.useState(null);
  const [arrival_time, setArrival] = _react.default.useState(null);
  const [status, setStatus] = _react.default.useState(null);
  const navigate = (0, _reactRouterDom.useNavigate)();
  const handleChange = e => {
    setFlights(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const handleClick = async e => {
    // console.log(flights)
    e.preventDefault();
    try {
      // console.log(flights)
      await _axios.default.post("http://localhost:8000/flight", {
        "route_id": routes,
        "aircraft_id": aircrafts,
        "departure_time": depature_time.format(),
        "arrival_time": arrival_time.format(),
        "status": status
      });
      navigate("/flight");
    } catch (err) {
      console.log(err);
    }
  };
  console.log(flights);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Container.default, {
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
  }, "New Flight"), /*#__PURE__*/_react.default.createElement(_Box.default, {
    component: "form",
    noValidate: true,
    sx: {
      mt: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_TextField.default, {
    margin: "normal",
    required: true,
    type: "number",
    fullWidth: true,
    id: "route_id",
    label: "Route ID",
    name: "route_id",
    autoComplete: "route_id",
    autoFocus: true,
    onChange: e => {
      setRoutes(e.target.value);
    }
  }), /*#__PURE__*/_react.default.createElement(_TextField.default, {
    margin: "normal",
    required: true,
    type: "number",
    fullWidth: true,
    name: "aircraft_id",
    label: "Aircraft ID",
    id: "aircraft_id ",
    autoComplete: "aircraft_id ",
    onChange: e => {
      setAircrafts(e.target.value);
    }
  }), /*#__PURE__*/_react.default.createElement(_Box.default, {
    sx: {
      marginTop: 2,
      marginBottom: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_LocalizationProvider.LocalizationProvider, {
    dateAdapter: _AdapterDayjs.AdapterDayjs
  }, /*#__PURE__*/_react.default.createElement(_Stack.default, {
    spacing: 2,
    sx: {
      minWidth: 305
    }
  }, /*#__PURE__*/_react.default.createElement(_DateTimePicker.DateTimePicker, {
    label: "Depature Time",
    value: depature_time,
    onChange: val => {
      setDepature(val);
    }
  })))), /*#__PURE__*/_react.default.createElement(_Box.default, {
    sx: {
      marginTop: 2,
      marginBottom: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_LocalizationProvider.LocalizationProvider, {
    dateAdapter: _AdapterDayjs.AdapterDayjs
  }, /*#__PURE__*/_react.default.createElement(_demo.DemoItem, null, /*#__PURE__*/_react.default.createElement(_DateTimePicker.DateTimePicker, {
    label: "Arrival Time",
    value: arrival_time,
    onChange: val => {
      setArrival(val);
    }
  })))), /*#__PURE__*/_react.default.createElement(_TextField.default, {
    margin: "normal",
    required: true,
    fullWidth: true,
    name: "status",
    label: "status",
    id: "status",
    autoComplete: "status",
    onChange: e => {
      setStatus(e.target.value);
    }
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
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
    href: "/flight"
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
  }, "Create")))));
};
var _default = exports.default = Flight_Add;