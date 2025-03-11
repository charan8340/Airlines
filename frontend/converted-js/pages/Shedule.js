"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _axios = _interopRequireDefault(require("axios"));
var _Navbar = _interopRequireDefault(require("./Navbar"));
var _material = require("@mui/material");
var _xDataGrid = require("@mui/x-data-grid");
var _Background = _interopRequireDefault(require("../components/Background"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Schedule = () => {
  const [models, setModels] = (0, _react.useState)([]);
  (0, _react.useEffect)(() => {
    const fetchAllModels = async () => {
      try {
        await _axios.default.post("http://localhost:8000/boarding");
        await _axios.default.post("http://localhost:8000/in_air");
        await _axios.default.put("http://localhost:8000/in_air");
        const res = await _axios.default.get("http://localhost:8000/shedule");
        setModels(res.data);
        console.log("Fetched schedules:", res.data);
      } catch (err) {
        console.error("Error fetching schedules:", err);
      }
    };
    fetchAllModels();
  }, []);
  const formatDateTime = dateString => {
    if (!dateString) return "N/A";
    const [date, time] = dateString.split(/T|Z/);
    const [hour, minute] = time.split(":");
    return `${date} | ${hour}:${minute}`;
  };
  const rows = models.map(model => ({
    id: model.call_sign,
    origin: model.origin,
    destination: model.destination,
    departure: formatDateTime(model.departure_time),
    arrival: formatDateTime(model.arrival_time),
    status: model.status,
    delay: model.delay?.data ? "DELAYED" : "NOT DELAYED"
  }));
  const columns = [{
    field: "id",
    headerName: "Aircraft",
    flex: 0.75
  }, {
    field: "origin",
    headerName: "Origin",
    flex: 0.75
  }, {
    field: "destination",
    headerName: "Destination",
    flex: 0.75
  }, {
    field: "departure",
    headerName: "Departure Time",
    flex: 1.5
  }, {
    field: "arrival",
    headerName: "Arrival Time",
    flex: 1.5
  }, {
    field: "status",
    headerName: "Status",
    flex: 1
  }, {
    field: "delay",
    headerName: "Delay",
    flex: 1
  }];
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Navbar.default, null), /*#__PURE__*/_react.default.createElement(_Background.default, null), /*#__PURE__*/_react.default.createElement(_material.Container, {
    className: "ContainerSchedule"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "glassBox"
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Flight Schedule"), /*#__PURE__*/_react.default.createElement("div", {
    className: "models"
  }, /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: {
      width: "100%"
    }
  }, /*#__PURE__*/_react.default.createElement(_xDataGrid.DataGrid, {
    className: "table",
    rows: rows,
    columns: columns,
    initialState: {
      pagination: {
        paginationModel: {
          pageSize: 6
        }
      }
    },
    pageSizeOptions: [5],
    disableRowSelectionOnClick: true
  }))))));
};
var _default = exports.default = Schedule;