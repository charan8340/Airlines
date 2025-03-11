"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _axios = _interopRequireDefault(require("axios"));
var _material = require("@mui/material");
var _xDataGrid = require("@mui/x-data-grid");
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Report_5_Results = () => {
  const [flights, setFlights] = (0, _react.useState)([]);
  const [isButtonHidden, setIsButtonHidden] = (0, _react.useState)(false);
  const location = (0, _reactRouterDom.useLocation)();
  const origin = location.pathname.split("/")[2];
  const destination = location.pathname.split("/")[3];
  (0, _react.useEffect)(() => {
    const fetchAllModels = async () => {
      try {
        await _axios.default.post("http://localhost:8000/boarding");
        await _axios.default.post("http://localhost:8000/in_air");
      } catch (err) {
        console.error("Error posting data:", err);
      }
      try {
        const res = await _axios.default.get(`http://localhost:8000/report_4/${origin}/${destination}`);
        setFlights(res.data);
      } catch (err) {
        console.error("Error fetching flights:", err);
      }
    };
    fetchAllModels();
  }, [origin, destination]);
  const removeTAndZ = dateString => {
    if (!dateString) return "N/A"; // Handle undefined/null cases
    const [date, time] = dateString.split(/T|Z/);
    if (!time) return date; // If there's no time part
    const [t] = time.split(".");
    const [h, m] = t.split(":");
    return `${date} | ${h} : ${m}`;
  };
  const rows = flights.map(flight => ({
    id: flight.flight_id,
    aircraft: flight.call_sign,
    departure_time: removeTAndZ(flight.departure_time),
    arrival_time: removeTAndZ(flight.arrival_time),
    delay: flight.delay?.data || 0,
    // Handle possible undefined values
    passenger_count: flight.total_booking_amount || 0 // Default to 0 if undefined
  }));
  const columns = [{
    field: 'id',
    headerName: 'Flight ID',
    flex: 1
  }, {
    field: 'aircraft',
    headerName: 'Aircraft',
    flex: 1
  }, {
    field: 'departure_time',
    headerName: 'Departure Time',
    flex: 1
  }, {
    field: 'arrival_time',
    headerName: 'Arrival Time',
    flex: 1
  }, {
    field: 'delay',
    headerName: 'Status',
    flex: 1,
    valueFormatter: params => params.value === 1 ? "DELAYED" : "NOT DELAYED"
  }, {
    field: 'passenger_count',
    headerName: 'Passenger Count',
    flex: 1
  }];
  const printPage = () => {
    window.print();
  };
  const combineEvent = () => {
    setIsButtonHidden(true);
    setTimeout(printPage, 50);
    setTimeout(() => setIsButtonHidden(false), 1000);
  };
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
  }, /*#__PURE__*/_react.default.createElement(_material.Grid, null, /*#__PURE__*/_react.default.createElement("h1", null, "Past Flights From ", origin, " to ", destination, !isButtonHidden && /*#__PURE__*/_react.default.createElement(_material.Button, {
    variant: "contained",
    onClick: combineEvent,
    style: {
      float: 'right',
      backgroundColor: '#000000'
    }
  }, "Print Report")))), /*#__PURE__*/_react.default.createElement("div", {
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
          pageSize: 100
        }
      }
    },
    pageSizeOptions: [5, 10, 20, 100],
    checkboxSelection: true,
    disableRowSelectionOnClick: true
  })))));
};
var _default = exports.default = Report_5_Results;