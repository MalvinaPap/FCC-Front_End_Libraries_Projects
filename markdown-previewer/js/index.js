var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var App = function (_React$Component) {_inherits(App, _React$Component);
  function App(props) {_classCallCheck(this, App);var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this,
    props));
    _this.state = {
      markdown: "# Welcome \n## Have fun testing your **markdown**\n1. Write your markdown \n1. See the results\n\n\nThis is a [freeCodeCamp](https://www.freecodecamp.com) project\n\n Made using the React framework\n![React Logo w/ Text](https://goo.gl/Umyytc)" };return _this;

  }_createClass(App, [{ key: "handleChange", value: function handleChange(

    event) {
      this.setState({ markdown: event.target.value });
    } }, { key: "render", value: function render()

    {var _this2 = this;
      return (
        React.createElement("div", { className: "row" },
          React.createElement("div", { className: "col-md-6" },
            React.createElement("h3", { className: "btn btn-info" }, "Editor"), React.createElement("br", null),
            React.createElement("textarea", { id: "editor", onChange: function onChange() {return _this2.handleChange(event);}, value: this.state.markdown, rows: "10" })),

          React.createElement("div", { className: "col-md-6" },
            React.createElement("h3", { className: "btn btn-info" }, "Preview"), React.createElement("br", null),
            React.createElement("div", { className: "jumbotron", id: "preview", dangerouslySetInnerHTML: { __html: marked(this.state.markdown) } }))));








    } }]);return App;}(React.Component);


ReactDOM.render(React.createElement(App, null), document.querySelector('.render-target'));