"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _axios = _interopRequireDefault(require("axios"));
var _material = require("@mui/material");
var _xDataGrid = require("@mui/x-data-grid");
var _styles = require("@mui/material/styles");
var _Grid = _interopRequireDefault(require("@mui/material/Grid"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const AirportTable = () => {
  const [airports, setAirports] = (0, _react.useState)([]);
  const [open, setOpen] = (0, _react.useState)(false);
  const [deleteId, setDeleteId] = (0, _react.useState)(null);
  const theme = (0, _styles.useTheme)();
  const fullScreen = (0, _material.useMediaQuery)(theme.breakpoints.down('md'));
  (0, _react.useEffect)(() => {
    const fetchAllAirports = async () => {
      try {
        const res = await _axios.default.get("http://localhost:8000/airport");
        setAirports(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchAllAirports();
  }, []);
  const handleClickOpen = id => {
    setDeleteId(id);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleDelete = async () => {
    try {
      await _axios.default.delete(`http://localhost:8000/airport/${deleteId}`);
      setAirports(airports.filter(airport => airport.airport_code !== deleteId));
      setOpen(false);
    } catch (err) {
      console.error(err);
    }
  };
  const rows = airports.map(airport => ({
    id: airport.airport_code,
    name: airport.name,
    location_id: airport.location_id
  }));
  const columns = [{
    field: 'id',
    headerName: 'Airport Code',
    width: 200
  }, {
    field: 'name',
    headerName: 'Airport Name',
    width: 500
  }, {
    field: 'location_id',
    headerName: 'Location ID',
    width: 250
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
      href: `/airport_update/${params.row.id}`
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
  return /*#__PURE__*/_react.default.createElement(_material.Box, {
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
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, null, /*#__PURE__*/_react.default.createElement("h1", null, "Airport", /*#__PURE__*/_react.default.createElement(_material.Button, {
    variant: "contained",
    href: "/airport_add",
    sx: {
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
    pageSizeOptions: [5],
    checkboxSelection: true,
    disableRowSelectionOnClick: true
  })), /*#__PURE__*/_react.default.createElement(_material.Dialog, {
    fullScreen: fullScreen,
    open: open,
    onClose: handleClose,
    "aria-labelledby": "responsive-dialog-title"
  }, /*#__PURE__*/_react.default.createElement(_material.DialogTitle, {
    id: "responsive-dialog-title"
  }, "Delete airport instance?"), /*#__PURE__*/_react.default.createElement(_material.DialogContent, null, /*#__PURE__*/_react.default.createElement(_material.DialogContentText, null, "Are you sure you want to delete this airport? You might not be able to restore it.")), /*#__PURE__*/_react.default.createElement(_material.DialogActions, null, /*#__PURE__*/_react.default.createElement(_material.Button, {
    autoFocus: true,
    onClick: handleClose
  }, "Cancel"), /*#__PURE__*/_react.default.createElement(_material.Button, {
    onClick: handleDelete,
    color: "error"
  }, "Delete"))));
};
var _default = exports.default = AirportTable;