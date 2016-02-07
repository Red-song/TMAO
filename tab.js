window.onload=function(){

//文字图片效果
	/*var word=getClass("hotbrand-li");
	var con=getClass("hotbrand-item-ul");
	for(var i=0;i<word.length;i++){
		word[i].index=i;
		word[i].onclick=function(){
			for(var j=0;j<con.length;j++){
				con[j].style.display="none";
				word[j].style.fontWeight="normal";
			word[j].style.textDecoration="none";
			}
			con[this.index].style.display="block";
			this.style.fontWeight="bold";
			this.style.textDecoration="underline";
		}

	}*/

//心形效果
	/*var img=getClass("hotbrand-item-li");
	var xin=getClass("item-xin");
	for(var i=0;i<img.length;i++){
		img[i].index=i;
		img[i].onmouseover=function(){
            xin[this.index].style.display="block";//cssText="display:block;box-shadow:0px 5px 10px rgba(0,0,0,0.5)";
		}
		img[i].onmouseout=function(){
        xin[this.index].style.display="none";
		}
}*/
//轮播效果
var img=$(".banner-banner");
		var anniua=$(".banner-one");
		var t=setInterval(move,1000);
        var num=1;	

		function move(){
			if(num==6){
      	num=0;
      }
			for(var i=0;i<img.length;i++){
					img[i].style.zIndex=2;
					anniua[i].style.background="black";
				}							 
             	img[num].style.zIndex=3;
             	anniua[num].style.background="red";
             	num++;
      
}

			
			for(var i=0;i<anniua.length;i++){
				anniua[i].index=i;
				anniua[i].onmouseover=function(){
				clearInterval(t);
				for(var j=0;j<anniua.length;j++){
					img[j].style.zIndex=2;
					anniua[j].style.background="black";
				}
				img[this.index].style.zIndex=3;
				anniua[this.index].style.background="red";
				}
				anniua[i].onmouseout=function(){
					t=setInterval(move,1000);
					num=this.index+1;
				}
			}

//搜索框效果

		var text=$(".sousuo-input")[0];
text.onfocus=function(){//表单获得焦点事件
	if(text.value=="欢迎来到天猫^_^"){
		text.value="";
	}
}
text.onblur=function(){
	if(text.value){
       
	}else{
		text.value="欢迎来到天猫^_^";
	}
}

//轮播效果
var bigbox=$(".one-left-middle-imgs");
for(var i=0;i<bigbox.length;i++){
	lunbo(i);
}

//固定定位效果
var fixeda=$(".fixed-img");
for(var i=0;i<fixeda.length;i++){
	fixeda[i].index=i;
	fixeda[i].onmouseover=function(){
	fixeda[i].src=fixeda[i].getAttribute("aa");
  }
}

//搜索框效果+楼层跳转
var text1=$(".sousuo-input")[1];
text1.onfocus=function(){//表单获得焦点事件
	if(text1.value=="欢迎来到天猫^_^"){
		text1.value="";
	}
}
text1.onblur=function(){
	if(text1.value){
       
	}else{
		text1.value="欢迎来到天猫^_^";
	}
}


        var search=$(".search")[0];
     	  var flag=true;
     	  var flag1=true;//0--440  440-3000
        var floors=$(".onebox");
	      var jump=$(".floorsbox")[0];
        var btn=$("li",jump);
        var fimg=$(".floorsbox-img");
//按钮控制滚动条
        
        for(var i=0;i<btn.length;i++){
        	btn[i].index=i;
        	btn[i].onclick=function(){
                var obj=document.documentElement.scrollTop?document.documentElement:document.body;//获取滚动条的对象
                animate(obj,{scrollTop:floors[this.index].t})//当前按钮的对应楼层的top赋值给滚动条

            for(var j=0;j<fimg.length;j++){
              fimg[j].style.opacity=1;
            }
            fimg[this.index].style.opacity=0.5;
        	}  
        }

     	window.onscroll=function(){
     		//搜索框的显示与隐藏
     		var scrollT=getScrollT();
     		if(scrollT>=440){
     			if(flag){//为了保证页面往下拉时只有一个animate函数执行
     				animate(search,{top:0},500);
     				flag=false;
     				flag1=true;
     			}     			
     		}else{
                if(flag1){
                	animate(search,{top:-50});
                	flag1=false;
                	flag=true;
                }	   			
     		}


     		 //楼层跳转
	        if(scrollT>=1000){
	        	jump.style.display="block";
	        }else{
	        	jump.style.display="none";
	        }
            //滚动条控制按钮 



// 按需加载

  var ch=document.documentElement.clientHeight;
    var floor=$(".onebox");
             	var scrollT=getScrollT();
             	for(var i=0;i<floor.length;i++){             		
             		floor[i]=floor[i].offsetTop;
             		if(floor[i].offsetTop<ch+scrollT){
             			var img=$("img",floor[i]);
             			for(var j=0;j<img.length;j++){
                          img[j].src=img[j].getAttribute("aa");
                      }
             		}
             	} 

    for(var i=0;i<floors.length;i++){
              floors[i].t=floors[i].offsetTop;
                if(floors[i].t<scrollT+100){//如果scrollTop大于当前楼层的top
                for(var j=0;j<fimg.length;j++){
                  fimg[j].style.opacity=1;
                }
                  fimg[i].style.opacity=0.5;
              }
            }


     	}

//固定定位动效
var fixed1=$(".fixeddx1");
var fixeda=$(".fixed-a");
for(var i=0;i<fixeda.length;i++){
	fixeda[i].index=i;
	fixeda[i].onmouseover=function(){
		animate(fixed1[this.index],{marginLeft:65,opacity:1},400);
	}
	fixeda[i].onmouseout=function(){
		animate(fixed1[this.index],{marginLeft:0,opacity:0},400);
	}
       
}

  var fixeda1=$(".fixed-a2")[0];
  var erweima=$(".erweima1")[0];
  fixeda1.onmouseover=function(){
         erweima.style.display="block";
  }
fixeda1.onmouseout=function(){
         erweima.style.display="none";
  }
//固定定位位置调整
var h=document.documentElement.clientHeight;
var fixed=$(".fixed")[0];
fixed.style.height=h+"px";

//图片左移效果

var oneimg1=$(".one-r-img");
for(var i=0;i<oneimg1.length;i++){
	oneimg1[i].index=i;
	oneimg1[i].onmouseover=function(){
           oneimg1[this.index].style.marginLeft=-2+"px";
	}
	oneimg1[i].onmouseout=function(){
           oneimg1[this.index].style.marginLeft=0+"px";
	}
}

//下拉效果
           var yiji=$(".mrbbox");
             var erji=$(".mrb-ul");
             for(var i=0;i<yiji.length;i++){
                 yiji[i].index=i;
                 hover(yiji[i],function(){
                 	var lis=$("li",erji[this.index]);
                 	var h=lis[0].offsetHeight;
                 	erji[this.index].style.height=0+"px";
                 	animate(erji[this.index],{height:lis.length*h},600)
                 },function(){
                 	animate(erji[this.index],{height:0},600)
                 })
             }





//选项卡效果
var onearr=[];
var twoarr=[];
var threearr=[];
var fourarr=[];
var con=$(".hotbrand-item-ul");

for(var i=0;i<54;i++){
	onearr.push("images/mingpai"+i+".jpg");
	twoarr.push("images/mingpai"+i+".jpg");
	threearr.push("images/mingpai"+i+".jpg");
	fourarr.push("images/mingpai"+i+".jpg");
}

//js获取添加图片函数
 function randomImg(arr){
  var newarr=[];
  for(var i=0;i<24;i++){
    newarr.push(arr[parseInt(Math.random()*54)]);
  }
  return newarr;
 }




var arr=[onearr,twoarr,threearr,fourarr];
//alert(arr.length)
function show(num){
	var imgarr=randomImg(arr[num]);
	for(var i=0;i<imgarr.length;i++){
		var divs=document.createElement("div");
		divs.setAttribute("class","div1");
		divs.style.cssText="position:relative;width:135px;height:80px;float:left;background:white;margin-top:4px;margin-left:5px;"
	    con[num].appendChild(divs);
	    var as=document.createElement("a");
	    divs.appendChild(as);
	    as.href="#";
	    var imgs=document.createElement("img");
	    as.appendChild(imgs);
	    imgs.src=imgarr[i];
	    imgs.style.cssText="width:90px;height:45px;position:absolute;top:15px;left:20px"

	    var xin=document.createElement("img");
	    xin.setAttribute("class","xins");
	    divs.appendChild(xin);
	    xin.src="images/xin.png";
	    xin.style.cssText="width:20px;height:20px;position:absolute;top:0px;right:0px;display:none"

  }

  //心形效果
      
    var div=$(".div1");
   // alert(div.length);
	var xin=$(".xins");
	for(var i=0;i<div.length;i++){
		div[i].index=i;
		div[i].onmouseover=function(){
            xin[this.index].style.display="block";
		}
		div[i].onmouseout=function(){
        xin[this.index].style.display="none";
		}
  }
//每show一次便会出现此功能！
}
   
   show(0);

        
        
  

//文字图片效果
    var now;
	var title=getClass("hotbrand-li");
	//alert(title);
	for(var i=0;i<title.length;i++){
		title[i].index=i;
		title[i].flag=true;
		title[0].flag=false;

		title[i].onclick=function(){
			now=this.index;
			for(var j=0;j<con.length;j++){
				con[j].style.display="none";
				title[j].style.fontWeight="normal";
			    title[j].style.textDecoration="none";
			}

			con[this.index].style.display="block";
			this.style.fontWeight="bold";
			this.style.textDecoration="underline";
			if(this.flag){
				show(this.index);
				this.flag=false;
			}
		}

	}



var btn=$("#reload");
    btn.onclick=function(){
	con[now].innerHTML="";
	show(now);
}





//下拉列表效果

 var list1=$("#top1-right-li1"); 
 var list2=$(".list")[0]; 

      hover(list1,function(){
        var lis=$(".list1",list2);
        var h=lis[0].offsetHeight;
              list2.style.height=0+"px";
               animate(list2,{height:lis.length*h},400)
                 },function(){
                 	animate(list2,{height:0},400)
                 })
 var list3=$("#top1-right-li2"); 
 var list4=$(".lists")[0]; 

      hover(list3,function(){
        var lis=$(".list1",list4);
        var h=lis[0].offsetHeight;
              list4.style.height=0+"px";
               animate(list4,{height:lis.length*h},400)
                 },function(){
                 	animate(list4,{height:0},400)
                 })   

  var list5=$("#top1-right-li3");
  var list6=$(".list-wang")[0]; 
     hover(list5,function(){
     	animate(list6,{height:200},400)
     },function(){
     	animate(list6,{height:0},400)
     })

var list7=$("#top1-right-li4");
  var list8=$(".list-wzdh")[0]; 
     hover(list7,function(){
     	animate(list8,{height:400},400)
     },function(){
     	animate(list8,{height:0},400)
     })


    //banner


     var bannera=$(".bannera")[0];
    var bannerul1=$(".banner-ul1")[0];
    var bannerli=$(".banner-li")[0];
   
    bannerli.onmouseover=function(){
       bannerul1.style.display="block";
       animate(bannera,{marginLeft:40},500)
    }
     bannerli.onmouseout=function(){
       bannerul1.style.display="none";
       animate(bannera,{marginLeft:30},500)
    }
    bannerul1.onmouseover=function(){
       bannerul1.style.display="block"
    }
    bannerul1.onmouseout=function(){
       bannerul1.style.display="none"
    }
   

//banner
var banneraa=$(".bannera");
var bannerul2=$(".banner-ul2");
var bannerlia=$(".banner-li");
var bannerdan=$(".banner-dan");
var bannerCha=$(".banner-change")[0];
for(var i=1;i<bannerlia.length;i++){
    bannerlia[i].index=i;
    bannerlia[i].onmouseover=function(){
    	for(var j=0;j<bannerul2.length;j++){
   	bannerul2[j].style.display="none";
       bannerdan[j].style.zIndex=0;
       bannerCha.style.display="none";

   }
       bannerul2[this.index-1].style.display="block";
       bannerdan[this.index-1].style.zIndex=3;
       animate(banneraa[this.index],{marginLeft:40},500)
       
    }

    bannerlia[i].onmouseout=function(){
    	for(var j=0;j<bannerul2.length;j++){
   	bannerul2[j].style.display="none";
       bannerdan[j].style.zIndex=0;
       bannerCha.style.display="block";

   }
   animate(banneraa[this.index],{marginLeft:30},500)
    }
}
    for(var i=0;i<bannerul2.length;i++){
    	bannerul2[i].index=i;
    	bannerul2[i].onmouseover=function(){
    		bannerul2[this.index].style.display="block";
    		bannerCha.style.display="none";
    	}
    	bannerul2[i].onmouseout=function(){
    		bannerul2[this.index].style.display="none";
    		bannerCha.style.display="block";
    	}
    }








}





		
		

	



