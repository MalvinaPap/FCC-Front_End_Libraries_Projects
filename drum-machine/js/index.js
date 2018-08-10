var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var data = [
{ id: "Piano", letter: "Q", src: "../sounds/piano.mp3" },
{ id: "Cello", letter: "W", src: "../sounds/cello.mp3" },
{ id: "Accordion", letter: "E", src: "../sounds/accordion.mp3" },
{ id: "Harp", letter: "A", src: "../sounds/harp.mp3" },
{ id: "Violin", letter: "S", src: "../sounds/violin.mp3"},
{ id: "Bass", letter: "D", src: "../sounds/bass.mp3" },
{ id: "Guitar", letter: "Z", src: "../sounds/guitar.mp3" },
{ id: "Drums", letter: "X", src: "../sounds/drums.mp3" },
{ id: "Trumpet", letter: "C", src: "../sounds/trumpet.mp3" }];var


DrumPad = function (_React$Component) {_inherits(DrumPad, _React$Component);
  function DrumPad(props) {_classCallCheck(this, DrumPad);var _this = _possibleConstructorReturn(this, (DrumPad.__proto__ || Object.getPrototypeOf(DrumPad)).call(this,
    props));
    _this.handleClick = _this.handleClick.bind(_this);return _this;
  }_createClass(DrumPad, [{ key: "handleClick", value: function handleClick()

    {
      this.audio.play();
      this.audio.volume = 0.5;
      this.audio.currentTime = 0;
      this.props.handleDisplay(this.props.id);
    } }, { key: "render", value: function render()

    {var _this2 = this;
      return (
        React.createElement("div", { className: "drum-pad btn btn-info", id: this.props.id, onClick: this.handleClick },
          React.createElement("h1", null, this.props.letter),
          React.createElement("audio", {
            ref: function ref(x) {_this2.audio = x;},
            className: "clip",
            id: this.props.letter,
            src: this.props.src })));



    } }]);return DrumPad;}(React.Component);var


App = function (_React$Component2) {_inherits(App, _React$Component2);
  function App(props) {_classCallCheck(this, App);var _this3 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this,
    props));_this3.







    handleDisplay = function (display) {return _this3.setState({ display: display });};_this3.state = { display: "" };_this3.handleDisplay = _this3.handleDisplay.bind(_this3);return _this3;}_createClass(App, [{ key: "render", value: function render()


    {var _this4 = this;
      return (
        React.createElement("div", { "class": "drum-machine", id: "drum-machine" },
          React.createElement("div", { "class": "display col-md-4 offset-4", id: "display" }, this.state.display),

          React.createElement("div", { id: "drum-pads", className: "jumbotron col-md-10 offset-1" },
            data.map(function (d) {return React.createElement(DrumPad, {
                id: d.id,
                letter: d.letter,
                src: d.src,
                handleDisplay: _this4.handleDisplay });}))));





    } }]);return App;}(React.Component);



ReactDOM.render(React.createElement(App, null), document.querySelector(".target"));