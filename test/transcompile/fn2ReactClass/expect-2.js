'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var bb = function (_React$Component) {
    _inherits(bb, _React$Component);

    function bb() {
        _classCallCheck(this, bb);

        return _possibleConstructorReturn(this, (bb.__proto__ || Object.getPrototypeOf(bb)).apply(this, arguments));
    }

    _createClass(bb, [{
        key: 'render',
        value: function render() {
            ;

            return React.createElement('div', null);
        }
    }]);

    return bb;
}(React.Component);

(function () {
    var _uid = function (_React$Component2) {
        _inherits(_uid, _React$Component2);

        function _uid() {
            _classCallCheck(this, _uid);

            return _possibleConstructorReturn(this, (_uid.__proto__ || Object.getPrototypeOf(_uid)).apply(this, arguments));
        }

        _createClass(_uid, [{
            key: 'render',
            value: function render() {
                ;

                return React.createElement('div', null);
            }
        }]);

        return _uid;
    }(React.Component);
})();

(function () {
    var _uid2 = function (_React$Component3) {
        _inherits(_uid2, _React$Component3);

        function _uid2() {
            _classCallCheck(this, _uid2);

            return _possibleConstructorReturn(this, (_uid2.__proto__ || Object.getPrototypeOf(_uid2)).apply(this, arguments));
        }

        _createClass(_uid2, [{
            key: 'render',
            value: function render() {
                ;
                return React.createElement('div', null);
            }
        }]);

        return _uid2;
    }(React.Component);
})();

var cc = function () {
    var cc = function (_React$Component4) {
        _inherits(cc, _React$Component4);

        function cc() {
            _classCallCheck(this, cc);

            return _possibleConstructorReturn(this, (cc.__proto__ || Object.getPrototypeOf(cc)).apply(this, arguments));
        }

        _createClass(cc, [{
            key: 'render',
            value: function render() {
                ;

                return React.createElement('div', null);
            }
        }]);

        return cc;
    }(React.Component);
}();

var a = function () {
    var a = function (_React$Component5) {
        _inherits(a, _React$Component5);

        function a() {
            _classCallCheck(this, a);

            return _possibleConstructorReturn(this, (a.__proto__ || Object.getPrototypeOf(a)).apply(this, arguments));
        }

        _createClass(a, [{
            key: 'render',
            value: function render() {
                ;

                var state = this.state;
                var _props = this.props,
                    aa = _props.aa,
                    bb = _props.bb,
                    cc = _props.cc;

                return React.createElement('div', { propa: aa, props: state, cc: cc, className: 'efg' });
            }
        }]);

        return a;
    }(React.Component);
}();

cc.propTypes = {
    ccStr: React.PropsTypes.string
};

cc.defaultProps = {
    ccStr: 'cc'
};

a.propTypes = {
    aStr: React.PropsTypes.string
};

a.defaultProps = {
    aStr: 'a'
};

function eee() {
    return 'a';
}

var ReactComponent = function (_React$Component6) {
    _inherits(ReactComponent, _React$Component6);

    function ReactComponent() {
        _classCallCheck(this, ReactComponent);

        return _possibleConstructorReturn(this, (ReactComponent.__proto__ || Object.getPrototypeOf(ReactComponent)).apply(this, arguments));
    }

    _createClass(ReactComponent, [{
        key: 'render',

        /**
         * @ignore
         */
        value: function render() {
            return React.createElement('div', null);
        }
    }]);

    return ReactComponent;
}(React.Component);

var ReactCreateClass = React.createClass({
    displayName: 'ReactCreateClass',
    render: function render() {
        return React.createElement('div', null);
    }
});