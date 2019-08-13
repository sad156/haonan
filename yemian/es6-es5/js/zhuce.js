"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Login = function () {
    function Login() {
        _classCallCheck(this, Login);

        this.url = "http://api.icodeilife.cn:81/user";
        this.user = $("#user");
        this.name = $("#name");
        this.pass = $("#pass");
        this.dpass = $("#dpass");
        this.btn = $("#btn");
        this.state = $("b span");
        this.addEvent();
    }

    _createClass(Login, [{
        key: "addEvent",
        value: function addEvent() {
            this.user.click(function () {
                this.value = "";
            });
            var that = this;
            this.btn.click(function () {
                that.load();
            });
        }
    }, {
        key: "load",
        value: function load() {
            var _this = this;

            $.ajax({
                url: this.url,
                data: {
                    type: "register",
                    user: this.user.val(),
                    name: this.name.val(),
                    pass: this.pass.val(),
                    dpass: this.dpass.val()
                },
                success: function success(res) {
                    res = JSON.parse(res);
                    if (res.code == 0) {
                        _this.state.html("注册失败，请重新注册");
                    } else if (res.code == 1) {
                        _this.state.html("注册成功，5秒后跳转到<a href='denglu.html'>登录</a>");
                        setTimeout(function () {
                            location.href = "denglu.html";
                        }, 5000);
                    }
                }
            });
        }
    }]);

    return Login;
}();

new Login();

user.onblur = function () {
    var userReg = /^[\w$]{5,17}$/;
    if (userReg.test(this.value)) {
        user = true;
    } else {
        alert("用户名格式有误");
        user = false;
    }
};
pass.onblur = function () {
    var passReg = /^[\d\w?><":{}+.,';=-|$]{5,15}$/;
    if (passReg.test(this.value)) {
        pass = true;
    } else {
        alert("密码格式有误");
        pass = false;
    }
};
dpass.onblur = function () {
    if (dpass.value == pass.value) {
        dpass = true;
    } else {
        alert("重复密码错误");
        dpass = false;
    }
};