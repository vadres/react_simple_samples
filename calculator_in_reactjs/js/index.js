var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var ops = ["+", "-", "*", "/"];
var calculate = function calculate(viewer) {
  if ([].concat(ops, ["."]).indexOf(viewer.slice(-1)) != -1)
  viewer = viewer.slice(0, viewer.length - 1);

  var result = viewer.split("+").map(function (mult) {
    return mult.split("-").map(function (div) {
      return div.split("/").map(function (sub) {
        return sub.split("*").reduce(function (acc, el) {return Number(acc) * Number(el);});
      }).reduce(function (acc, el) {return Number(acc) / Number(el);});
    }).reduce(function (acc, el) {return Number(acc) - Number(el);});
  }).reduce(function (acc, el) {return Number(acc) + Number(el);});

  return result + "";
};
var operation = function operation(op, viewer) {
  if (viewer.slice(-1) == ".")
  return viewer;
  if (ops.indexOf(viewer.slice(-1)) != -1)
  return viewer.slice(0, viewer.length - 1) + op;
  return viewer + op;
};
var number = function number(n, viewer) {
  if (viewer == "0")
  return n;
  var arr = viewer.split(/[+]|[-]|[*]|[\/]/).filter(function (el) {return el != "";});
  return viewer + n;
};
var pointer = function pointer(p, viewer) {
  var arr = viewer.split(/[+]|[-]|[*]|[\/]/).filter(function (el) {return el != "";});
  return !isNaN(arr[arr.length - 1]) &&
  !arr[arr.length - 1].includes(".") ? viewer + '.' : viewer;
};

var Row = function Row(props) {
  return (
    React.createElement("div", { className: "row " + props.grid }, props.children));

};var

Calculator = function (_React$Component) {_inherits(Calculator, _React$Component);
  function Calculator(props) {_classCallCheck(this, Calculator);var _this = _possibleConstructorReturn(this, (Calculator.__proto__ || Object.getPrototypeOf(Calculator)).call(this,
    props));

    _this.state = {
      viewer: "0",
      released: false };


    _this.sendToViewer = _this.sendToViewer.bind(_this);return _this;
  }_createClass(Calculator, [{ key: "sendToViewer", value: function sendToViewer(

    event) {
      var viewer = "0";
      var viewerState = this.state.viewer;
      var released = false;
      var value = event.target.innerHTML;

      if (this.state.released) {
        this.setState({
          viewer: "0",
          released: released });

        viewerState = "0";
      }

      // CALCULATE ---
      if (value == "=") {
        viewer = calculate(viewerState);
        if (isNaN(viewer) || viewer == Infinity)
        released = true;
      }
      // OPERATION --- 
      else if (ops.indexOf(value) != -1) {
          viewer = operation(value, viewerState);
        }
        // NUMBER ---
        else if (!isNaN(value)) {
            viewer = number(value, viewerState);
          }
          // AC ---
          else if (value == "AC") {
              viewer = "0";
            }
            // Pointer ---
            else {
                viewer = pointer(value, viewerState);
              }

      this.setState({
        viewer: viewer,
        released: released });

    } }, { key: "render", value: function render()

    {

      return (
        React.createElement("div", { id: "calculator" },
          React.createElement("span", { className: "title" }, "Calculadora ReactJS"),
          React.createElement("div", { className: "container" },
            React.createElement(Row, null,
              React.createElement(Viewer, { value: this.state.viewer })),


            React.createElement(Row, null,
              React.createElement(Button, { handleclick: this.sendToViewer, color: "bg-red", grid: "col-6", value: "AC", id: "clear" }),
              React.createElement(Button, { handleclick: this.sendToViewer, color: "bg-dk-light", grid: "col", value: "/", id: "divide" }),
              React.createElement(Button, { handleclick: this.sendToViewer, color: "bg-dk-light", grid: "col", value: "*", id: "multiply" })),


            React.createElement(Row, null,
              React.createElement(Button, { handleclick: this.sendToViewer, color: "bg-dk", grid: "col", value: "7", id: "seven" }),
              React.createElement(Button, { handleclick: this.sendToViewer, color: "bg-dk", grid: "col", value: "8", id: "eight" }),
              React.createElement(Button, { handleclick: this.sendToViewer, color: "bg-dk", grid: "col", value: "9", id: "nine" }),
              React.createElement(Button, { handleclick: this.sendToViewer, color: "bg-dk-light", grid: "col", value: "-", id: "subtract" })),


            React.createElement(Row, null,
              React.createElement(Button, { handleclick: this.sendToViewer, color: "bg-dk", grid: "col", value: "4", id: "four" }),
              React.createElement(Button, { handleclick: this.sendToViewer, color: "bg-dk", grid: "col", value: "5", id: "five" }),
              React.createElement(Button, { handleclick: this.sendToViewer, color: "bg-dk", grid: "col", value: "6", id: "six" }),
              React.createElement(Button, { handleclick: this.sendToViewer, color: "bg-dk-light", grid: "col", value: "+", id: "add" })),


            React.createElement(Row, null,
              React.createElement("div", { className: "col-9" },
                React.createElement(Row, null,
                  React.createElement(Button, { handleclick: this.sendToViewer, color: "bg-dk", grid: "col", value: "1", id: "one" }),
                  React.createElement(Button, { handleclick: this.sendToViewer, color: "bg-dk", grid: "col", value: "2", id: "two" }),
                  React.createElement(Button, { handleclick: this.sendToViewer, color: "bg-dk", grid: "col", value: "3", id: "three" })),

                React.createElement(Row, null,
                  React.createElement(Button, { handleclick: this.sendToViewer, color: "bg-dk", grid: "col", value: "0", id: "zero" }),
                  React.createElement(Button, { handleclick: this.sendToViewer, color: "bg-dk", grid: "col", value: ".", id: "decimal" }))),


              React.createElement("div", { className: "col" },
                React.createElement(Button, { handleclick: this.sendToViewer, value: "=", color: "bg-dk-light", id: "equals", style: { paddingTop: '45', paddingBottom: '46' } }))))));





    } }]);return Calculator;}(React.Component);var


Viewer = function (_React$Component2) {_inherits(Viewer, _React$Component2);
  function Viewer(props) {_classCallCheck(this, Viewer);return _possibleConstructorReturn(this, (Viewer.__proto__ || Object.getPrototypeOf(Viewer)).call(this,
    props));
  }_createClass(Viewer, [{ key: "render", value: function render()

    {
      return (
        React.createElement("div", { id: "viewer-wrapper" },
          React.createElement("span", { id: "display" }, this.props.value)));


    } }]);return Viewer;}(React.Component);var


Button = function (_React$Component3) {_inherits(Button, _React$Component3);
  function Button(props) {_classCallCheck(this, Button);return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this,
    props));
  }_createClass(Button, [{ key: "render", value: function render()

    {

      return (
        React.createElement("div", { className: this.props.grid },
          React.createElement("a", { id: this.props.id, style: this.props.style, className: "button " + this.props.color, onClick: this.props.handleclick, href: "javascript:void(0)" }, this.props.value)));


    } }]);return Button;}(React.Component);


ReactDOM.render(React.createElement(Calculator, null), document.getElementById('app'));