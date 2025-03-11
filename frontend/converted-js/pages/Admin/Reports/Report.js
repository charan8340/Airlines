"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AirRoute;
var React = _interopRequireWildcard(require("react"));
var _styles = require("@mui/material/styles");
var _Box = _interopRequireDefault(require("@mui/material/Box"));
var _Drawer = _interopRequireDefault(require("@mui/material/Drawer"));
var _AppBar = _interopRequireDefault(require("@mui/material/AppBar"));
var _Toolbar = _interopRequireDefault(require("@mui/material/Toolbar"));
var _List = _interopRequireDefault(require("@mui/material/List"));
var _CssBaseline = _interopRequireDefault(require("@mui/material/CssBaseline"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _Divider = _interopRequireDefault(require("@mui/material/Divider"));
var _IconButton = _interopRequireDefault(require("@mui/material/IconButton"));
var _Menu = _interopRequireDefault(require("@mui/icons-material/Menu"));
var _ListItem = _interopRequireDefault(require("@mui/material/ListItem"));
var _ListItemButton = _interopRequireDefault(require("@mui/material/ListItemButton"));
var _ListItemIcon = _interopRequireDefault(require("@mui/material/ListItemIcon"));
var _ListItemText = _interopRequireDefault(require("@mui/material/ListItemText"));
var _GridView = _interopRequireDefault(require("@mui/icons-material/GridView"));
var _Book = _interopRequireDefault(require("@mui/icons-material/Book"));
var _FlightTakeoff = _interopRequireDefault(require("@mui/icons-material/FlightTakeoff"));
var _Flight = _interopRequireDefault(require("@mui/icons-material/Flight"));
var _ConnectingAirports = _interopRequireDefault(require("@mui/icons-material/ConnectingAirports"));
var _Route = _interopRequireDefault(require("@mui/icons-material/Route"));
var _DataArray = _interopRequireDefault(require("@mui/icons-material/DataArray"));
var _PinDrop = _interopRequireDefault(require("@mui/icons-material/PinDrop"));
var _Groups = _interopRequireDefault(require("@mui/icons-material/Groups"));
var _Assessment = _interopRequireDefault(require("@mui/icons-material/Assessment"));
var _Logout = _interopRequireDefault(require("@mui/icons-material/Logout"));
var _Paper = _interopRequireDefault(require("@mui/material/Paper"));
var _Stack = _interopRequireDefault(require("@mui/material/Stack"));
var _Button = _interopRequireDefault(require("@mui/material/Button"));
var _Grid = _interopRequireDefault(require("@mui/material/Grid"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const drawerWidth = 240;
const urls1 = ['/dashboard', '/booking_list', '/flight', '/aircraft', '/airport', '/route', '/aircraft_model', '/location'];
const urls2 = ['/user_list', '/reports', '/logout'];
const Item = (0, _styles.styled)(_Box.default)(_ref => {
  let {
    theme
  } = _ref;
  return {
    padding: theme.spacing(1),
    height: "5vw"
    // boxShadow: "0px 0px 2px 0px rgba(0,0,0,0.75)",
  };
});
const openedMixin = theme => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: 'hidden'
});
const closedMixin = theme => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`
  }
});
const DrawerHeader = (0, _styles.styled)('div')(_ref2 => {
  let {
    theme
  } = _ref2;
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar
  };
});
const AppBar = (0, _styles.styled)(_AppBar.default, {
  shouldForwardProp: prop => prop !== 'open'
})(_ref3 => {
  let {
    theme,
    open
  } = _ref3;
  return {
    zIndex: theme.zIndex.drawer + 1
  };
});
const Drawer = (0, _styles.styled)(_Drawer.default, {
  shouldForwardProp: prop => prop !== 'open'
})(_ref4 => {
  let {
    theme,
    open
  } = _ref4;
  return {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme)
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme)
    })
  };
});
function AirRoute() {
  const theme = (0, _styles.useTheme)();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };
  return /*#__PURE__*/React.createElement(_Box.default, {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(_CssBaseline.default, null), /*#__PURE__*/React.createElement(AppBar, {
    position: "fixed",
    open: open,
    sx: {
      backgroundColor: "#000000"
    }
  }, /*#__PURE__*/React.createElement(_Toolbar.default, null, /*#__PURE__*/React.createElement(_IconButton.default, {
    color: "inherit",
    "aria-label": "open drawer",
    onClick: handleDrawerOpen,
    edge: "start",
    sx: {
      marginRight: 5,
      ...(open && {
        display: 'fixed'
      })
    }
  }, /*#__PURE__*/React.createElement(_Menu.default, null)), /*#__PURE__*/React.createElement(_Typography.default, {
    variant: "h6",
    noWrap: true,
    component: "a",
    href: "/",
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
  }, "B AIRLINES"))), /*#__PURE__*/React.createElement(Drawer, {
    variant: "permanent",
    open: open
  }, /*#__PURE__*/React.createElement(DrawerHeader, null), /*#__PURE__*/React.createElement(_Divider.default, null), /*#__PURE__*/React.createElement(_List.default, null, ['Dashboard', 'Bookings', 'Flights', 'Aircrafts', 'Airports', 'Routes', 'Aircraft Models', 'Locations'].map((text, index) => /*#__PURE__*/React.createElement(_ListItem.default, {
    key: text,
    disablePadding: true,
    sx: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement(_ListItemButton.default, {
    href: urls1[index],
    sx: {
      minHeight: 48,
      justifyContent: open ? 'initial' : 'center',
      px: 2.5
    }
  }, /*#__PURE__*/React.createElement(_ListItemIcon.default, {
    sx: {
      minWidth: 0,
      mr: open ? 3 : 'auto',
      justifyContent: 'center'
    }
  }, index % 8 === 0 ? /*#__PURE__*/React.createElement(_GridView.default, null) : index % 8 === 1 ? /*#__PURE__*/React.createElement(_Book.default, null) : index % 8 === 2 ? /*#__PURE__*/React.createElement(_FlightTakeoff.default, null) : index % 8 === 3 ? /*#__PURE__*/React.createElement(_Flight.default, null) : index % 8 === 4 ? /*#__PURE__*/React.createElement(_ConnectingAirports.default, null) : index % 8 === 5 ? /*#__PURE__*/React.createElement(_Route.default, null) : index % 8 === 6 ? /*#__PURE__*/React.createElement(_DataArray.default, null) : /*#__PURE__*/React.createElement(_PinDrop.default, null)), /*#__PURE__*/React.createElement(_ListItemText.default, {
    primary: text,
    sx: {
      opacity: open ? 1 : 0
    }
  }))))), /*#__PURE__*/React.createElement(_Divider.default, null), /*#__PURE__*/React.createElement(_List.default, null, ['Users', 'Reports', 'Logout'].map((text, index) => /*#__PURE__*/React.createElement(_ListItem.default, {
    key: text,
    disablePadding: true,
    sx: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement(_ListItemButton.default, {
    href: urls2[index],
    sx: {
      minHeight: 48,
      justifyContent: open ? 'initial' : 'center',
      px: 2.5
    }
  }, /*#__PURE__*/React.createElement(_ListItemIcon.default, {
    sx: {
      minWidth: 0,
      mr: open ? 3 : 'auto',
      justifyContent: 'center'
    }
  }, index % 3 === 0 ? /*#__PURE__*/React.createElement(_Groups.default, null) : index % 3 === 1 ? /*#__PURE__*/React.createElement(_Assessment.default, null) : /*#__PURE__*/React.createElement(_Logout.default, null)), /*#__PURE__*/React.createElement(_ListItemText.default, {
    primary: text,
    sx: {
      opacity: open ? 1 : 0
    }
  })))))), /*#__PURE__*/React.createElement(_Box.default, {
    component: "main",
    sx: {
      flexGrow: 1,
      p: 3
    }
  }, /*#__PURE__*/React.createElement(_Box.default, {
    component: "main",
    sx: {
      flexGrow: 1,
      paddingTop: 4.5
    }
  }, /*#__PURE__*/React.createElement(_Box.default, {
    component: "main",
    sx: {
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(_Grid.default, null, /*#__PURE__*/React.createElement("h1", null, "Reports"))), /*#__PURE__*/React.createElement(_Box.default, {
    sx: {
      width: '80%'
    },
    marginLeft: "5%"
  }, /*#__PURE__*/React.createElement(_Stack.default, {
    spacing: 1.5,
    maxWidth: '80%'
  }, /*#__PURE__*/React.createElement(Item, null, /*#__PURE__*/React.createElement("h2", null, "Adults and Children in a flight", /*#__PURE__*/React.createElement(_Button.default, {
    variant: "contained",
    href: "/report_1",
    style: {
      float: 'right',
      backgroundColor: '#000000'
    }
  }, "Check"))), /*#__PURE__*/React.createElement(Item, null, /*#__PURE__*/React.createElement("h2", null, "Number of passengers visiting a destiation", /*#__PURE__*/React.createElement(_Button.default, {
    variant: "contained",
    href: "/report_2",
    style: {
      float: 'right',
      backgroundColor: '#000000'
    }
  }, "Check"))), /*#__PURE__*/React.createElement(Item, null, /*#__PURE__*/React.createElement("h2", null, "Number of bookings by a passenger type", /*#__PURE__*/React.createElement(_Button.default, {
    variant: "contained",
    href: "/report_3",
    style: {
      float: 'right',
      backgroundColor: '#000000'
    }
  }, "Check"))), /*#__PURE__*/React.createElement(Item, null, /*#__PURE__*/React.createElement("h2", null, "Past Flights", /*#__PURE__*/React.createElement(_Button.default, {
    variant: "contained",
    href: "/report_4",
    style: {
      float: 'right',
      backgroundColor: '#000000'
    }
  }, "Check"))), /*#__PURE__*/React.createElement(Item, null, /*#__PURE__*/React.createElement("h2", null, "Revenue by a aircraft types", /*#__PURE__*/React.createElement(_Button.default, {
    variant: "contained",
    href: "/report_5",
    style: {
      float: 'right',
      backgroundColor: '#000000'
    }
  }, "Check"))))))));
}