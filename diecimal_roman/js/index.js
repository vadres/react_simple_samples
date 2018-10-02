var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var map = {
  1: ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
  2: ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
  3: ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
  4: ['', 'M', 'MM', 'MMM', 'MV', 'V', 'VM', 'VMM', 'VMMM', 'IX'] };var


RomanJS = function (_React$Component) {_inherits(RomanJS, _React$Component);
  function RomanJS(props) {_classCallCheck(this, RomanJS);var _this = _possibleConstructorReturn(this, (RomanJS.__proto__ || Object.getPrototypeOf(RomanJS)).call(this,
    props));

    _this.state = {
      value: 3456,
      roman: 'MMMCDLVI' };


    _this.handleChange = _this.handleChange.bind(_this);
    _this.convert = _this.convert.bind(_this);return _this;
  }_createClass(RomanJS, [{ key: 'convert', value: function convert(

    num) {
      var roman = "";
      for (var i = 0; i < num.length; i++) {
        roman += map[num.length - i][num.charAt(i)];
      }
      return roman;
    } }, { key: 'handleChange', value: function handleChange(

    event) {
      var str = event.target.value.split(/[^0-9]/).join("");
      var value = 0;
      if (event.target.value != "") {
        value = !isNaN(str) ?
        parseInt(str) + "" :
        0;
        value = value.length > 4 ?
        value.slice(0, 4) :
        value;
      }

      this.setState({
        roman: this.convert(value),
        value: value });

    } }, { key: 'render', value: function render()

    {
      return (
        React.createElement('div', { className: 'roman-js' },
          React.createElement('h1', null, 'DECIMAL TO ROMAN'),
          React.createElement('input', { onChange: this.handleChange, type: 'text', value: this.state.value }),
          React.createElement('span', { id: 'roman-number' }, this.state.roman)));


    } }]);return RomanJS;}(React.Component);


ReactDOM.render(React.createElement(RomanJS, null), document.getElementById('app'));