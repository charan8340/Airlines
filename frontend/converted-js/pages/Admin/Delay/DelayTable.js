"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _axios = _interopRequireDefault(require("axios"));
var _material = require("@mui/material");
var _xDataGrid = require("@mui/x-data-grid");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const DelayTable = () => {
  const [flights, setFlights] = (0, _react.useState)([]);
  (0, _react.useEffect)(() => {
    const fetchAllFlights = async () => {
      try {
        const res = await _axios.default.get('http://localhost:8000/delay');
        setFlights(res.data);
      } catch (err) {
        console.error('Error fetching flights:', err);
      }
    };
    fetchAllFlights();
  }, []);
  const removeTAndZ = dateString => {
    if (!dateString) return 'N/A';
    const [date, time] = dateString.split(/T|Z/);
    const [t] = time.split('.');
    const [h, m] = t.split(':');
    return `${date} | ${h} : ${m}`;
  };
  const rows = flights.map(flight => ({
    id: flight.flight_id,
    route_id: flight.route_id,
    aircraft_id: flight.aircraft_id,
    departure_time: removeTAndZ(flight.departure_time),
    arrival_time: removeTAndZ(flight.arrival_time),
    status: flight.status,
    delay: flight.delay?.data ?? false // Handles potential undefined values
  }));
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
    field: 'status',
    headerName: 'Status',
    width: 130
  }, {
    field: 'delay',
    headerName: 'Delay',
    width: 130,
    valueFormatter: params => params.value ? 'DELAYED' : 'NOT DELAYED'
  }, {
    field: 'departure_time',
    headerName: 'Departure Time',
    width: 150
  }, {
    field: 'departure_delay',
    headerName: '',
    width: 150,
    sortable: false,
    disableClickEventBubbling: true,
    renderCell: params => /*#__PURE__*/_react.default.createElement(_material.Stack, {
      direction: "row",
      spacing: 2
    }, /*#__PURE__*/_react.default.createElement(_material.Button, {
      color: "error",
      size: "small",
      href: `/delay_departure/${params.row.id}`
    }, "Delay Departure"))
  }, {
    field: 'arrival_time',
    headerName: 'Arrival Time',
    width: 150
  }, {
    field: 'arrival_delay',
    headerName: '',
    width: 150,
    sortable: false,
    disableClickEventBubbling: true,
    renderCell: params => /*#__PURE__*/_react.default.createElement(_material.Stack, {
      direction: "row",
      spacing: 2
    }, /*#__PURE__*/_react.default.createElement(_material.Button, {
      color: "error",
      size: "small",
      href: `/delay_arrival/${params.row.id}`
    }, "Delay Arrival"))
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
  }, /*#__PURE__*/_react.default.createElement(_material.Grid, null, /*#__PURE__*/_react.default.createElement("h1", null, "Flight Delay"))), /*#__PURE__*/_react.default.createElement("div", {
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
  }))));
};
var _default = exports.default = DelayTable;