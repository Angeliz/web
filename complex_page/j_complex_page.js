//标签选项卡
window.onload = function(){
    var myTab = document.getElementById("tab");    //整个div
    var myUl = myTab.getElementsByTagName("ul")[0];//一个节点
    var myLi = myUl.getElementsByTagName("li");    //数组
    var myDiv = myTab.getElementsByTagName("div"); //数组

    for(var i = 0; i<myLi.length;i++){
        myLi[i].index = i;
        myLi[i].onclick = function(){
            for(var j = 0; j < myLi.length; j++){
                myLi[j].className="off";
                myDiv[j].className = "hide";
            }
            this.className = "on";
            myDiv[this.index].className = "show";
        }
    }
}

// 左右滑动选择
var myLeft=document.getElementById("left2");
var myRight=document.getElementById("right2");
var myLong=document.getElementById("long");

// var j=myLong.style.left;
//  j=parseInt(j.substr(0,j.length-2));

myLeft.onclick = function(){
    myLong.style.left=myLong.style.left - 108 + "px";
}