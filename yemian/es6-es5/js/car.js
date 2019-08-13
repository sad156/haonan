"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Car = function () {
    function Car() {
        _classCallCheck(this, Car);

        this.tbody = document.querySelector("tbody");
        this.url = "http://localhost/姜浩南8.7/yemian/libs/goods.json";
        this.load();
        this.addEvent();
    }

    _createClass(Car, [{
        key: "addEvent",
        value: function addEvent() {
            var that = this;
            this.tbody.addEventListener("click", function (eve) {
                if (eve.target.className == "del") {
                    that.id = eve.target.parentNode.getAttribute("index");
                    eve.target.parentNode.remove();
                    that.changeCookie(function (i) {
                        that.goods.splice(i, 1);
                    });
                }
            });
            this.tbody.addEventListener("input", function (eve) {
                if (eve.target.className == "num") {
                    that.id = eve.target.parentNode.parentNode.getAttribute("index");
                    // that.num = eve.target.value;
                    that.changeCookie(function (i) {
                        that.goods[i].num = eve.target.value;
                    });
                }
            });
        }
    }, {
        key: "changeCookie",
        value: function changeCookie(callback) {
            var _this = this;

            var i = 0;
            this.goods.some(function (val, index) {
                i = index;
                return val.id == _this.id;
            });
            callback(i);
            setCookie("goods", JSON.stringify(this.goods));
        }
    }, {
        key: "load",
        value: function load() {
            var that = this;
            ajaxGet(this.url, function (res) {
                that.res = JSON.parse(res);
                that.getCookie();
            });
        }
    }, {
        key: "getCookie",
        value: function (_getCookie) {
            function getCookie() {
                return _getCookie.apply(this, arguments);
            }

            getCookie.toString = function () {
                return _getCookie.toString();
            };

            return getCookie;
        }(function () {
            this.goods = getCookie("goods") ? JSON.parse(getCookie("goods")) : [];
            this.display();
        })
    }, {
        key: "display",
        value: function display() {
            var _this2 = this;

            var str = "";
            this.res.forEach(function (resVal) {
                _this2.goods.forEach(function (goodsVal) {
                    if (resVal.goodsId == goodsVal.id) {
                        str += "<tr index=\"" + resVal.goodsId + "\">\n                                <td><img src=\"" + resVal.url + "\"></td>\n                                <td>" + resVal.name + "</td>\n                                <td>" + resVal.price + "</td>\n                                <td><input class=\"num\" type=\"number\" value=\"" + goodsVal.num + "\" min=1></td>\n                                <td class=\"del\">\u5220\u9664</td>\n                            </tr>";
                    }
                });
            });
            this.tbody.innerHTML = str;
        }
    }]);

    return Car;
}();

new Car();