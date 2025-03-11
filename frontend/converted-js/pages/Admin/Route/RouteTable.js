"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _axios = _interopRequireDefault(require("axios"));
var _material = require("@mui/material");
var _xDataGrid = require("@mui/x-data-grid");
var _Dialog = _interopRequireDefault(require("@mui/material/Dialog"));
var _DialogActions = _interopRequireDefault(require("@mui/material/DialogActions"));
var _DialogContent = _interopRequireDefault(require("@mui/material/DialogContent"));
var _DialogContentText = _interopRequireDefault(require("@mui/material/DialogContentText"));
var _DialogTitle = _interopRequireDefault(require("@mui/material/DialogTitle"));
var _useMediaQuery = _interopRequireDefault(require("@mui/material/useMediaQuery"));
var _styles = require("@mui/material/styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const RouteTable = () => {
  const [routes, setRoutes] = (0, _react.useState)([]);
  const [open, setOpen] = (0, _react.useState)(false);
  const [selectedRouteId, setSelectedRouteId] = (0, _react.useState)(null);
  const theme = (0, _styles.useTheme)();
  const fullScreen = (0, _useMediaQuery.default)(theme.breakpoints.down('md'));
  (0, _react.useEffect)(() => {
    const fetchAllRoutes = async () => {
      try {
        const res = await _axios.default.get("http://localhost:8000/route");
        setRoutes(res.data);
      } catch (err) {
        console.error("Error fetching routes:", err);
      }
    };
    fetchAllRoutes();
  }, []);
  const handleDelete = async () => {
    if (!selectedRouteId) return;
    try {
      await _axios.default.delete(`http://localhost:8000/route/${selectedRouteId}`);
      setRoutes(prevRoutes => prevRoutes.filter(route => route.route_id !== selectedRouteId));
      handleClose();
    } catch (err) {
      console.error("Error deleting route:", err);
    }
  };
  const handleClickOpen = id => {
    setSelectedRouteId(id);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setSelectedRouteId(null);
  };
  const rows = routes.map(route => ({
    id: route.route_id,
    origin: route.origin,
    destination: route.destination,
    e_price: route.economy_price,
    b_price: route.business_price,
    p_price: route.platinum_price
  }));
  const columns = [{
    field: 'id',
    headerName: 'Route ID',
    width: 100
  }, {
    field: 'origin',
    headerName: 'Origin',
    width: 125
  }, {
    field: 'destination',
    headerName: 'Destination',
    width: 125
  }, {
    field: 'e_price',
    headerName: 'Economy Price',
    width: 200
  }, {
    field: 'b_price',
    headerName: 'Business Price',
    width: 200
  }, {
    field: 'p_price',
    headerName: 'Platinum Price',
    width: 200
  }, {
    field: 'edit',
    headerName: '',
    width: 100,
    sortable: false,
    disableClickEventBubbling: true,
    renderCell: params => /*#__PURE__*/_react.default.createElement(_material.Stack, {
      direction: "row",
      spacing: 2
    }, /*#__PURE__*/_react.default.createElement(_material.Button, {
      color: "primary",
      size: "small",
      href: `/route_update/${params.row.id}`
    }, "Update"))
  }, {
    field: 'delete',
    headerName: '',
    width: 100,
    sortable: false,
    disableClickEventBubbling: true,
    renderCell: params => /*#__PURE__*/_react.default.createElement(_material.Stack, {
      direction: "row",
      spacing: 2
    }, /*#__PURE__*/_react.default.createElement(_material.Button, {
      color: "error",
      size: "small",
      onClick: () => handleClickOpen(params.row.id)
    }, "Delete"))
  }];
  return /*#__PURE__*/_react.default.createElement(_material.Container, null, /*#__PURE__*/_react.default.createElement(_material.Box, {
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
  }, /*#__PURE__*/_react.default.createElement(_material.Grid, null, /*#__PURE__*/_react.default.createElement("h1", null, "Routes", /*#__PURE__*/_react.default.createElement(_material.Button, {
    variant: "contained",
    href: "/route_add",
    style: {
      float: 'right',
      backgroundColor: '#000000'
    }
  }, "Add")))), /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: {
      width: '100%',
      marginTop: '5vh'
    }
  }, /*#__PURE__*/_react.default.createElement(_xDataGrid.DataGrid, {
    rows: rows,
    columns: columns,
    initialState: {
      pagination: {
        paginationModel: {
          pageSize: 8
        }
      }
    },
    pageSizeOptions: [5, 10, 20],
    checkboxSelection: true,
    disableRowSelectionOnClick: true
  }))), /*#__PURE__*/_react.default.createElement(_Dialog.default, {
    fullScreen: fullScreen,
    open: open,
    onClose: handleClose,
    "aria-labelledby": "responsive-dialog-title"
  }, /*#__PURE__*/_react.default.createElement(_DialogTitle.default, {
    id: "responsive-dialog-title"
  }, "Delete route instance?"), /*#__PURE__*/_react.default.createElement(_DialogContent.default, null, /*#__PURE__*/_react.default.createElement(_DialogContentText.default, null, "Are you sure you want to delete this route instance? You might not be able to restore it again.")), /*#__PURE__*/_react.default.createElement(_DialogActions.default, null, /*#__PURE__*/_react.default.createElement(_material.Button, {
    autoFocus: true,
    onClick: handleClose
  }, "Cancel"), /*#__PURE__*/_react.default.createElement(_material.Button, {
    onClick: handleDelete,
    color: "error",
    autoFocus: true
  }, "Delete"))));
};
var _default = exports.default = RouteTable;