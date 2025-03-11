"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Paper = _interopRequireDefault(require("@mui/material/Paper"));
var _Container = _interopRequireDefault(require("@mui/material/Container"));
var React = _interopRequireWildcard(require("react"));
var _Grid = _interopRequireDefault(require("@mui/material/Grid"));
var _InputLabel = _interopRequireDefault(require("@mui/material/InputLabel"));
var _MenuItem = _interopRequireDefault(require("@mui/material/MenuItem"));
var _FormControl = _interopRequireDefault(require("@mui/material/FormControl"));
var _Select = _interopRequireDefault(require("@mui/material/Select"));
var _FormHelperText = _interopRequireDefault(require("@mui/material/FormHelperText"));
var _styles = require("@mui/material/styles");
var _Navbar = _interopRequireDefault(require("./Navbar"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function SearchBox() {
  const [age, setAge] = React.useState('');
  const handleChange = event => {
    setAge(event.target.value);
  };
  const Item = (0, _styles.experimentalStyled)(_Paper.default)(_ref => {
    let {
      theme
    } = _ref;
    return {
      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      ...theme.typography.body2,
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary
    };
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, " ", /*#__PURE__*/React.createElement(_Navbar.default, null), /*#__PURE__*/React.createElement(_Container.default, {
    sx: {
      mt: '30vh'
    }
  }, /*#__PURE__*/React.createElement(_Grid.default, {
    container: true,
    spacing: {
      xs: 0,
      md: 0
    },
    columns: {
      xs: 4,
      sm: 8,
      md: 12
    },
    elevation: 0,
    component: "form",
    noValidate: true,
    autoComplete: "off",
    sx: {
      borderRadius: 1,
      padding: 1.5,
      bgcolor: '#ffffff77',
      backdropFilter: 'blur(5px)',
      '& .MuiTextField-root': {
        m: 1,
        width: '25ch'
      }
    }
  }, Array.from(Array(6)).map((_, index) => /*#__PURE__*/React.createElement(_Grid.default, {
    item: true,
    xs: 0,
    sm: 4,
    md: 4,
    key: index
  }, /*#__PURE__*/React.createElement(Item, {
    sx: {
      bgcolor: '#ffffff00',
      padding: 0
    },
    elevation: 0
  }, /*#__PURE__*/React.createElement(_FormControl.default, {
    required: true,
    sx: {
      m: 1,
      minWidth: '22vw',
      width: 'auto'
    }
  }, /*#__PURE__*/React.createElement(_InputLabel.default, {
    id: "demo-simple-select-required-label"
  }, "Age"), /*#__PURE__*/React.createElement(_Select.default, {
    labelId: "demo-simple-select-required-label",
    id: "demo-simple-select-required",
    value: age,
    label: "Age *",
    onChange: handleChange
  }, /*#__PURE__*/React.createElement(_MenuItem.default, {
    value: ""
  }, /*#__PURE__*/React.createElement("em", null, "None")), /*#__PURE__*/React.createElement(_MenuItem.default, {
    value: 10
  }, "Ten"), /*#__PURE__*/React.createElement(_MenuItem.default, {
    value: 20
  }, "Twenty"), /*#__PURE__*/React.createElement(_MenuItem.default, {
    value: 30
  }, "Thirty")))))))), " ");
}
var _default = exports.default = SearchBox;