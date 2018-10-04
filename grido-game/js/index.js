var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _toConsumableArray(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;} else {return Array.from(arr);}}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var AREA_WIDTH = 70;
var AREA_HEIGHT = 70;
var AREA_LINE = 4;
var PERSON_RADIUS = 20;
var GRID_SIZE = 4;
var KEYS = {
  37: 'left', 65: 'left',
  38: 'up', 87: 'up',
  39: 'right', 68: 'right',
  40: 'down', 83: 'down' };

var POS = [
[[37, 37], [114, 37], [193, 37], [271, 37], [349, 37]],
[[37, 114], [114, 114], [193, 114], [271, 114], [349, 114]],
[[37, 193], [114, 193], [193, 193], [271, 193], [349, 193]],
[[37, 271], [114, 271], [193, 271], [271, 271], [349, 271]],
[[37, 349], [114, 349], [193, 349], [271, 349], [349, 349]]];


var generateGrid = function generateGrid() {
  var grid = [];
  for (var i = 0; i < GRID_SIZE; i++) {
    grid[i] = [];
    for (var u = 0; u < GRID_SIZE; u++) {
      grid[i][u] = 0;
    }
  }
  grid[0][0] = 1;
  return grid;
};

var circle = function circle(props) {var
  ctx = props.ctx,x = props.x,y = props.y,radius = props.radius;
  var img = document.getElementById("head");
  // ctx.beginPath();
  // ctx.arc(x, y, radius, 0, Math.PI * 2)
  // ctx.fillStyle = "rgba(120, 120, 140, 1)";
  // ctx.fill()
  ctx.drawImage(img, x - 25, y - 25, 50, 50);
};

var area = function area(props) {var
  ctx = props.ctx,x = props.x,y = props.y,width = props.width,height = props.height,lineWidth = props.lineWidth,visited = props.visited;
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = "rgba(245,162,25, 0.3)";

  if (visited == 1) {
    ctx.fillStyle = 'rgba(120,120,220,0.4)';
    ctx.fillRect(x, y, width, height);
  }

  ctx.strokeRect(x, y, width, height);
};

var roundArea = function roundArea(props) {var
  ctx = props.ctx,x = props.x,y = props.y,width = props.width,height = props.height,radius = props.radius,lineWidth = props.lineWidth,visited = props.visited;
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = "rgba(245,162,25, 0.3)";

  if (width < 2 * radius) radius = width / 2;
  if (height < 2 * radius) radius = height / 2;
  if (visited == 1) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.arcTo(x + width, y, x + width, y + height, radius);
    ctx.arcTo(x + width, y + height, x, y + height, radius);
    ctx.arcTo(x, y + height, x, y, radius);
    ctx.arcTo(x, y, x + width, y, radius);
    ctx.fillStyle = 'rgba(160,160,180,0.4)';
    ctx.fill();
  }
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + width, y, x + width, y + height, radius);
  ctx.arcTo(x + width, y + height, x, y + height, radius);
  ctx.arcTo(x, y + height, x, y, radius);
  ctx.arcTo(x, y, x + width, y, radius);
  ctx.stroke();
};

var line = function line(props) {
  var accumulate = AREA_WIDTH / 5;var
  ctx = props.ctx,x = props.x,y = props.y,lineWidth = props.lineWidth;
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = "rgba(0,0,0,0.2)";
  ctx.beginPath();
  ctx.moveTo(x - accumulate, y - accumulate);
  ctx.lineTo(x + accumulate, y + accumulate);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(x + accumulate, y - accumulate);
  ctx.lineTo(x - accumulate, y + accumulate);
  ctx.stroke();
};

var axis = function axis(props) {var
  ctx = props.ctx,x = props.x,y = props.y,radius = props.radius;
  var img = document.getElementById("axis");
  ctx.drawImage(img, x - 15, y - 15, 30, 30);
};var

