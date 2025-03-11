"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SeatSelect;
var _react = _interopRequireWildcard(require("react"));
var React = _react;
var _Radio = _interopRequireDefault(require("@mui/material/Radio"));
var _RadioGroup = _interopRequireDefault(require("@mui/material/RadioGroup"));
var _FormControlLabel = _interopRequireDefault(require("@mui/material/FormControlLabel"));
var _FormControl = _interopRequireDefault(require("@mui/material/FormControl"));
var _FormLabel = _interopRequireDefault(require("@mui/material/FormLabel"));
var _Navbar = _interopRequireDefault(require("./Navbar"));
var _material = require("@mui/material");
var _Grid = _interopRequireDefault(require("@mui/material/Grid"));
var _reactRouterDom = require("react-router-dom");
var _axios = _interopRequireDefault(require("axios"));
var _EventSeat = _interopRequireDefault(require("@mui/icons-material/EventSeat"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function SeatSelect() {
  const [seats, setseats] = (0, _react.useState)([]);
  const [CurrentSeat, setCurrentSeat] = (0, _react.useState)();
  const location = (0, _reactRouterDom.useLocation)();
  const navigate = (0, _reactRouterDom.useNavigate)();
  const flight_id = location.pathname.split("/")[2];
  const customer_id = location.pathname.split("/")[3];
  (0, _react.useEffect)(id => {
    const fetchALLModels = async () => {
      try {
        const res = await _axios.default.get("http://localhost:8000/seat_select/" + flight_id + "/" + customer_id);
        setseats(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchALLModels();
  }, []);
  const handleChange = e => {
    setCurrentSeat(prev => ({
      [e.target.name]: e.target.value
    }));
  };
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await _axios.default.post("http://localhost:8000/seat_select/" + CurrentSeat.seat_id + "/" + flight_id + "/" + customer_id);
      const booking_id = res.data.booking_id;
      navigate("/ticket/" + booking_id);
    } catch (err) {
      console.log(err);
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Navbar.default, null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(_material.Container, {
    sx: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(_Grid.default, {
    sx: {
      marginLeft: "35%"
    }
  }, /*#__PURE__*/React.createElement("h1", null, "Seat Selection"))), /*#__PURE__*/React.createElement(_material.Container, {
    sx: {
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(_FormControl.default, null, /*#__PURE__*/React.createElement(_RadioGroup.default, {
    row: true,
    "aria-labelledby": "demo-form-control-label-placement",
    name: "seat_id"
  }, seats.map(seat => {
    if (seat.availability.data == 1) {
      return /*#__PURE__*/React.createElement(_FormControlLabel.default, {
        flex: 1,
        sx: {
          width: "5vw",
          marginBottom: "2vw"
        },
        value: seat.seat_id,
        control: /*#__PURE__*/React.createElement(_Radio.default, {
          icon: /*#__PURE__*/React.createElement(_EventSeat.default, null),
          checkedIcon: /*#__PURE__*/React.createElement(_EventSeat.default, null)
        }),
        label: seat.seat_class + "-" + seat.seat_number,
        labelPlacement: "top",
        onClick: handleChange
      });
    } else {
      return /*#__PURE__*/React.createElement(_FormControlLabel.default, {
        sx: {
          width: "5vw",
          marginBottom: "2vw"
        },
        value: seat.seat_id,
        control: /*#__PURE__*/React.createElement(_Radio.default, {
          disabled: true,
          icon: /*#__PURE__*/React.createElement(_EventSeat.default, null)
        }),
        label: seat.seat_class + "-" + seat.seat_number,
        labelPlacement: "top"
      });
    }
  })))), /*#__PURE__*/React.createElement(_material.Container, null, /*#__PURE__*/React.createElement(_material.Button, {
    type: "submit",
    variant: "contained",
    fullwidth: true,
    sx: {
      mt: 6,
      mb: 2,
      backgroundColor: "black",
      width: "50%",
      float: "right",
      ":hover": {
        backgroundColor: "#36454F"
      }
    },
    onClick: handleSubmit
  }, "Next")));
}