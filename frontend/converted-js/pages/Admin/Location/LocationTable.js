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
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const LocationTable = () => {
  const [locations, setLocations] = (0, _react.useState)([]);
  const [open, setOpen] = (0, _react.useState)(false);
  const [selectedId, setSelectedId] = (0, _react.useState)(null);
  const theme = (0, _styles.useTheme)();
  const fullScreen = (0, _material.useMediaQuery)(theme.breakpoints.down('md'));
  (0, _react.useEffect)(() => {
    const fetchAllLocations = async () => {
      try {
        const res = await _axios.default.get("http://localhost:8000/location");
        setLocations(res.data);
      } catch (err) {
        console.error("Error fetching locations:", err);
      }
    };
    fetchAllLocations();
  }, []);
  const handleDelete = async id => {
    try {
      await _axios.default.delete(`http://localhost:8000/location/${id}`);
      setLocations(locations.filter(location => location.location_id !== id)); // Update state without reload
      setOpen(false);
    } catch (err) {
      console.error("Error deleting location:", err);
    }
  };
  const handleClickOpen = id => {
    setSelectedId(id);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const rows = locations.map(location => ({
    id: location.location_id,
    location_name: location.location_name,
    parent_location_id: location.parent_location_id || "N/A"
  }));
  const columns = [{
    field: 'id',
    headerName: 'Location ID',
    width: 200
  }, {
    field: 'location_name',
    headerName: 'Location Name',
    width: 400
  }, {
    field: 'parent_location_id',
    headerName: 'Parent Location ID',
    width: 300
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
      href: `/location_update/${params.row.id}`
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
  }, /*#__PURE__*/_react.default.createElement(_material.Grid, null, /*#__PURE__*/_react.default.createElement("h1", null, "Locations", /*#__PURE__*/_react.default.createElement(_material.Button, {
    variant: "contained",
    href: "/location_add",
    style: {
      float: 'right',
      backgroundColor: '#000000'
    }
  }, "Add")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "models"
  }, /*#__PURE__*/_react.default.createElement(_material.Box, {
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
    pageSizeOptions: [5, 8, 10],
    checkboxSelection: true,
    disableRowSelectionOnClick: true
  }))), /*#__PURE__*/_react.default.createElement(_material.Dialog, {
    fullScreen: fullScreen,
    open: open,
    onClose: handleClose,
    "aria-labelledby": "responsive-dialog-title"
  }, /*#__PURE__*/_react.default.createElement(_material.DialogTitle, {
    id: "responsive-dialog-title"
  }, "Delete location instance?"), /*#__PURE__*/_react.default.createElement(_material.DialogContent, null, /*#__PURE__*/_react.default.createElement(_material.DialogContentText, null, "Are you sure you want to delete this location? This action cannot be undone.")), /*#__PURE__*/_react.default.createElement(_material.DialogActions, null, /*#__PURE__*/_react.default.createElement(_material.Button, {
    autoFocus: true,
    onClick: handleClose
  }, "Cancel"), /*#__PURE__*/_react.default.createElement(_material.Button, {
    onClick: () => handleDelete(selectedId),
    color: "error",
    autoFocus: true
  }, "Delete"))));
};
var _default = exports.default = LocationTable;