//轮播图
//获取指定标签
var ulBox = document.getElementById("ulBox");
var loop = document.getElementsByClassName("loop")[0];
var points = document.querySelectorAll(".banner .point ol li");//得到的也是一个伪数组
//定义宽度
var width = 500;
//定义索引值
var index = 0;
//定义定时器
var time = null;
//定义切换图片的函数
function changeImage(step){//形参
    //设置ul标签的过渡
    ulBox.style.transition = "margin-left 1s";
    //设置 ulBox标签为水平位置
    ulBox.style.marginLeft = step+"px";
}
//切换导航点
function setPoint(current){//形参
    //排他思想
    for(var i = 0 ; i< points.length ; i ++){
        //移除所有导航点的类名
        points[i].className = "";
    }
    //跟索引值对应的导航点添加类名
    points[current].className = "activity";
}
//定义自动轮播的函数
function autoPlay(){
    //设置索引值自增
    index ++;
    //不可以超出导航点最大的索引值 最大索引值是1
    //索引值是从0开始的
    if(index > points.length - 1 ){
        //重置索引值
        index = 0;
    }
    //设置ulBox标签的位置
    changeImage(-index*width);
    //设置导航点跟随轮播
    setPoint(index);
}
//调用定时器函数
timer = setInterval(autoPlay,2000);
//鼠标移入事件
loop.onmouseenter = function(){
    //停止定时器函数
    clearInterval(timer);
}
//鼠标移开事件
loop.onmouseleave = function(){
    //先清除定时器函数
    clearInterval(timer);
    //调用定时器函数
    timer = setInterval(autoPlay,2000);
}