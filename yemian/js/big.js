function Zoom(){
    this.box = document.querySelector(".box")
    this.mp = document.querySelector(".mp");
    this.zimg =  this.box.children[1];
    this.boxb = document.querySelector(".box-b") 
    this.imgb = this.boxb.children[0];
    this.zs =  document.querySelector(".zs")
   this.simg = this.zs.children;

     this.addevent();
}

 Zoom.prototype.addevent = function(){
     var that = this;    
     this.box.onmouseover = function(){
       that.mp.style.display = "block";
       that.boxb.style.display = "block";
       that.sl = that.boxb.offsetWidth / that.imgb.offsetWidth;
       that.st = that.boxb.offsetHeight / that.imgb.offsetHeight;     
       that.mp.style.width =  that.sl*that.box.offsetWidth + "px";
       that.mp.style.height = that.st*that.box.offsetHeight +"px";
     
     }
     this.box.onmouseout = function(){
       that.mp.style.display = "none";
       that.boxb.style.display = "none";   
     }
     this.box.onmousemove = function(eve){
       var e = eve || window.event;     
       var l = e.clientX - that.box.offsetLeft-that.mp.offsetWidth / 2;
       var t = e.clientY - that.box.offsetTop-that.mp.offsetHeight / 2;  
       if(l < 0)l = 0;
       if(t < 0)t = 0;
       if(l > that.box.offsetWidth-that.mp.offsetWidth){
           l = that.box.offsetWidth-that.mp.offsetWidth;
       }
       if(t > that.box.offsetHeight-that.mp.offsetHeight){
           t = that.box.offsetHeight-that.mp.offsetHeight;
       }
       that.mp.style.left = l + "px"
       that.mp.style.top = t + "px"
       var x = l / (that.box.offsetWidth-that.mp.offsetWidth);
       var y = t / (that.box.offsetHeight-that.mp.offsetHeight);
       that.imgb.style.left=-x * (that.imgb.offsetWidth-that.boxb.offsetWidth)+ "px"
       that.imgb.style.top=-y * (that.imgb.offsetHeight-that.boxb.offsetHeight) + "px"
     }
     this.changeImg();
 }
Zoom.prototype.changeImg = function(){
     var that = this;
       for(var i = 0;i<this.simg.length;i++){
       this.simg[i].onmousemove = function(){
          that.zimg.src = this.src; 
          that.imgb.src = this.src;
       }
       }
 }
new Zoom;