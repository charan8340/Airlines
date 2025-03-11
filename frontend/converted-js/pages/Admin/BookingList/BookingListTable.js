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
const BookingListTable = () => {
  const [bookings, setBookings] = (0, _react.useState)([]);
  (0, _react.useEffect)(() => {
    const fetchBookings = async () => {
      try {
        const res = await _axios.default.get('http://localhost:8000/booking_list');
        setBookings(res.data);
      } catch (err) {
        console.error('Error fetching bookings:', err);
      }
    };
    fetchBookings();
  }, []);
  const handleInvalidate = async id => {
    try {
      await _axios.default.delete(`http://localhost:8000/booking_list/${id}`);
      setBookings(bookings.filter(booking => booking.booking_id !== id)); // Remove the deleted booking from state
    } catch (err) {
      console.error('Error invalidating booking:', err);
    }
  };
  const handleValidate = async id => {
    try {
      await _axios.default.put(`http://localhost:8000/booking_list/${id}`);
      setBookings(prevBookings => prevBookings.map(booking => booking.booking_id === id ? {
        ...booking,
        payment_status: {
          data: true
        }
      } : booking));
    } catch (err) {
      console.error('Error validating booking:', err);
    }
  };
  const rows = bookings.map(booking => ({
    id: booking.booking_id,
    customer_id: booking.customer_id,
    flight_id: booking.flight_id,
    seat_id: booking.seat_id,
    status: booking.payment_status?.data ?? false,
    // Ensures no crashes
    price: booking.total_cost,
    payment_proceed: booking.payment_status?.data ?? false
  }));
  const columns = [{
    field: 'id',
    headerName: 'Booking ID',
    width: 100
  }, {
    field: 'customer_id',
    headerName: 'Customer ID',
    width: 100
  }, {
    field: 'flight_id',
    headerName: 'Flight ID',
    width: 100
  }, {
    field: 'status',
    headerName: 'Payment Status',
    width: 200,
    valueFormatter: params => params.value ? 'VALIDATED' : 'PROCEEDING'
  }, {
    field: 'seat_id',
    headerName: 'Seat ID',
    width: 200
  }, {
    field: 'price',
    headerName: 'Price',
    width: 200
  }, {
    field: 'payment_proceed',
    headerName: '',
    width: 120,
    sortable: false,
    renderCell: params => /*#__PURE__*/_react.default.createElement(_material.Button, {
      color: params.value ? 'error' : 'success',
      size: "small",
      onClick: () => params.value ? handleInvalidate(params.row.id) : handleValidate(params.row.id)
    }, params.value ? 'Invalidate' : 'Validate')
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
  }, /*#__PURE__*/_react.default.createElement(_material.Grid, null, /*#__PURE__*/_react.default.createElement("h1", null, "Bookings"))), /*#__PURE__*/_react.default.createElement("div", {
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
var _default = exports.default = BookingListTable;