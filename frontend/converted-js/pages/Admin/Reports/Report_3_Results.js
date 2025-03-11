"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _axios = _interopRequireDefault(require("axios"));
var _material = require("@mui/material");
var _Button = _interopRequireDefault(require("@mui/material/Button"));
var _xDataGrid = require("@mui/x-data-grid");
var _reactRouterDom = require("react-router-dom");
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _Dialog = _interopRequireDefault(require("@mui/material/Dialog"));
var _DialogActions = _interopRequireDefault(require("@mui/material/DialogActions"));
var _DialogContent = _interopRequireDefault(require("@mui/material/DialogContent"));
var _DialogContentText = _interopRequireDefault(require("@mui/material/DialogContentText"));
var _DialogTitle = _interopRequireDefault(require("@mui/material/DialogTitle"));
var _useMediaQuery = _interopRequireDefault(require("@mui/material/useMediaQuery"));
var _styles = require("@mui/material/styles");
var _Grid = _interopRequireDefault(require("@mui/material/Grid"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Report_3_Results = () => {
  const [visit_data, setVisit] = (0, _react.useState)([]);
  const [isButtonHidden, setIsButtonHidden] = (0, _react.useState)(false);
  const location = (0, _reactRouterDom.useLocation)();
  const start_date = location.pathname.split("/")[2];
  const end_date = location.pathname.split("/")[3];
  (0, _react.useEffect)(() => {
    const fetchALLModels = async () => {
      try {
        const res = await _axios.default.get("http://localhost:8000/report_3/" + start_date + "/" + end_date);
        setVisit(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchALLModels();
  }, []);
  const removeTAndZ = dateString => {
    const [date, time] = dateString.split(/T|Z/);
    const [t, sec] = time.split(".");
    const [h, m, s] = t.split(":");
    return date + "  -  " + h + " : " + m;
  };
  const printPage = () => {
    window.print();
  };
  const combineEvent = () => {
    setIsButtonHidden(true);
    setTimeout(() => {
      printPage();
    }, 50);
    setTimeout(() => {
      setIsButtonHidden(false);
    }, 1000);
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_material.Container, null, /*#__PURE__*/_react.default.createElement(_material.Box, {
    component: "main",
    sx: {
      flexGrow: 1,
      paddingTop: 4.5
    }
  }, /*#__PURE__*/_react.default.createElement(_material.Box, {
    component: "main",
    sx: {
      flexGrow: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, null, /*#__PURE__*/_react.default.createElement("h1", null, "Bookings by Passenger Type", !isButtonHidden && /*#__PURE__*/_react.default.createElement(_Button.default, {
    id: "myButton",
    variant: "contained",
    onClick: combineEvent,
    style: {
      float: 'right',
      backgroundColor: '#000000'
    }
  }, "Print Report")), /*#__PURE__*/_react.default.createElement(_material.Container, {
    sx: {
      marginTop: "10vh"
    }
  }, /*#__PURE__*/_react.default.createElement(_material.Stack, {
    spacing: 1,
    direction: "row"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "From:\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0", removeTAndZ(start_date))), /*#__PURE__*/_react.default.createElement(_material.Stack, {
    spacing: 1,
    direction: "row"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "To:\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0", removeTAndZ(end_date)))), /*#__PURE__*/_react.default.createElement(_material.Container, {
    sx: {
      marginTop: "10vh",
      justifyContent: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_material.Stack, {
    direction: "row",
    justifyContent: 'center',
    spacing: 20
  }, /*#__PURE__*/_react.default.createElement(_material.Box, {
    textAlign: 'center'
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Registered User Bookings"), visit_data.map((data, index) => /*#__PURE__*/_react.default.createElement(_Typography.default, {
    component: "h1",
    variant: "h1",
    key: index
  }, data.count1))), /*#__PURE__*/_react.default.createElement(_material.Box, {
    textAlign: 'center'
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Guest User Bookings"), visit_data.map((data, index) => /*#__PURE__*/_react.default.createElement(_Typography.default, {
    component: "h1",
    variant: "h1",
    key: index
  }, data.count2))))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "models"
  }, /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: {
      width: '100%',
      marginTop: '5vh'
    }
  })))));
};
var _default = exports.default = Report_3_Results;