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
const Report_1_Results = () => {
  const [cus, setCus] = (0, _react.useState)([]);
  const [isButtonHidden, setIsButtonHidden] = (0, _react.useState)(false);
  const location = (0, _reactRouterDom.useLocation)();
  const flight_id = location.pathname.split("/")[2];
  (0, _react.useEffect)(() => {
    const fetchAllPassengers = async () => {
      try {
        const res = await _axios.default.get(`http://localhost:8000/report_1/${flight_id}`);
        setCus(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchAllPassengers();
  }, [flight_id]); // Added dependency array for safety

  const rows = cus.map(c => ({
    id: c.customer_id,
    name: c.name,
    address: c.address,
    nic: c.nic,
    p_id: c.passport_id,
    type: c.user_type,
    a_c: c.age_category
  }));
  const columns = [{
    field: 'id',
    headerName: 'ID',
    flex: 0.5
  }, {
    field: 'name',
    headerName: 'Name',
    flex: 1
  }, {
    field: 'address',
    headerName: 'Address',
    width: 250
  }, {
    field: 'nic',
    headerName: 'NIC',
    flex: 1
  }, {
    field: 'p_id',
    headerName: 'Passport ID',
    flex: 1
  }, {
    field: 'type',
    headerName: 'User Type',
    flex: 1
  }, {
    field: 'a_c',
    headerName: 'Age Category',
    flex: 1
  }];
  const printPage = () => {
    window.print();
  };
  const handlePrint = () => {
    setIsButtonHidden(true);
    setTimeout(printPage, 50); // Wait 50ms to remove button before printing
    setTimeout(() => setIsButtonHidden(false), 300); // Restore after printing
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
  }, /*#__PURE__*/_react.default.createElement(_material.Grid, null, /*#__PURE__*/_react.default.createElement("h1", null, "Passengers in Flight ", flight_id, !isButtonHidden && /*#__PURE__*/_react.default.createElement(_material.Button, {
    variant: "contained",
    onClick: handlePrint,
    sx: {
      float: 'right',
      backgroundColor: '#000000'
    }
  }, "Print Report")))), /*#__PURE__*/_react.default.createElement(_material.Box, {
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
    pageSizeOptions: [5],
    checkboxSelection: true,
    disableRowSelectionOnClick: true
  }))));
};
var _default = exports.default = Report_1_Results;