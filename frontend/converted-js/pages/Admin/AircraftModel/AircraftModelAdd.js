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
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const AircraftModel_Add = () => {
  const [the_model, setModel] = (0, _react.useState)({
    model_id: null,
    call_sign: ""
  });
  const [aircraftModels, setAircraftModels] = (0, _react.useState)([]);
  (0, _react.useEffect)(() => {
    const fetchALLModels = async () => {
      try {
        const res = await _axios.default.get("http://localhost:8000/aircraft_model");
        setAircraftModels(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchALLModels();
  }, []);
  const navigate = (0, _reactRouterDom.useNavigate)();
  const handleChange = e => {
    setModel(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const handleClick = async e => {
    e.preventDefault();
    try {
      await _axios.default.post("http://localhost:8000/aircraft_model", the_model);
      navigate("/aircraft_model");
    } catch (err) {
      console.log(err);
    }
  };
  console.log(the_model);
  console.log(aircraftModels);
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
  }, "New Aircraft"), /*#__PURE__*/_react.default.createElement(_Box.default, {
    component: "form",
    noValidate: true,
    sx: {
      mt: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_TextField.default, {
    margin: "normal",
    autoFocus: true,
    fullWidth: true,
    id: "brand",
    label: "Brand",
    name: "brand",
    type: "text",
    onChange: handleChange
  }), /*#__PURE__*/_react.default.createElement(_TextField.default, {
    margin: "normal",
    fullWidth: true,
    id: "model_type",
    label: "Model",
    name: "model",
    type: "text",
    onChange: handleChange
  }), /*#__PURE__*/_react.default.createElement(_TextField.default, {
    margin: "normal",
    fullWidth: true,
    name: "economy_seats",
    label: "Economy Seats",
    id: "e_seats",
    autoComplete: "e_seats",
    type: "number",
    onChange: handleChange
  }), /*#__PURE__*/_react.default.createElement(_TextField.default, {
    margin: "normal",
    fullWidth: true,
    name: "business_seats",
    label: "Business Seats",
    id: "b_seats",
    autoComplete: "b_seats",
    type: "number",
    onChange: handleChange
  }), /*#__PURE__*/_react.default.createElement(_TextField.default, {
    margin: "normal",
    fullWidth: true,
    name: "platinum_seats",
    label: "Platinum Seats",
    id: "p_seats",
    autoComplete: "p_seats",
    type: "number",
    onChange: handleChange
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
    href: "/aircraft_model"
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
var _default = exports.default = AircraftModel_Add;