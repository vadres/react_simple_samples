var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var Pomodoro = function (_React$Component) {_inherits(Pomodoro, _React$Component);
  function Pomodoro(props) {_classCallCheck(this, Pomodoro);var _this = _possibleConstructorReturn(this, (Pomodoro.__proto__ || Object.getPrototypeOf(Pomodoro)).call(this,
    props));

    _this.state = {
      titlePomodoro: "Session",
      time: 1,
      session: 25,
      break: 5 / 50,
      pause: true };


    _this.mountTimer = _this.mountTimer.bind(_this);
    _this.decrementTime = _this.decrementTime.bind(_this);
    _this.reload = _this.reload.bind(_this);
    _this.controlSession = _this.controlSession.bind(_this);
    _this.playPause = _this.playPause.bind(_this);return _this;
  }_createClass(Pomodoro, [{ key: "componentDidMount", value: function componentDidMount()

    {
      this.decrementTime();
    } }, { key: "mountTimer", value: function mountTimer()

    {
      var sec = this.state.time % 60;
      var min = (this.state.time - sec) / 60;

      sec = sec < 10 ? "0" + sec : sec;
      min = min < 10 ? "0" + min : min;

      return min + ":" + sec;
    } }, { key: "controlSession", value: function controlSession()

    {var isSession = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;var inc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (this.state.pause) {
        var s = isSession ? inc ? this.state.session + 1 : this.state.session - 1 : this.state.session;
        var b = !isSession ? inc ? this.state.break + 1 : this.state.break - 1 : this.state.break;

        s = s < 1 ? 1 : s > 60 ? 60 : s;
        b = b < 1 ? 1 : b > 60 ? 60 : b;

        this.setState(_extends({},
        this.state, {
          session: s,
          break: b,
          time: s * 60 }));

      }

    } }, { key: "playPause", value: function playPause()

    {
      this.setState(_extends({},
      this.state, {
        pause: !this.state.pause }));


    } }, { key: "decrementTime", value: function decrementTime()

    {var _this2 = this;
      if (!this.state.pause) {
        this.setState(_extends({},
        this.state, {
          time: this.state.time - 1 }));

        if (this.state.time == -1) {
          var time = this.state.titlePomodoro == "Session" ? this.state.break * 60 : this.state.session * 60;
          var title = this.state.titlePomodoro == "Session" ? "Break" : "Session";
          this.setState(_extends({},
          this.state, {
            time: time,
            titlePomodoro: title }));

          this.audioBeep.play();
        }
      }
      setTimeout(function () {_this2.decrementTime();}, 1000);
    } }, { key: "reload", value: function reload()

    {
      this.setState(_extends({},
      this.state, {
        titlePomodoro: "Session",
        pause: true,
        break: 5,
        session: 25,
        time: 1500 }));

      this.audioBeep.pause();
      this.audioBeep.currentTime = 0;
    } }, { key: "render", value: function render()

    {var _this3 = this;
      var color = this.state.time <= 60 ? { color: "#883333" } : { color: "#eee" };

      return (
        React.createElement("div", { className: "pomodoro-wrapper" },
          React.createElement("h1", null, "Pomodoro Clock"),
          React.createElement(ControlSession, {
            incSession: function incSession() {_this3.controlSession(true, true);},
            decSession: function decSession() {_this3.controlSession(true, false);},
            incBreak: function incBreak() {_this3.controlSession(false, true);},
            decBreak: function decBreak() {_this3.controlSession(false, false);},
            "break": this.state.break,
            session: this.state.session }),

          React.createElement("div", { className: "pomodoro", style: color },
            React.createElement("h2", { id: "timer-label" }, this.state.titlePomodoro),
            React.createElement(Timer, { time: this.mountTimer() })),


          React.createElement(ControlTimer, {
            reload: this.reload,
            playPause: this.playPause }),

          React.createElement("audio", { id: "beep", preload: "auto",
            src: "https://goo.gl/65cBl1",
            ref: function ref(audio) {_this3.audioBeep = audio;} })));


    } }]);return Pomodoro;}(React.Component);


var ControlSession = function ControlSession(props) {
  return (
    React.createElement("div", { className: "control-session" },
      React.createElement("div", { className: "break" },
        React.createElement("h4", { id: "break-label" }, "Break control"),
        React.createElement("button", { id: "break-increment", onClick: props.incBreak },
          React.createElement("i", { className: "fas fa-arrow-alt-circle-up" })),

        React.createElement("span", { id: "break-length", style: { margin: "0px 5px" } }, props.break),
        React.createElement("button", { id: "break-decrement", onClick: props.decBreak },
          React.createElement("i", { className: "fas fa-arrow-alt-circle-down" }))),


      React.createElement("div", { className: "session" },
        React.createElement("h4", { id: "session-label" }, "Session control"),
        React.createElement("button", { id: "session-increment", onClick: props.incSession },
          React.createElement("i", { className: "fas fa-arrow-alt-circle-up" })),

        React.createElement("span", { id: "session-length", style: { margin: "0px 5px" } }, props.session),
        React.createElement("button", { id: "session-decrement", onClick: props.decSession },
          React.createElement("i", { className: "fas fa-arrow-alt-circle-down" })))));





};

var ControlTimer = function ControlTimer(props) {
  return (
    React.createElement("div", { className: "control-timer" },
      React.createElement(Button, { handleClick: props.playPause, id: "start_stop", dual: true }),
      React.createElement(Button, { handleClick: props.reload, id: "reset", icon: "redo-alt" })));


};

var Timer = function Timer(props) {
  return (
    React.createElement("div", { className: "time-wrapper" },
      React.createElement("span", { id: "time-left" }, props.time)));


};

var Button = function Button(props) {
  if (props.dual) {
    return (
      React.createElement("button", { id: props.id, onClick: props.handleClick },
        React.createElement("i", { className: "fas fa-play" }),
        React.createElement("i", { className: "fas fa-pause" })));


  } else {
    return (
      React.createElement("button", { id: props.id, onClick: props.handleClick },
        React.createElement("i", { className: "fas fa-" + props.icon })));


  }
};


ReactDOM.render(React.createElement(Pomodoro, null), document.getElementById('app'));