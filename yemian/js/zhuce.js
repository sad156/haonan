class Login{
    constructor(){
        this.url = "http://api.icodeilife.cn:81/user";
        this.user = $("#user");
        this.pass = $("#pass");
        this.dpass = $("#dpass");
        this.btn = $("#btn");
        this.state = $("b span");
        this.addEvent();
    }
    addEvent(){
        var that = this;
        this.btn.click(function(){
            that.load()
        })
    }
    load(){
        $.ajax({
            url:this.url,
            data:{
                type:"register",
                user:this.user.val(),
                pass:this.pass.val(),
                dpass:this.pass.val()
            },
            success:(res)=>{
                res = JSON.parse(res);
                if(res.code == 0){
                this.state.html("注册失败，请重新注册");
                }else if(res.code == 1){
                    this.state.html("注册成功，5秒后跳转到<a href='denglu.html'>登录</a>");
                    setTimeout(() => {
                        location.href = "denglu.html"
                    }, 5000);
                    
                }
            }
        })
    }
}

new Login();

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
dpass.onblur = function(){
    if(dpass.value == pass.value){
        dpass = true
    }else{
        alert("重复密码错误") 
        dpass = false
    }
    
}