Grido = function (_React$Component) {_inherits(Grido, _React$Component);
  function Grido(props) {_classCallCheck(this, Grido);var _this = _possibleConstructorReturn(this, (Grido.__proto__ || Object.getPrototypeOf(Grido)).call(this,
    props));

    _this.state = {
      win: false,
      title: 'Jogando',
      classTitle: 'title',
      points: 0,
      x: 0,
      y: 0,
      gameon: true,
      grid: generateGrid() };


    _this.listenerKeyUp = _this.listenerKeyUp.bind(_this);
    _this.mountBoard = _this.mountBoard.bind(_this);
    _this.verifyArea = _this.verifyArea.bind(_this);
    _this.verifyGameover = _this.verifyGameover.bind(_this);
    _this.reset = _this.reset.bind(_this);
    _this.calculatePoints = _this.calculatePoints.bind(_this);
    document.addEventListener('keyup', _this.listenerKeyUp);return _this;
  }_createClass(Grido, [{ key: 'componentDidMount', value: function componentDidMount()

    {var _this2 = this;
      setTimeout(function () {_this2.mountBoard();}, 200);
    } }, { key: 'mountBoard', value: function mountBoard()

    {
      var ctx = this.canvas.getContext("2d");
      ctx.clearRect(0, 0, 400, 400);

      for (var l = 0; l < GRID_SIZE; l++) {
        for (var c = 0; c < GRID_SIZE; c++) {
          roundArea({
            radius: 10,
            ctx: ctx,
            x: AREA_WIDTH * (c * 1.12) + 2,
            y: AREA_HEIGHT * (l * 1.12) + 2,
            lineWidth: AREA_LINE,
            width: AREA_WIDTH,
            height: AREA_HEIGHT,
            visited: this.state.grid[l][c] });

        }
      }

      axis({
        ctx: ctx,
        x: POS[GRID_SIZE - 1][GRID_SIZE - 1][0],
        y: POS[GRID_SIZE - 1][GRID_SIZE - 1][0],
        lineWidth: AREA_LINE });


      circle({
        ctx: ctx,
        x: POS[this.state.x][this.state.y][0],
        y: POS[this.state.x][this.state.y][1],
        radius: PERSON_RADIUS,
        startAngle: 0 });

    } }, { key: 'verifyArea', value: function verifyArea(

    x, y) {
      return x >= 0 && x < GRID_SIZE &&
      y >= 0 && y < GRID_SIZE &&
      this.state.grid[x][y] === 0;
    } }, { key: 'verifyGameover', value: function verifyGameover()

    {var _this3 = this;
      var boundsEx = function boundsEx(arr, x, y, bool) {
        try {arr[x][y] = arr[x][y];} catch (e) {return 0;}

        if (arr[x][y] == 0) return 1;

        return 0;
      };

      var gameover = function gameover() {
        var win = _this3.state.points === 375;
        title = win ? "Tô zuando" : "GAME OVeR";
        _this3.setState(_extends({},
        _this3.state, {
          gameon: false,
          win: win,
          title: title,
          classTitle: 'title gameover' }));


        if (!win)
        _this3.timeout = setTimeout(function () {_this3.reset();}, 60000);
      };var _state =

      this.state,x = _state.x,y = _state.y,grid = _state.grid;
      var bool = 0;

      bool += boundsEx(grid, x, y, bool);
      bool += boundsEx(grid, x + 1, y, bool);
      bool += boundsEx(grid, x, y + 1, bool);
      bool += boundsEx(grid, x + 1, y + 1, bool);
      bool += boundsEx(grid, x - 1, y, bool);
      bool += boundsEx(grid, x, y - 1, bool);
      bool += boundsEx(grid, x - 1, y - 1, bool);

      if (x == GRID_SIZE - 1 && y == GRID_SIZE - 1) bool = -1;

      if (bool == 0 || bool == -1)
      gameover();
    } }, { key: 'reset', value: function reset()

    {var _this4 = this;
      clearTimeout(this.timeout);
      var promise = function promise() {return new Promise(function (resolve, reject) {
          _this4.setState({
            title: 'Jogando',
            classTitle: 'title',
            points: 0,
            gameon: true,
            x: 0,
            y: 0,
            grid: generateGrid() });

          resolve();
        });};

      promise().then(function () {_this4.mountBoard();});
    } }, { key: 'listenerKeyUp', value: function listenerKeyUp(

    event) {var _state2 =
      this.state,x = _state2.x,y = _state2.y;
      switch (KEYS[event.keyCode]) {
        case 'left':
          y--;
          break;
        case 'up':
          x--;
          break;
        case 'right':
          y++;
          break;
        case 'down':
          x++;
          break;
        default:}


      if (this.state.gameon && this.verifyArea(x, y)) {
        var points = this.state.points + 25;
        var grid = [].concat(_toConsumableArray(this.state.grid));
        grid[x][y] = 1;

        this.setState(_extends({},
        this.state, {
          grid: grid,
          x: x,
          y: y,
          points: points }));


        this.mountBoard();
        this.verifyGameover();
        event.preventDefault();
      }
    } }, { key: 'calculatePoints', value: function calculatePoints()

    {
      return this.state.grid.map(function (item) {return (
          item.reduce(function (acc, val) {return acc + val;}, 0));}).
      reduce(function (acc, val) {return acc + val;}, 0);
    } }, { key: 'render', value: function render()

    {var _this5 = this;
      return (
        React.createElement('div', { id: 'content' },
          React.createElement('img', { style: { position: 'absolute', left: 10000 }, id: 'head', width: '50', height: '50', src: 'https://static.thenounproject.com/png/58041-200.png' }),
          React.createElement('img', { style: { position: 'absolute', left: 10000 }, id: 'axis', width: '50', height: '50', src: 'http://pngimage.net/wp-content/uploads/2018/06/icon-x-png-3.png' }),

          React.createElement('article', null,
            React.createElement('h1', null, 'GRIDO GAME'),
            React.createElement('p', null, 'Ajude Kakaroto a se teletransportar pelas salas e derrotar todos os inimigos'),
            React.createElement('h2', null, 'REGRAS'),
            React.createElement(List, null,
              React.createElement(ListItem, { icon: 'angle-right' }, 'Use as teclas:',
                React.createElement(List, null,
                  React.createElement(ListItem, { icon: 'angle-double-right' }, 'Seta cima, W - Cima'),
                  React.createElement(ListItem, { icon: 'angle-double-right' }, 'Seta direita, D - Direita'),
                  React.createElement(ListItem, { icon: 'angle-double-right' }, 'Seta baixo, S - Baixo'),
                  React.createElement(ListItem, { icon: 'angle-double-right' }, 'Seta esquerda, A - esquerda'))),


              React.createElement(ListItem, { icon: 'angle-right' }, 'A \xFAltima \xE1rea visitada deve ser a marcada com um X'),
              React.createElement(ListItem, { icon: 'angle-right' }, 'Voc\xEA deve pintar todas as \xE1reas do grid'),
              React.createElement(ListItem, { icon: 'angle-right' }, 'Voc\xEA n\xE3o pode voltar a uma \xE1rea j\xE1 visitada'))),


          React.createElement('div', { className: 'container' },
            React.createElement('span', { style: { display: this.state.win ? 'block' : 'none' }, className: 'title' }, 'Kakaraleo! Diz ae, como ce ganhou s\xE1 merda?!'),
            React.createElement('span', { style: { display: !this.state.gameon ? 'block' : 'none' }, className: 'title' }, 'Kakaraleo! A terra foi destru\xEDda, e a culpa \xE9 tua!!'),
            React.createElement('div', { className: 'descriptions' },
              React.createElement('span', { className: this.state.classTitle }, this.state.title),
              React.createElement('span', { className: 'points' }, 'Pontos: ', this.state.points)),

            React.createElement('canvas', { ref: function ref(canvas) {_this5.canvas = canvas;}, width: '320', height: '320', id: 'grido' }),
            React.createElement('button', { onClick: this.reset }, 'COME\xC7AR DE NOVO'))));



    } }]);return Grido;}(React.Component);


var List = function List(props) {return (
    React.createElement('ul', null, props.children));};


var ListItem = function ListItem(props) {return (
    React.createElement('li', null, React.createElement('i', { className: 'fas fa-' + props.icon }), ' ', props.children));};


ReactDOM.render(React.createElement(Grido, null), document.getElementById('app'));