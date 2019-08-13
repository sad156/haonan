"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Search = function () {
    function Search() {
        _classCallCheck(this, Search);

        this.url = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su";
        this.txt = document.getElementById("txt");
        this.list = document.getElementById("list");

        this.addEvent();
    }

    _createClass(Search, [{
        key: "addEvent",
        value: function addEvent() {
            var that = this;
            this.txt.onclick = function () {
                this.value = "";
            };

            this.txt.onkeyup = function () {
                that.value = this.value;
                list.style.display = "block";
                that.load();
            };
            this.txt.onblur = function () {
                list.style.display = "none";
            };
        }
    }, {
        key: "load",
        value: function load() {
            var that = this;
            jsonp(this.url, function (res) {
                that.res = res;
                that.display();
            }, {
                columnName: "cb",
                cb: "ajsgdajsdg",
                wd: this.value
            });
        }
    }, {
        key: "display",
        value: function display() {
            var str = "";
            for (var i = 0; i < this.res.s.length; i++) {
                str += "<li>" + this.res.s[i] + "</li>";
            }
            this.list.innerHTML = str;
        }
    }]);

    return Search;
}();

new Search();

var data = [{ src: "http://www.icbase.com/images/AdvantagePro/adpro_STM32F4.jpg",
    strong: "STM32F4 系列",
    name: "拥有 DSP 和 FPU 指令的高性能微控制器",
    bug: "立即抢购"
}, {
    src: "http://www.icbase.com/File/Web/AdvantagePro/adpro_FAN3224TMX.jpg",
    strong: "FAN3224TMX",
    name: "TTL 输入，双通道同相输出，5A峰值灌电流，5A源电流低端栅极驱动器",
    bug: "立即抢购"
}, {
    src: "http://www.icbase.com/images/AdvantagePro/adpro_NCV4274ST25T3G-ON.jpg",
    strong: "NCV4274",
    name: "400mA 低压差线性稳压器",
    bug: "立即抢购"
}, {
    src: "http://www.icbase.com/images/AdvantagePro/adpro_SN65LBC184DR.jpg",
    strong: "SN65LBC184DR",
    name: "抑制瞬态高压的 RS-485 收发器",
    bug: "立即抢购"
}];
var str = "";
for (var i = 0; i < data.length; i++) {
    str += '<div class="box1"><a href="#"><img src="' + data[i].src + '" /></a><h5><a href="#">' + data[i].strong + '</a></h5><p><a href="#">' + data[i].name + '</a></p><span><a href="#">' + data[i].bug + '</a></span></div>';
}

var mbb = document.getElementById("margin1Bb");
mbb.innerHTML = str;