
class Login{
    constructor(){
        this.url = "http://api.icodeilife.cn:81/user";
        this.user = $("#user");
        this.pass = $("#pass");
        this.btn = $("#btn");
        this.state = $("b span");
        this.addEvent()
    }
    addEvent(){
        var that = this
        this.btn.click(function(){
            that.load()
        })
    }
    load(){
        $.ajax({
            url:this.url,
            data:{
                type:"login",
                user:this.user.val(),
                pass:this.pass.val(),
                
            },  
            success:(res)=>{
                this.res = JSON.parse(res);
                if(this.res.code == 2){
                    this.state.html("帐号密码不符，请<a href='denglu.html'>重新登录</a>")
                }else if(this.res.code == 1){
                    this.setState()
                    this.state.html("登录成功,5秒后跳转到<a href='shouye.html'>首页</a>");
                    setTimeout(() => {
                        location.href="shoye.html";
                    }, 5000);
                    console.log(res)
                }else if(this.res.code == 0){
                    this.state.html("不存在该用户信息，请<a href='zhuce.html'>注册</a>")
                }
            }
        })
    }
    setState(){
        localStorage.setItem("loginUser",JSON.stringify(this.res.msg));
    }

}
new Login()


var user = document.getElementById("user")
var pass = document.getElementById("pass")
user.onblur = function(){
    var userReg = /^[\w$]{5,17}$/
    if(userReg.test(this.value)){
      user = true
    }else{
        alert("用户名格式有误")
        user = false
       
    }
}
pass.onblur = function(){
    var passReg = /^[\d\w?><":{}+.,';=-|$]{5,15}$/
    if(passReg.test(this.value)){
        pass = true
    }else{
        alert("密码格式有误")
        pass = false
    }
}