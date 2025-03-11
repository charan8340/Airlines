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
const AircraftModelTable = () => {
  const [models, setModels] = (0, _react.useState)([]);
  (0, _react.useEffect)(() => {
    const fetchAllModels = async () => {
      try {
        const res = await _axios.default.get("http://localhost:8000/aircraft_model");
        setModels(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchAllModels();
  }, []);
  const handleDelete = async id => {
    try {
      await _axios.default.delete(`http://localhost:8000/aircraft_model/${id}`);
      setModels(models.filter(model => model.model_id !== id)); // Update state instead of reload
    } catch (err) {
      console.error(err);
    }
  };
  const [open, setOpen] = (0, _react.useState)(false);
  const theme = (0, _styles.useTheme)();
  const fullScreen = (0, _material.useMediaQuery)(theme.breakpoints.down('md'));
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // ✅ **Fixing TypeScript syntax in JavaScript**
  const rows = models.map(model => ({
    id: model.model_id,
    brand: model.brand,
    model_type: model.model,
    e_seats: model.economy_seats,
    b_seats: model.business_seats,
    p_seats: model.platinum_seats
  }));
  const columns = [{
    field: 'id',
    headerName: 'Model ID',
    width: 100
  }, {
    field: 'brand',
    headerName: 'Brand',
    width: 150
  }, {
    field: 'model_type',
    headerName: 'Model',
    width: 150
  }, {
    field: 'e_seats',
    headerName: 'Economy Seats',
    width: 200
  }, {
    field: 'b_seats',
    headerName: 'Business Seats',
    width: 200
  }, {
    field: 'p_seats',
    headerName: 'Platinum Seats',
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
      href: `/aircraft_model_update/${params.row.id}`
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
      onClick: handleClickOpen
    }, "Delete"), /*#__PURE__*/_react.default.createElement(_material.Dialog, {
      fullScreen: fullScreen,
      open: open,
      onClose: handleClose
    }, /*#__PURE__*/_react.default.createElement(_material.DialogTitle, null, "Delete aircraft model instance?"), /*#__PURE__*/_react.default.createElement(_material.DialogContent, null, /*#__PURE__*/_react.default.createElement(_material.DialogContentText, null, "Are you sure you want to delete this aircraft model? You might not be able to restore it.")), /*#__PURE__*/_react.default.createElement(_material.DialogActions, null, /*#__PURE__*/_react.default.createElement(_material.Button, {
      onClick: handleClose
    }, "Cancel"), /*#__PURE__*/_react.default.createElement(_material.Button, {
      onClick: () => handleDelete(params.row.id),
      color: "error"
    }, "Delete"))))
  }];
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_material.Box, {
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
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, null, /*#__PURE__*/_react.default.createElement("h1", null, "Aircraft Models", /*#__PURE__*/_react.default.createElement(_material.Button, {
    variant: "contained",
    href: "/aircraft_model_add",
    sx: {
      float: 'right',
      backgroundColor: '#000'
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
    pageSizeOptions: [5],
    checkboxSelection: true,
    disableRowSelectionOnClick: true
  })))));
};
var _default = exports.default = AircraftModelTable;