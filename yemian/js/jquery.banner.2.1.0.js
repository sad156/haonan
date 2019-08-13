;(function($){
    $.fn.banner = function(options){
        var that = this;
        var ban = {};
        ban.list = options.list === false ? false : true;
        ban.autoPlay = options.autoPlay === false ? false : true;
        ban.delayTime = options.delayTime || 2000;
        ban.moveTime = options.moveTime || 300;
        if(options.index >= 0 && options.index <= options.items.length-1){
            ban.index = options.index;
        }else if(options.index > options.items.length-1){
            ban.index = options.items.length-1
        }else{
            ban.index = 0;
        }
        ban.iPrev = null;
        ban.init = function(){
            if(!ban.list) return;
            this.ul = $("<ul>");
            var str = "";
            for(var i=0;i<options.items.length;i++){
                str += `<li>${i+1}</li>`
            }
            this.ul.html(str);
            that.append(this.ul);
            this.ul.css({
                width:"689px",
                height:30,
                
                display:"flex",
                 justifyContent:"center",
                position:"absolute",
                left:0,
                bottom:"2px",
                margin:0,
                padding:0,
                listStyle:"none",
                textAlign:"center"
            }).children("li").css({
               width:"20px",
               height:"20px",
                borderRadius:"50%",
                cursor:"pointer",
                borderLeft:"solid 1px #fff",
                borderRight:"solid 1px #fff"
            }).eq(ban.index).css({
                backgroundColor:"red",
                color:"#fff"
            })

            this.listAction()
        }
        ban.listAction = function(){
            var _this = this;
            this.ul.children("li").click(function(){
                if($(this).index() > _this.index){
                    // console.log("左")
                    _this.listMove(1,$(this).index())
                }
                if($(this).index() < _this.index){
                    // console.log("右")
                    _this.listMove(-1,$(this).index())
                }
                _this.index = $(this).index();
                _this.ul.children("li").css({
                    backgroundColor:"",
                    color:""
                }).eq(_this.index).css({
                    backgroundColor:"red",
                    color:"#fff"
                })
            })
        }
        ban.listMove = function(type,iNow){
            options.items.eq(this.index).css({
                left:0
            }).stop().animate({
                left:-options.items.eq(0).width() * type
            },this.moveTime).end().eq(iNow).css({
                left:options.items.eq(0).width() * type
            }).stop().animate({
                left:0
            },this.moveTime)
        }
        

        ban.btnActive = function(){
            if(!(options.left != undefined && options.left.length > 0 && options.right != undefined && options.right.length > 0)) return;
             var _this = this;
            options.left.on("click",function(){
                if(_this.index == 0){
                    _this.index = options.items.length-1;
                    _this.iPrev = 0;
                }else{
                    _this.index--;
                    _this.iPrev = _this.index+1;
                }
                _this.btnMove(-1);
            })
            options.right.on("click",function(){
                if(_this.index == options.items.length-1){
                    _this.index = 0;
                    _this.iPrev = options.items.length-1;
                }else{
                    _this.index++;
                    _this.iPrev = _this.index - 1;
                }
                _this.btnMove(1);
            })
        }
        ban.btnMove = function(type){
            options.items.eq(this.iPrev).css({
                left:0
            }).stop().animate({
                left:-options.items.eq(0).width() * type
            },this.moveTime).end().eq(this.index).css({
                left:options.items.eq(0).width() * type
            }).stop().animate({
                left:0
            },this.moveTime)
            this.ul.children("li").css({
                backgroundColor:"",
                color:""
            }).eq(this.index).css({
                backgroundColor:"red",
                color:"#fff"
            })
        }
        ban.autoAction = function(){
            var _this = this;
            if(!ban.autoPlay) return;
            this.t = setInterval(() => {
                options.right.trigger("click")
            }, this.delayTime);
            that.hover(function(){
                clearInterval(_this.t)
            },function(){
                _this.t = setInterval(() => {
                    options.right.trigger("click")
                }, _this.delayTime);
            })
        }
        ban.init()
        ban.btnActive()
        ban.autoAction()
    }
})(jQuery);

