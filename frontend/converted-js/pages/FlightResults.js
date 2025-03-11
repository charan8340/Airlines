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
var _reactRouterDom = require("react-router-dom");
var _Navbar = _interopRequireDefault(require("./Navbar"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const FlightResultsTable = () => {
  const [results, setResults] = (0, _react.useState)([]);
  const location = (0, _reactRouterDom.useLocation)();
  const navigate = (0, _reactRouterDom.useNavigate)();
  const theme = (0, _styles.useTheme)();
  const originAirport = decodeURIComponent(location.pathname.split("/")[3]);
  const targetAirport = decodeURIComponent(location.pathname.split("/")[4]);
  const departureTime = location.pathname.split("/")[5];
  const arrivalTime = location.pathname.split("/")[6];
  console.log("Origin Airport:", originAirport);
  console.log("Destination Airport:", targetAirport);
  console.log("Departure Time:", departureTime);
  console.log("Arrival Time:", arrivalTime);
  (0, _react.useEffect)(() => {
    const fetchFlightResults = async () => {
      try {
        await _axios.default.post("http://localhost:8000/boarding");
        await _axios.default.post("http://localhost:8000/in_air");
        await _axios.default.put("http://localhost:8000/in_air");
        const res = await _axios.default.get(`http://localhost:8000/route/available_flights/${originAirport}/${targetAirport}/${departureTime}/${arrivalTime}`);
        setResults(res.data);
      } catch (error) {
        console.error("Error fetching flight results:", error);
      }
    };
    fetchFlightResults();
  }, [originAirport, targetAirport, departureTime, arrivalTime]);
  const formatDateTime = dateString => {
    if (!dateString) return "N/A";
    const [date, time] = dateString.split(/T|Z/);
    const [hour, minute] = time.split(":");
    return `${date} | ${hour}:${minute}`;
  };
  const rows = results.map(result => ({
    id: result.flight_id,
    aircraftName: result.call_sign,
    originAirport,
    targetAirport,
    departureTime: formatDateTime(result.departure_time),
    arrivalTime: formatDateTime(result.arrival_time),
    flightStatus: result.status
  }));
  const columns = [{
    field: 'aircraftName',
    headerName: 'Aircraft Name',
    flex: 1
  }, {
    field: 'originAirport',
    headerName: 'Origin Airport',
    flex: 1.5
  }, {
    field: 'targetAirport',
    headerName: 'Destination Airport',
    flex: 1.5
  }, {
    field: 'departureTime',
    headerName: 'Departure Time',
    flex: 2
  }, {
    field: 'arrivalTime',
    headerName: 'Arrival Time',
    flex: 2
  }, {
    field: 'flightStatus',
    headerName: 'Flight Status',
    flex: 1
  }, {
    field: 'id',
    headerName: '',
    flex: 2,
    renderCell: params => /*#__PURE__*/_react.default.createElement(_material.Stack, {
      direction: "row",
      spacing: 2
    }, /*#__PURE__*/_react.default.createElement(_material.Button, {
      variant: "contained",
      color: "success",
      onClick: () => {
        const token = localStorage.getItem("token");
        const path = token ? `/user_booking_type/${params.value}` : `/login_for_booking/${params.value}`;
        navigate(path);
      }
    }, "Book Now"))
  }];
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Navbar.default, null), /*#__PURE__*/_react.default.createElement(_material.Container, {
    sx: {
      paddingTop: 25
    }
  }, /*#__PURE__*/_react.default.createElement(_material.Box, {
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
  }, /*#__PURE__*/_react.default.createElement(_material.Grid, null, /*#__PURE__*/_react.default.createElement("h1", null, "Available Flights"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "models"
  }, /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: {
      width: '100%',
      marginTop: '5vh'
    }
  }, /*#__PURE__*/_react.default.createElement(_xDataGrid.DataGrid, {
    rows: rows,
    columns: columns,
    getRowId: row => row.id,
    initialState: {
      pagination: {
        paginationModel: {
          pageSize: 8
        }
      }
    },
    pageSizeOptions: [5]
  }))))));
};
var _default = exports.default = FlightResultsTable;