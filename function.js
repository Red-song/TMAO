function getClass(classname,obj){
          var obj=obj||document;
          if(obj.getElementsByClassName){
          	return obj.getElementsByClassName(classname);
          }
          else{
          	var all=obj.getElementsByTagName("*");
          	var arr=[];
          	for(var i=0;i<all.length;i++){
          		if(checkRel(all[i].className,classname)){
          			arr.push(all[i]);
          		}
          	}return arr;
          }
             function checkRel(str,val){
                var newarr=str.splice(" ");
                for(var i=0;i<newarr.length;i++){
                	if(newarr[i]==val){
                		return true;
                	}
                }return false;
             }
      }
       //获得第一个儿子
    function getFirst(parent){
      return getChilds(parent)[0];
    }
     //获得最后1个儿子
    function getLast(parent){     
      return getChilds(parent)[getChilds(parent).length-1];     
    }
     //找儿子
      function getChilds(parent,type){
        var type=type||"a";
         var childs=parent.childNodes;//此句无兼容，获取所有。
         var arr=[];

         for(var i=0;i<childs.length;i++){          
          if(type=="a"){         
          if(childs[i].nodeType==1){
            arr.push(childs[i]);
          }
         }
         
          else if(type=="b"){
          if(childs[i].nodeType==1||(childs[i].nodeType==3&&childs[i].nodeValue.replace(/^\s*|\s*&/g,""))){
            arr.push(childs[i]);
          }
          
      }
    }return arr;

  }

       /*可以获取设置纯文本兼容函数*/
      function getText(obj,val){
        if(val==undefined){
            if(obj.innerText){
                   return obj.innerText;
            }else{
               return obj.textContent;
            }
          }
          else{
            if(obj.innerText||obj.innerText==""){
            //IE8,当浏览器有innerText这个属性，或者这个对象内容为空字符串时，都可以设置文本。
                   obj.innerText=val;
            }else{
               obj.textContent=val;
            }
          }
      }

      /*IE8和W3获取行内或者行外兼容问题的解决*/
      function getStyle(obj,attr){//obj 那个对象 attr那个属性
         if(obj.currentStyle){//ie8
          return obj.currentStyle[attr];
         }
         else{
          return getComputedStyle(obj,null)[attr];
         }
      }

      /*$(".box"); 类名
      $("#box");  ID
      $("div"); 标签名*/

      function $(select,obj){
        var obj=obj||document;
          if(typeof select=="string"){
            select=select.replace(/^\s*|\s*&/g,"");//解决空格的问题
               if(select.charAt(0)=="."){
                     return getClass(select.slice(1));
               }else if(select.charAt(0)=="#"){
                  return obj.getElementById(select.slice(1));
               }else if(/^[a-z|1-6]{1,10}$/g.test(select)){
                    return obj.getElementsByTagName(select);
               }
          }
          else if(typeof select=="function"){
                  window.onload=function(){
                    select();
                  }
          }
      }

     //lunbo4 效果函数
        function lunbo(num){
        var bigbox=$(".one-left-middle-imgs")[num];
        var anniu1=$(".anniu1")[num];
        var anniu2=$(".anniu2")[num];
        function moveleft(){
        animate(bigbox,{left:-140},600,Tween.Linear,function(){
        var first=getFirst(bigbox);
        var last=getLast(bigbox);       
        bigbox.appendChild(first);
        bigbox.style.left=0;
        })
        } 
        function moveright(){
        var first=getFirst(bigbox);
        var last=getLast(bigbox);
         bigbox.style.left=-140+"px";       
        bigbox.insertBefore(last,first);
        animate(bigbox,{left:0},600,Tween.Linear);
        }
        var t=setInterval(moveleft,1000);
        
        anniu1.onmouseover=anniu2.onmouseover=function(){
            clearInterval(t);
        }
        anniu1.onmouseout=anniu2.onmouseout=function(){
            t=setInterval(moveleft,1000);
        }
        
        anniu1.onclick=function(){
        moveleft();
        }
        anniu2.onclick=function(){
        moveright();
        }

      }

      //滚动条

    function getScrollT(){
    var scrollT=document.documentElement.scrollTop||document.body.scrollTop;
         return scrollT;
  }



//hover判断某个元素是否包含有另外一个元素
 function contains (parent,child) {
  if(parent.contains){
     return parent.contains(child) && parent!=child;
  }else{
    return (parent.compareDocumentPosition(child)===20);
  }
 }

//判断鼠标是否真正的从外部移入，或者是真正的移出到外部；
  function checkHover (e,target) {
   if(getEvent(e).type=="mouseover"){
      return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
   }else{
    return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
    }
  }
//鼠标移入移出事件
/*
  obj   要操作的对象
  overfun   鼠标移入需要处理的函数
  outfun     鼠标移除需要处理的函数
*/
function hover (obj,overfun,outfun) {
    if(overfun){
      obj.onmouseover=function  (e) {
        if(checkHover(e,obj)){
           overfun.call(obj,[e]);
        }
      }
    }
    if(outfun){
      obj.onmouseout=function  (e) {
        if(checkHover(e,obj)){
           outfun.call(obj,[e]);
        }
      }
    }
}
 function getEvent (e) {
      return e||window.event;
 }

 