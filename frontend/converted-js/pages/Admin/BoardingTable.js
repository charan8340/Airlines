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
const BoardingTable = () => {
  const [boarding, setBoarding] = (0, _react.useState)([]);
  const [open, setOpen] = (0, _react.useState)(false);
  const [selectedFlight, setSelectedFlight] = (0, _react.useState)(null);
  const theme = (0, _styles.useTheme)();
  const fullScreen = (0, _material.useMediaQuery)(theme.breakpoints.down('md'));

  // Fetch data
  const fetchAllFlights = (0, _react.useCallback)(async () => {
    try {
      await _axios.default.post("http://localhost:8000/boarding"); // Ensure backend requires this

      const res = await _axios.default.get("http://localhost:8000/boarding");
      setBoarding(res.data);
    } catch (err) {
      console.error(err);
    }
  }, []);
  (0, _react.useEffect)(() => {
    fetchAllFlights();
  }, [fetchAllFlights]);

  // Delete function
  const handleDelete = async () => {
    if (!selectedFlight) return;
    try {
      await _axios.default.delete(`http://localhost:8000/aircraft/${selectedFlight}`);
      setOpen(false);
      fetchAllFlights(); // Refresh data
    } catch (err) {
      console.error(err);
    }
  };

  // Open delete dialog
  const handleClickOpen = id => {
    setSelectedFlight(id);
    setOpen(true);
  };

  // Close delete dialog
  const handleClose = () => {
    setOpen(false);
    setSelectedFlight(null);
  };

  // Format date (remove T and Z)
  const formatDate = dateString => {
    if (!dateString) return "N/A";
    const [date, time] = dateString.split(/T|Z/);
    const [h, m] = time.split(":");
    return `${date} | ${h}:${m}`;
  };

  // Rows for DataGrid
  const rows = boarding.map(flight => ({
    id: flight.flight_id,
    route_id: flight.route_id,
    aircraft_id: flight.aircraft_id,
    departure_time: formatDate(flight.departure_time),
    arrival_time: formatDate(flight.arrival_time),
    status: flight.status,
    delay: flight.delay?.data ?? false // Prevents crash
  }));

  // Columns for DataGrid
  const columns = [{
    field: 'id',
    headerName: 'Flight ID',
    width: 100
  }, {
    field: 'route_id',
    headerName: 'Route ID',
    width: 100
  }, {
    field: 'aircraft_id',
    headerName: 'Aircraft ID',
    width: 100
  }, {
    field: 'departure_time',
    headerName: 'Departure Time',
    width: 200
  }, {
    field: 'arrival_time',
    headerName: 'Arrival Time',
    width: 200
  }, {
    field: 'status',
    headerName: 'Status',
    width: 130
  }, {
    field: 'delay',
    headerName: 'Delay',
    width: 130,
    valueFormatter: params => params.value ? 'DELAY' : 'NO DELAY'
  }, {
    field: 'edit',
    headerName: '',
    width: 100,
    sortable: false,
    renderCell: params => /*#__PURE__*/_react.default.createElement(_material.Button, {
      color: "primary",
      size: "small",
      href: `/flight_update/${params.row.id}`
    }, "Update")
  }, {
    field: 'delete',
    headerName: '',
    width: 100,
    sortable: false,
    renderCell: params => /*#__PURE__*/_react.default.createElement(_material.Button, {
      color: "error",
      size: "small",
      onClick: () => handleClickOpen(params.row.id)
    }, "Delete")
  }];
  return /*#__PURE__*/_react.default.createElement(_material.Container, null, /*#__PURE__*/_react.default.createElement(_material.Box, {
    component: "main",
    sx: {
      flexGrow: 1,
      paddingTop: 4.5
    }
  }, /*#__PURE__*/_react.default.createElement(_material.Grid, null, /*#__PURE__*/_react.default.createElement("h2", null, "Currently Boarding")), /*#__PURE__*/_react.default.createElement(_material.Box, {
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
  }, "Delete flight instance?"), /*#__PURE__*/_react.default.createElement(_material.DialogContent, null, /*#__PURE__*/_react.default.createElement(_material.DialogContentText, null, "Are you sure you want to delete this flight instance? This action cannot be undone.")), /*#__PURE__*/_react.default.createElement(_material.DialogActions, null, /*#__PURE__*/_react.default.createElement(_material.Button, {
    autoFocus: true,
    onClick: handleClose
  }, "Cancel"), /*#__PURE__*/_react.default.createElement(_material.Button, {
    onClick: handleDelete,
    color: "error",
    autoFocus: true
  }, "Delete")))));
};
var _default = exports.default = BoardingTable;