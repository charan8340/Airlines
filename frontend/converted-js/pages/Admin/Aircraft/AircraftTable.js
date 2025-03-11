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
const AircraftTable = () => {
  const [models, setmodels] = (0, _react.useState)([]);
  (0, _react.useEffect)(() => {
    const fetchALLModels = async () => {
      try {
        const res = await _axios.default.get("http://localhost:8000/aircraft");
        setmodels(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchALLModels();
  }, []);
  const handleDelete = async id => {
    try {
      await _axios.default.delete(`http://localhost:8000/aircraft/` + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  const [open, setOpen] = _react.default.useState(false);
  const theme = (0, _styles.useTheme)();
  const fullScreen = (0, _useMediaQuery.default)(theme.breakpoints.down('md'));
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const rows = models.map(model => ({
    id: model.aircraft_id,
    model_id: model.model_id,
    call_sign: model.call_sign,
    valid: model.valid.data
  }));
  const columns = [{
    field: 'id',
    headerName: 'Aircraft ID',
    width: 200
  }, {
    field: 'model_id',
    headerName: 'Model ID',
    width: 200
  }, {
    field: 'call_sign',
    headerName: 'Call Sign',
    width: 250
  }, {
    field: 'valid',
    headerName: 'Valid',
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
    }, /*#__PURE__*/_react.default.createElement(_Button.default, {
      color: "primary",
      size: "small",
      href: `/aircraft_update/${params.row.id}`
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
    }, /*#__PURE__*/_react.default.createElement(_Button.default, {
      color: "error",
      size: "small",
      onClick: handleClickOpen
    }, "Delete"), /*#__PURE__*/_react.default.createElement(_Dialog.default, {
      fullScreen: fullScreen,
      open: open,
      onClose: handleClose,
      "aria-labelledby": "responsive-dialog-title"
    }, /*#__PURE__*/_react.default.createElement(_DialogTitle.default, {
      id: "responsive-dialog-title"
    }, "Delete aircraft instance?"), /*#__PURE__*/_react.default.createElement(_DialogContent.default, null, /*#__PURE__*/_react.default.createElement(_DialogContentText.default, null, "Are you sure you want to delete this aircraft instance? You might not be able to restore it again.")), /*#__PURE__*/_react.default.createElement(_DialogActions.default, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
      autoFocus: true,
      onClick: handleClose
    }, "Cancel"), /*#__PURE__*/_react.default.createElement(_Button.default, {
      onClick: () => handleDelete(params.row.id),
      color: "error",
      autoFocus: true
    }, "Delete"))))
  }];
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, " ", /*#__PURE__*/_react.default.createElement(_material.Box, {
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
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, null, /*#__PURE__*/_react.default.createElement("h1", null, "Aircrafts", /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "contained",
    href: "/aircraft_add",
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
    pageSizeOptions: [5],
    checkboxSelection: true,
    disableRowSelectionOnClick: true
  })))));
};
var _default = exports.default = AircraftTable;