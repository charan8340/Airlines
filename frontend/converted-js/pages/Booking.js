"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CustomizedSelects;
var _react = _interopRequireWildcard(require("react"));
var React = _react;
var _Box = _interopRequireDefault(require("@mui/material/Box"));
var _Navbar = _interopRequireDefault(require("./Navbar"));
var _AdapterDayjs = require("@mui/x-date-pickers/AdapterDayjs");
var _LocalizationProvider = require("@mui/x-date-pickers/LocalizationProvider");
var _DatePicker = require("@mui/x-date-pickers/DatePicker");
var _demo = require("@mui/x-date-pickers/internals/demo");
var _MenuItem = _interopRequireDefault(require("@mui/material/MenuItem"));
var _FormControl = _interopRequireDefault(require("@mui/material/FormControl"));
var _Select = _interopRequireDefault(require("@mui/material/Select"));
var _InputLabel = _interopRequireDefault(require("@mui/material/InputLabel"));
var _axios = _interopRequireDefault(require("axios"));
var _Background = _interopRequireDefault(require("../components/Background"));
var _hi = require("react-icons/hi");
var _md = require("react-icons/md");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function CustomizedSelects() {
  function Label(_ref) {
    let {
      componentName,
      valueType,
      isProOnly
    } = _ref;
    const content = /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, componentName), "for ", valueType, "editing");
  }

  // variables
  const [originAirports, setOriginAirports] = (0, _react.useState)([""]);
  const [targetAirports, setTargetAirports] = (0, _react.useState)([""]);
  const [originAirport, setOriginAirport] = React.useState("");
  const [targetAirport, setTargetAirport] = React.useState("");

  //empty time variables
  const [departure_time, setDepatureTime] = React.useState("");
  const [arrival_time, setArrivalTime] = React.useState("");
  // get data

  (0, _react.useEffect)(() => {
    // Make an API request to your backend to get the list of airports
    fetch("http://localhost:8000/location/airports").then(response => response.json()).then(data => {
      setOriginAirports(data);
      setTargetAirports(data);
    }).catch(error => {
      console.error("Error fetching airports:", error);
    });
  }, []); // The empty dependency array ensures the effect runs only once on component mount

  const handleOriginAirportChange = event => {
    // handle origin change
    setOriginAirport(event.target.value);
  };
  const handleTargetAirportChange = event => {
    // handle origin change
    setTargetAirport(event.target.value);
  };
  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const response = await _axios.default.get("http://localhost:8000/route/available_flights/" + originAirport + "/" + targetAirport + "/" + departure_time.format() + "/" + arrival_time.format());
      if (response.data && response.data.length > 0) {
        // The response is not empty, navigate to the given page
        window.location.href = "http://localhost:3000/route/available_flights/" + originAirport + "/" + targetAirport + "/" + departure_time.format() + "/" + arrival_time.format();
      } else {
        // The response is empty, redirect to another page
        window.location.href = "http://localhost:3000/route/noflightsavailablepage";
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Navbar.default, null), /*#__PURE__*/React.createElement(_Background.default, null), /*#__PURE__*/React.createElement("div", {
    className: "ContainerBooking"
  }, /*#__PURE__*/React.createElement("div", {
    className: "glassBox"
  }, /*#__PURE__*/React.createElement("h1", null, "Booking"), /*#__PURE__*/React.createElement(_Box.default, {
    component: "form",
    onSubmit: handleSubmit,
    noValidate: true,
    sx: {
      mt: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "singleInput flex"
  }, /*#__PURE__*/React.createElement("div", {
    className: "iconDiv"
  }, /*#__PURE__*/React.createElement(_hi.HiOutlineLocationMarker, {
    className: "icon"
  })), /*#__PURE__*/React.createElement(_Box.default, {
    sx: {
      marginTop: 2,
      marginBottom: 2,
      width: 600
    }
  }, /*#__PURE__*/React.createElement(_FormControl.default, {
    fullWidth: true
  }, /*#__PURE__*/React.createElement(_InputLabel.default, {
    sx: {
      fontFamily: "Ubuntu"
    },
    id: "demo-simple-select-label"
  }, "Origin Airport"), /*#__PURE__*/React.createElement(_Select.default, {
    labelId: "demo-simple-select-label",
    id: "demo-simple-select-1",
    value: originAirport,
    label: "originAirport",
    autoFocus: true,
    onChange: handleOriginAirportChange
  }, originAirports.map(originAirport => /*#__PURE__*/React.createElement(_MenuItem.default, {
    key: originAirport.airport_code,
    value: originAirport.airport_code
  }, originAirport.name)))))), /*#__PURE__*/React.createElement("div", {
    className: "singleInput flex"
  }, /*#__PURE__*/React.createElement("div", {
    className: "iconDiv"
  }, /*#__PURE__*/React.createElement(_hi.HiOutlineLocationMarker, {
    className: "icon"
  })), /*#__PURE__*/React.createElement(_Box.default, {
    sx: {
      marginTop: 2,
      marginBottom: 2,
      width: 600,
      borderBlockColor: "transparent"
    }
  }, /*#__PURE__*/React.createElement(_FormControl.default, {
    fullWidth: true
  }, /*#__PURE__*/React.createElement(_InputLabel.default, {
    id: "demo-simple-select-label",
    sx: {
      fontFamily: "Ubuntu"
    }
  }, "Target Airport"), /*#__PURE__*/React.createElement(_Select.default, {
    labelId: "demo-simple-select-label",
    id: "demo-simple-select-2",
    value: targetAirport,
    label: "targetAirport",
    onChange: handleTargetAirportChange
  }, targetAirports.map(targetAirport => /*#__PURE__*/React.createElement(_MenuItem.default, {
    key: targetAirport.airport_code,
    value: targetAirport.airport_code
  }, targetAirport.name)))))), /*#__PURE__*/React.createElement("div", {
    className: "singleInput flex"
  }, /*#__PURE__*/React.createElement("div", {
    className: "iconDiv"
  }, /*#__PURE__*/React.createElement(_md.MdOutlineDateRange, {
    className: "icon"
  })), /*#__PURE__*/React.createElement(_Box.default, {
    sx: {
      marginTop: 2,
      marginBottom: 2,
      width: 600
    }
  }, /*#__PURE__*/React.createElement(_LocalizationProvider.LocalizationProvider, {
    dateAdapter: _AdapterDayjs.AdapterDayjs
  }, /*#__PURE__*/React.createElement(_demo.DemoItem, null, /*#__PURE__*/React.createElement(_DatePicker.DatePicker, {
    sx: {
      fontFamily: "Ubuntu"
    },
    label: "Departure Date",
    value: departure_time,
    onChange: date => setDepatureTime(date)
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "singleInput flex"
  }, /*#__PURE__*/React.createElement("div", {
    className: "iconDiv"
  }, /*#__PURE__*/React.createElement(_md.MdOutlineDateRange, {
    className: "icon"
  })), /*#__PURE__*/React.createElement(_Box.default, {
    sx: {
      marginTop: 2,
      marginBottom: 2,
      width: 600
    }
  }, /*#__PURE__*/React.createElement(_LocalizationProvider.LocalizationProvider, {
    dateAdapter: _AdapterDayjs.AdapterDayjs
  }, /*#__PURE__*/React.createElement(_demo.DemoItem, null, /*#__PURE__*/React.createElement(_DatePicker.DatePicker, {
    className: "customDatePicker",
    label: "Arrival Date",
    value: arrival_time,
    onChange: date => setArrivalTime(date)
  }))))), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    fullWidth: true,
    variant: "contained",
    className: "bttn bttnBooking"
  }, "Search Flights")))));
}