var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var URL = 'https://gist.githubusercontent.com/camperbot' +
'/5a022b72e96c4c9585c32bf6a75f62d9/raw' +
'/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

var URL_TWEET = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=';

var colors = [
'#333355',
'#553333',
'#335533',
'#227755',
'#661144',
'#666612',
'#033925',
'#50363f',
'#bb11bb',
"#dddd33",
"#22aaaa"];var


App = function (_React$Component) {_inherits(App, _React$Component);
  function App(props) {_classCallCheck(this, App);var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this,
    props));

    _this.state = {
      quotes: [],
      active: 'Default' };


    fetch(URL).
    then(function (response) {return response.json();}).
    then(function (json) {
      var index = Math.floor(Math.random() * json.quotes.length);
      console.log(json.quotes.length);
      _this.setState(_extends({},
      _this.state, {
        active: json.quotes[index],
        quotes: json.quotes }));

    });

    _this.handleNewQuote = _this.handleNewQuote.bind(_this);return _this;
  }_createClass(App, [{ key: 'handleNewQuote', value: function handleNewQuote(

    event) {
      var index = Math.floor(Math.random() * this.state.quotes.length);
      document.body.style.backgroundColor = colors[index % 11];
      this.setState(_extends({},
      this.state, {
        active: this.state.quotes[index] }));

    } }, { key: 'render', value: function render()

    {
      function mapLi(quote, key) {
        return React.createElement('li', { key: key }, quote.author);
      }
      var text = this.state.active.quote;
      var author = this.state.active.author;
      var str = '"' + text + '" ' + author + '"';
      var href = URL_TWEET + encodeURIComponent(str);

      return (

        React.createElement('div', { id: 'quote-box' },
          React.createElement('span', { id: 'text' },
            React.createElement('i', { className: 'fa fa-quote-left' }),
            this.state.active.quote),

          React.createElement('span', { id: 'author' }, '- ',
            this.state.active.author),

          React.createElement('div', { className: 'col-md-5 offset-md-7 btns' },
            React.createElement('a', { href: href, id: 'tweet-quote', className: 'btn btn-secondary', role: 'button', target: '_blank' }, React.createElement('i', { className: 'fab fa-twitter' })),
            React.createElement('button', { onClick: this.handleNewQuote, id: 'new-quote', className: 'btn btn-secondary' }, 'New quote'))));





    } }]);return App;}(React.Component);


ReactDOM.render(React.createElement(App, null), document.getElementById('app'));