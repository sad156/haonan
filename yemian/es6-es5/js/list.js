"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var List = function () {
    function List() {
        _classCallCheck(this, List);

        this.cont = document.querySelector(".cont");
        this.url = "http://localhost/姜浩南8.7/yemian/libs/goods.json";
        this.load();
        this.addEvent();
    }

    _createClass(List, [{
        key: "addEvent",
        value: function addEvent() {
            var that = this;
            this.cont.addEventListener("click", function (eve) {
                if (eve.target.className == "btn") {
                    that.id = eve.target.parentNode.getAttribute("qwe");
                    that.setCookie();
                }
            });
        }
    }, {
        key: "setCookie",
        value: function (_setCookie) {
            function setCookie() {
                return _setCookie.apply(this, arguments);
            }

            setCookie.toString = function () {
                return _setCookie.toString();
            };

            return setCookie;
        }(function () {
            var _this = this;

            this.goods = getCookie("goods") ? JSON.parse(getCookie("goods")) : [];
            if (this.goods.length == 0) {
                this.goods.push({
                    id: this.id,
                    num: 1
                });
            } else {
                var i = 0;
                var onoff = this.goods.some(function (val, index) {
                    i = index;
                    return val.id == _this.id;
                });
                if (onoff) {
                    this.goods[i].num++;
                } else {
                    this.goods.push({
                        id: this.id,
                        num: 1
                    });
                }
            }
            setCookie("goods", JSON.stringify(this.goods));
        })
    }, {
        key: "load",
        value: function load() {
            var that = this;
            ajaxGet(this.url, function (res) {
                that.res = JSON.parse(res);
                that.display();
            });
        }
    }, {
        key: "display",
        value: function display() {
            // console.log(this.res);
            var str = "";
            this.res.forEach(function (val) {
                str += "<div class=\"box\" qwe=\"" + val.goodsId + "\">\n                        <img src=\"" + val.url + "\" alt=\"\" id=\"btn1\">\n                        <span>\u578B\u53F7\uFF1A<a href=\"\">" + val.name + "</a></span>\n                        <p>\u4EF7\u683C\uFF1A" + val.price + "</p>\n                        <em>\u4ECB\u7ECD\uFF1A" + val.tip + "</em>\n                        <i class=\"btn\">\u52A0\u5165\u8D2D\u7269\u8F66</i>\n                    </div>";
            });
            this.cont.innerHTML = str;
        }
    }]);

    return List;
}();

new List();