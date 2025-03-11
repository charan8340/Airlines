"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _ExpandMore = _interopRequireDefault(require("@mui/icons-material/ExpandMore"));
var _Navbar = _interopRequireDefault(require("./Navbar"));
var _Background = _interopRequireDefault(require("../components/Background"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function FAQ() {
  const [faqs, setFAQs] = (0, _react.useState)([{
    question: "How can I book a flight?",
    answer: "To book a flight, simply visit our homepage and navigate to the 'Book a Flight' section. Use our intuitive search feature to find available flights that match your travel preferences. After selecting your ideal flight, provide passenger details to complete the booking. You have the option to book as a guest or registered user for added convenience."
  }, {
    question: "How can I make my payments?",
    answer: "First you need to book a flight and get online tickets.Then before boarding in the airport cashier section , validate your onlie ticket and make the payment."
  }, {
    question: "What are the benefits I can get by sign up for this airline system?",
    answer: "You can enjoy discounts based on you membership status. We have frequent and gold memberships.Based on your ooking count from your register account we will upgrade your membership.Frequent membership and gold membership offer 5% and 9% discounts respectively. "
  }, {
    question: "Can I change my flight booking?",
    answer: "Yes, but you can't do that online.You have to meet the authorities at airport to make the change based on the availability of the seats in your desired flight."
  }, {
    question: "What is the baggage allowance of your airline?",
    answer: "As a general guide, carry-on baggage should have maximum length of 22 in (56 cm), width of 18 in (45 cm) and depth of 10 in (25 cm). These dimensions include wheels, handles, side pockets, etc. Some airlines also enforce weight limitations, typically starting at 5kg/11lbs."
  }, {
    question: "Can I do payment via creditcard?",
    answer: "For the time being we don't allow users to pay via credit card at the time of booking ticket.But at the airport while making payment  you can use it."
  }]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Navbar.default, null), /*#__PURE__*/_react.default.createElement(_Background.default, null), /*#__PURE__*/_react.default.createElement("div", {
    className: "ContainerBooking"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "glassBox"
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Frequently Asked Questions"), /*#__PURE__*/_react.default.createElement("div", {
    className: "allfaqs"
  }, faqs.map((faq, index) => /*#__PURE__*/_react.default.createElement(_material.Accordion, {
    key: index,
    className: "faqs"
  }, /*#__PURE__*/_react.default.createElement(_material.AccordionSummary, {
    expandIcon: /*#__PURE__*/_react.default.createElement(_ExpandMore.default, null),
    "aria-controls": `panel${index}-content`,
    id: `panel${index}-header`
  }, /*#__PURE__*/_react.default.createElement("h4", null, faq.question)), /*#__PURE__*/_react.default.createElement(_material.AccordionDetails, null, /*#__PURE__*/_react.default.createElement("h6", null, faq.answer))))))));
}
var _default = exports.default = FAQ;