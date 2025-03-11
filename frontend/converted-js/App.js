"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./App.css");
var _reactRouterDom = require("react-router-dom");
var _Home = _interopRequireDefault(require("./pages/Home"));
var _SearchBox = _interopRequireDefault(require("./pages/SearchBox"));
var _SignIn = _interopRequireDefault(require("./pages/SignIn"));
var _SignUp = _interopRequireDefault(require("./pages/SignUp"));
var _AdminPanel = _interopRequireDefault(require("./pages/Admin/AdminPanel"));
var _Aircraft = _interopRequireDefault(require("./pages/Admin/Aircraft/Aircraft"));
var _AircraftAdd = _interopRequireDefault(require("./pages/Admin/Aircraft/AircraftAdd"));
var _AircraftUpdate = _interopRequireDefault(require("./pages/Admin/Aircraft/AircraftUpdate"));
var _AircraftModel = _interopRequireDefault(require("./pages/Admin/AircraftModel/AircraftModel"));
var _AircraftModelAdd = _interopRequireDefault(require("./pages/Admin/AircraftModel/AircraftModelAdd"));
var _AircraftModelUpdate = _interopRequireDefault(require("./pages/Admin/AircraftModel/AircraftModelUpdate"));
var _Airport = _interopRequireDefault(require("./pages/Admin/Airport/Airport"));
var _AirportAdd = _interopRequireDefault(require("./pages/Admin/Airport/AirportAdd"));
var _AirportUpdate = _interopRequireDefault(require("./pages/Admin/Airport/AirportUpdate"));
var _Route = _interopRequireDefault(require("./pages/Admin/Route/Route"));
var _RouteAdd = _interopRequireDefault(require("./pages/Admin/Route/RouteAdd"));
var _RouteUpdate = _interopRequireDefault(require("./pages/Admin/Route/RouteUpdate"));
var _Location = _interopRequireDefault(require("./pages/Admin/Location/Location"));
var _LocationAdd = _interopRequireDefault(require("./pages/Admin/Location/LocationAdd"));
var _LocationUpdate = _interopRequireDefault(require("./pages/Admin/Location/LocationUpdate"));
var _Flight = _interopRequireDefault(require("./pages/Admin/Flight/Flight"));
var _FlightAdd = _interopRequireDefault(require("./pages/Admin/Flight/FlightAdd"));
var _FlightUpdate = _interopRequireDefault(require("./pages/Admin/Flight/FlightUpdate"));
var _Delay = _interopRequireDefault(require("./pages/Admin/Delay/Delay"));
var _DelayArrival = _interopRequireDefault(require("./pages/Admin/Delay/DelayArrival"));
var _DelayDepature = _interopRequireDefault(require("./pages/Admin/Delay/DelayDepature"));
var _BookingList = _interopRequireDefault(require("./pages/Admin/BookingList/BookingList"));
var _BookingListAdd = _interopRequireDefault(require("./pages/Admin/BookingList/BookingListAdd"));
var _BookingListUpdate = _interopRequireDefault(require("./pages/Admin/BookingList/BookingListUpdate"));
var _User = _interopRequireDefault(require("./pages/Admin/User/User"));
var _Report = _interopRequireDefault(require("./pages/Admin/Reports/Report"));
var _Report_ = _interopRequireDefault(require("./pages/Admin/Reports/Report_1"));
var _Report_1_Results = _interopRequireDefault(require("./pages/Admin/Reports/Report_1_Results"));
var _Report_2 = _interopRequireDefault(require("./pages/Admin/Reports/Report_2"));
var _Report_2_Results = _interopRequireDefault(require("./pages/Admin/Reports/Report_2_Results"));
var _Report_3 = _interopRequireDefault(require("./pages/Admin/Reports/Report_3"));
var _Report_3_Results = _interopRequireDefault(require("./pages/Admin/Reports/Report_3_Results"));
var _Report_4 = _interopRequireDefault(require("./pages/Admin/Reports/Report_4"));
var _Report_4_Results = _interopRequireDefault(require("./pages/Admin/Reports/Report_4_Results"));
var _Report_5_Results = _interopRequireDefault(require("./pages/Admin/Reports/Report_5_Results"));
var _SeatSelect = _interopRequireDefault(require("./pages/SeatSelect"));
var _Ticket = _interopRequireDefault(require("./pages/Ticket"));
var _Shedule = _interopRequireDefault(require("./pages/Shedule"));
require("./style.css");
var _Booking = _interopRequireDefault(require("./pages/Booking"));
var _FlightResults = _interopRequireDefault(require("./pages/FlightResults"));
var _Help = _interopRequireDefault(require("./pages/Help"));
var _NoAvailableFlights = _interopRequireDefault(require("./pages/NoAvailableFlights"));
var _LoginForBooking = _interopRequireDefault(require("./pages/LoginForBooking"));
var _CustomerFormGuest = _interopRequireDefault(require("./pages/CustomerFormGuest"));
var _UserBookingType = _interopRequireDefault(require("./pages/UserBookingType"));
var _CustomerFormUserPassenger = _interopRequireDefault(require("./pages/CustomerFormUserPassenger"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function App() {
  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/React.createElement(_reactRouterDom.Routes, null, /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/",
    element: /*#__PURE__*/React.createElement(_Home.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/booking",
    element: /*#__PURE__*/React.createElement(_Booking.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/sign-in",
    element: /*#__PURE__*/React.createElement(_SignIn.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/sign-up",
    element: /*#__PURE__*/React.createElement(_SignUp.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/shedule",
    element: /*#__PURE__*/React.createElement(_Shedule.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/seat_select/:flight_id/:customer_id",
    element: /*#__PURE__*/React.createElement(_SeatSelect.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/ticket/:booking_id",
    element: /*#__PURE__*/React.createElement(_Ticket.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/login_for_booking/:flight_id",
    element: /*#__PURE__*/React.createElement(_LoginForBooking.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/guest/:flight_id",
    element: /*#__PURE__*/React.createElement(_CustomerFormGuest.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/user_booking_type/:flight_id",
    element: /*#__PURE__*/React.createElement(_UserBookingType.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/user_passenger/:flight_id/:user_id",
    element: /*#__PURE__*/React.createElement(_CustomerFormUserPassenger.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/admin",
    element: /*#__PURE__*/React.createElement(_AdminPanel.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/aircraft",
    element: /*#__PURE__*/React.createElement(_Aircraft.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/aircraft_add",
    element: /*#__PURE__*/React.createElement(_AircraftAdd.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/aircraft_update/:id",
    element: /*#__PURE__*/React.createElement(_AircraftUpdate.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/aircraft_model",
    element: /*#__PURE__*/React.createElement(_AircraftModel.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/aircraft_model_add",
    element: /*#__PURE__*/React.createElement(_AircraftModelAdd.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/aircraft_model_update/:id",
    element: /*#__PURE__*/React.createElement(_AircraftModelUpdate.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/airport",
    element: /*#__PURE__*/React.createElement(_Airport.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/airport_add",
    element: /*#__PURE__*/React.createElement(_AirportAdd.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/airport_update/:id",
    element: /*#__PURE__*/React.createElement(_AirportUpdate.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/route",
    element: /*#__PURE__*/React.createElement(_Route.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/route_add",
    element: /*#__PURE__*/React.createElement(_RouteAdd.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/route_update/:id",
    element: /*#__PURE__*/React.createElement(_RouteUpdate.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/location",
    element: /*#__PURE__*/React.createElement(_Location.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/location_add",
    element: /*#__PURE__*/React.createElement(_LocationAdd.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/location_update/:id",
    element: /*#__PURE__*/React.createElement(_LocationUpdate.default, null)
  }), "  \\", /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/flight",
    element: /*#__PURE__*/React.createElement(_Flight.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/flight_add",
    element: /*#__PURE__*/React.createElement(_FlightAdd.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/flight_update/:id",
    element: /*#__PURE__*/React.createElement(_FlightUpdate.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/delay",
    element: /*#__PURE__*/React.createElement(_Delay.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/delay_departure/:id",
    element: /*#__PURE__*/React.createElement(_DelayDepature.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/delay_arrival/:id",
    element: /*#__PURE__*/React.createElement(_DelayArrival.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/booking_list",
    element: /*#__PURE__*/React.createElement(_BookingList.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/booking_list_add",
    element: /*#__PURE__*/React.createElement(_BookingListAdd.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/booking_list_update/:id",
    element: /*#__PURE__*/React.createElement(_BookingListUpdate.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/route/available_flights/:originAirport/:targetAirport/:depature_time/:arrival_time",
    element: /*#__PURE__*/React.createElement(_FlightResults.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/route/noflightsavailablepage",
    element: /*#__PURE__*/React.createElement(_NoAvailableFlights.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/dashboard",
    element: /*#__PURE__*/React.createElement(_AdminPanel.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/reports",
    element: /*#__PURE__*/React.createElement(_Report.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/report_1/",
    element: /*#__PURE__*/React.createElement(_Report_.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/reports_1_results/:id",
    element: /*#__PURE__*/React.createElement(_Report_1_Results.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/report_2/",
    element: /*#__PURE__*/React.createElement(_Report_2.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/reports_2_results/:id/:id/:id",
    element: /*#__PURE__*/React.createElement(_Report_2_Results.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/report_3/",
    element: /*#__PURE__*/React.createElement(_Report_3.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/reports_3_results/:id/:id",
    element: /*#__PURE__*/React.createElement(_Report_3_Results.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/report_4/",
    element: /*#__PURE__*/React.createElement(_Report_4.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/reports_4_results/:id/:id",
    element: /*#__PURE__*/React.createElement(_Report_4_Results.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/report_5",
    element: /*#__PURE__*/React.createElement(_Report_5_Results.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/user_list",
    element: /*#__PURE__*/React.createElement(_User.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/flight-results",
    element: /*#__PURE__*/React.createElement(_FlightResults.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/help",
    element: /*#__PURE__*/React.createElement(_Help.default, null)
  }))));
}
var _default = exports.default = App;