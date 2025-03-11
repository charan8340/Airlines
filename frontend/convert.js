const fs = require("fs");
const React = require("react");
const ReactDOMServer = require("react-dom/server");

const Component = require("./converted-js/YourComponent").default; // Adjust path as needed

const html = ReactDOMServer.renderToString(React.createElement(Component));

fs.writeFileSync("output.html", html);
console.log("HTML file generated: output.html");
