"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Ticket;
var _react = _interopRequireWildcard(require("react"));
var React = _react;
var _Navbar = _interopRequireDefault(require("./Navbar"));
var _material = require("@mui/material");
var _Grid = _interopRequireDefault(require("@mui/material/Grid"));
var _reactRouterDom = require("react-router-dom");
var _axios = _interopRequireDefault(require("axios"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _HiveSharp = _interopRequireDefault(require("@mui/icons-material/HiveSharp"));
var _Toolbar = _interopRequireDefault(require("@mui/material/Toolbar"));
var _ArrowForward = _interopRequireDefault(require("@mui/icons-material/ArrowForward"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function Ticket() {
  const [booking, setBookings] = (0, _react.useState)([]);
  const location = (0, _reactRouterDom.useLocation)();
  const booking_id = location.pathname.split("/")[2];
  (0, _react.useEffect)(() => {
    const fetchALLModels = async () => {
      try {
        const res = await _axios.default.get("http://localhost:8000/customer_booking/" + booking_id);
        setBookings(res.data[0]);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchALLModels();
  }, []);
  console.log(booking["origin"]);
  const removeTAndZ = dateString => {
    if (dateString === undefined) return "";
    const [date, time] = dateString.split(/T|Z/);
    const [t, sec] = time.split(".");
    const [h, m, s] = t.split(":");
    return date + " | " + h + " : " + m;
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Navbar.default, null), " ", /*#__PURE__*/React.createElement(_material.Container, null, /*#__PURE__*/React.createElement(_material.Container, null, /*#__PURE__*/React.createElement(_Grid.default, null, /*#__PURE__*/React.createElement("h1", null, "Your Ticket"))), /*#__PURE__*/React.createElement(_material.Container, {
    sx: {
      marginTop: "10vh",
      justifyContent: "center",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(_material.Box, {
    sx: {
      backgroundColor: "black",
      width: "75%",
      borderRadius: "10px",
      height: "50vh",
      background: 'linear-gradient(160deg, rgba(117,116,116,1) 0%, rgba(0,0,0,1) 58%, rgba(0,0,0,1) 100%)'
    }
  }, /*#__PURE__*/React.createElement(_material.Container, {
    sx: {
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement(_Toolbar.default, {
    disableGutters: true
  }, /*#__PURE__*/React.createElement(_HiveSharp.default, {
    sx: {
      display: {
        xs: 'none',
        md: 'flex'
      },
      mr: 1
    }
  }), /*#__PURE__*/React.createElement(_Typography.default, {
    variant: "h6",
    sx: {
      mr: 2,
      display: {
        xs: 'none',
        md: 'flex'
      },
      fontFamily: 'monospace',
      fontWeight: 700,
      letterSpacing: '.0rem',
      color: 'inherit',
      textDecoration: 'none'
    }
  }, "B Airlines")), /*#__PURE__*/React.createElement(_material.Container, null, /*#__PURE__*/React.createElement(_Typography.default, {
    variant: "h2"
  }, booking.origin, " ", /*#__PURE__*/React.createElement(_ArrowForward.default, {
    sx: {
      fontSize: "0.7em"
    }
  }), " ", booking.destination), /*#__PURE__*/React.createElement(_Typography.default, {
    variant: "p"
  }, "Aircraft: ", booking.call_sign, /*#__PURE__*/React.createElement("br", null), "Seat No: ", booking.seat_class, "-", booking.seat_number, /*#__PURE__*/React.createElement("br", null), "Class : ", booking.seat_class === "E" && "Economy" || booking.seat_class === "B" && "Business" || booking.seat_class === "P" && "Platinum", /*#__PURE__*/React.createElement("br", null), "Departure : ", removeTAndZ(booking.departure_time), /*#__PURE__*/React.createElement("br", null), "Arrival : ", removeTAndZ(booking.arrival_time), /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(_Typography.default, {
    variant: "p"
  }, "Name : ", booking.name, /*#__PURE__*/React.createElement("br", null), "NIC : ", booking.nic, /*#__PURE__*/React.createElement("br", null), "Passport Id : ", booking.passport_id)))))));
}