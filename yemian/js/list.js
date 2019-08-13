class List{
    constructor(){
        this.cont = document.querySelector(".cont");
        this.url = "http://localhost/姜浩南8.7/yemian/libs/goods.json";
        this.load();
        this.addEvent();
    }
    addEvent(){
        var that = this;
        this.cont.addEventListener("click",function(eve){
            if(eve.target.className == "btn"){
                that.id = eve.target.parentNode.getAttribute("qwe");
                that.setCookie();
            }
        })
        
        
    }
    setCookie(){
        this.goods = getCookie("goods") ? JSON.parse(getCookie("goods")) : [];
        if(this.goods.length == 0){
            this.goods.push({
                id:this.id,
                num:1
            })
        }else{
            var i = 0;
            var onoff = this.goods.some((val,index)=>{
                i = index;
                return val.id == this.id;
            })
            if(onoff){
                this.goods[i].num++
            }else{
                this.goods.push({
                    id:this.id,
                    num:1
                })
            }
        }
        setCookie("goods",JSON.stringify(this.goods));
    }
    load(){
        var that = this;
        ajaxGet(this.url,function(res){
            that.res = JSON.parse(res);
            that.display();
        })
    }
    display(){
        // console.log(this.res);
        var str = "";
        this.res.forEach((val)=>{
            str += `<div class="box" qwe="${val.goodsId}"><a href="details.html">
                        <img src="${val.url}" alt="" id="btn1">
                        <span>型号：<a href="">${val.name}</a></span>
                        <p>价格：${val.price}</p>
                        <em>介绍：${val.tip}</em>
                        <i class="btn">加入购物车</i>
                   </a></div>`
           
                })
        this.cont.innerHTML = str;
    }
    
}

new List;
