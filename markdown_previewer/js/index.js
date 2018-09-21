var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var INITIAL_EDITOR = "# Marked in the browser.\n## Clean and Higienic\n### Links       \nCheck [GitHub flavored markdown](https://github.github.com/gfm/#link-reference-definitions 'Reference markup')\n### Codes \n ` let [ destructuring, let, const ] = [ 'destructuring', 'let', 'const' ] ` \n ` const view = [...array, changed ]`  \n ```  \n   let man = new Human('male') // let porquee vareia ;)  \n   const woman = new Human('female') // const porquee n\xE3o vareeia :O ``` \n### Images \n![image](https://media.istockphoto.com/photos/plant-growing-picture-id510222832?k=6&m=510222832&s=612x612&w=0&h=Pzjkj2hf9IZiLAiXcgVE1FbCNFVmKzhdcT98dcHSdSk= 'image beaulty')  ![image](https://i.pinimg.com/originals/94/dd/57/94dd573e4b4de604ea7f33548da99fd6.jpg 'image beaulty 2') ![image](https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350 'image beaulty 3')   \n### Block quotes \n># Foo  \n> bar  \n> baz \n### Lists \n - item #1  \n - item #2 \n\nRendered by **marked**";





















marked.setOptions({
  breaks: true });

// App passa todos os estados pros seus filhos
// via props, filhos mostram na tela  
var App = function (_React$Component) {_inherits(App, _React$Component);
  function App(props) {_classCallCheck(this, App);var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this,
    props));
    _this.state = {
      editor: INITIAL_EDITOR,
      preview: marked(INITIAL_EDITOR) };

    _this.handleTextareaKeyUp = _this.handleTextareaKeyUp.bind(_this);return _this;
  }_createClass(App, [{ key: "componentDidMount", value: function componentDidMount()

    {
      this.setPreview();
    } }, { key: "handleTextareaKeyUp", value: function handleTextareaKeyUp(

    event) {
      var editorContent = event.target.value;
      this.setState(_extends({},
      this.state, {
        preview: marked(editorContent) }));

    } }, { key: "render", value: function render()

    {
      return (
        React.createElement("div", null,
          React.createElement(Editor, { handleKeyUp: this.handleTextareaKeyUp, editor: this.state.editor }),
          React.createElement(Preview, { preview: this.state.preview })));


    } }]);return App;}(React.Component);var


Editor = function (_React$Component2) {_inherits(Editor, _React$Component2);
  function Editor(props) {_classCallCheck(this, Editor);return _possibleConstructorReturn(this, (Editor.__proto__ || Object.getPrototypeOf(Editor)).call(this,
    props));
  }_createClass(Editor, [{ key: "render", value: function render()

    {
      return (
        React.createElement("section", { className: "block", id: "editor-wrapper" },
          React.createElement("h3", null, "Editor GitHub flavored markdown"),
          React.createElement("div", { className: "content" },
            React.createElement("textarea", { onKeyUp: this.props.handleKeyUp, id: "editor" }, this.props.editor))));



    } }]);return Editor;}(React.Component);var


Preview = function (_React$Component3) {_inherits(Preview, _React$Component3);
  function Preview(props) {_classCallCheck(this, Preview);return _possibleConstructorReturn(this, (Preview.__proto__ || Object.getPrototypeOf(Preview)).call(this,
    props));
  }_createClass(Preview, [{ key: "render", value: function render()

    {
      return (
        React.createElement("section", { className: "block", id: "preview-wrapper" },
          React.createElement("h3", null, "Preview"),
          React.createElement("div", { id: "preview", dangerouslySetInnerHTML: { __html: this.props.preview } })));


    } }]);return Preview;}(React.Component);


ReactDOM.render(React.createElement(App, null), document.getElementById('app'));