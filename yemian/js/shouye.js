;(function(){
// 轮播图
$(".banner1").banner({
    items:$(".banner1").find("img"),        
    left:$(".banner1").find("#left"),       
    right:$(".banner1").find("#right"),    
    autoPlay:true,                          
    delayTime:3000,                         
    moveTime:200,                          
    index:0,                                
})
// 购物车验证
var msg = localStorage.getItem("loginUser");

$("#car").find(".car1").on("click","span", function(){

    if(msg){
      location.href = "car.html";
  }else{
      if(confirm("请先登录,才能进入购物车")){
          location.href = "denglu.html";
      }else{
          location.href = "shouye.html";
      }
  } 
})
//登录渲染
if(msg){
    $(".p1").hide();
    $(".p2").show();
    $(".p2").find("span").html(JSON.parse(msg).user);
}else{
    $(".p1").show();
    $(".p2").hide();
}

$(".p2").find("a").click(function(){
    localStorage.removeItem("loginUser");
    $(".p1").show();
    $(".p2").hide();
})
// 页面渲染
var data = [{src:"http://www.icbase.com/images/AdvantagePro/adpro_STM32F4.jpg",
strong:"STM32F4 系列",
name:"拥有 DSP 和 FPU 指令的高性能微控制器",
bug:"立即抢购"
},{
src:"http://www.icbase.com/File/Web/AdvantagePro/adpro_FAN3224TMX.jpg",
strong:"FAN3224TMX",
name:"TTL 输入，双通道同相输出，5A峰值灌电流，5A源电流低端栅极驱动器",
bug:"立即抢购"	
},{
src:"http://www.icbase.com/images/AdvantagePro/adpro_NCV4274ST25T3G-ON.jpg",
strong:"NCV4274",
name:"400mA 低压差线性稳压器",
bug:"立即抢购"
},{
src:"http://www.icbase.com/images/AdvantagePro/adpro_SN65LBC184DR.jpg",
strong:"SN65LBC184DR",
name:"抑制瞬态高压的 RS-485 收发器",
bug:"立即抢购"
}
];
var str = "";
for(var i=0;i<data.length;i++){
str += '<div class="box1"><a href="list.html"><img src="'+ data[i].src +'" /></a><h5><a href="#">'+ data[i].strong +'</a></h5><p><a href="#">'+ data[i].name +'</a></p><span><a href="#">'+ data[i].bug +'</a></span></div>';
}

var mbb = document.getElementById("margin1Bb");
mbb.innerHTML = str;
// 百度端口
class Search{
    constructor(){
        this.url = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su";
        this.txt = document.getElementById("txt");
        this.list = document.getElementById("list");
       
        this.addEvent()
    }
    addEvent(){
        var that = this;
        this.txt.onclick = function(){
            this.value = ""           
        }
       
        this.txt.onkeyup = function(){
            that.value = this.value;
            list.style.display = "block"           
            that.load()
        }
        this.txt.onblur = function(){
            list.style.display = "none"
        }     
    }
    load(){
        var that = this;
        jsonp(this.url,function(res){
            that.res = res;
            that.display();
        },{
            columnName:"cb",
            cb:"ajsgdajsdg",
            wd:this.value
        })
    }
    display(){
        var str = "";
        for(var i=0;i<this.res.s.length;i++){
            str += `<li>${this.res.s[i]}</li>`
        }
        this.list.innerHTML = str;
    }
}
// 楼层
new Search;
var oNav = $('#LoutiNav');
		var aNav = oNav.find('li');
		var aDiv = $('#main .louceng');
		var oTop = $('#goTop');
		 $(window).scroll(function(){
			  var winH = $(window).height();
			  var iTop = $(window).scrollTop();

			  if(iTop>=$('#header').height()){
				 oNav.fadeIn();
				 oTop.fadeIn();
			  aDiv.each(function(){
				 if(winH+iTop - $(this).offset().top>winH/2){
					 aNav.removeClass('active');
					 aNav.eq($(this).index()).addClass('active');
				 }
			  })
			  }else{
				 oNav.fadeOut();
				 oTop.fadeOut();
			  }
		 })
		 oTop.click(function(){
			 $('body,html').animate({"scrollTop":0},500)
		 })
		 aNav.click(function(){
			 var t = aDiv.eq($(this).index()).offset().top;
			 $('body,html').animate({"scrollTop":t},500);
			 $(this).addClass('active').siblings().removeClass('active');
		 });	
        })()