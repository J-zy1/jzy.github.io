// window.onload = function(){

// }
// 获取相关元素
var startbtn = document.getElementById("start");
var stopbtn = document.getElementById("stop");
var refreshbtn = document.getElementById("refresh");
var resetbtn = document.getElementById("reset");
//console.log(startbtn,stopbtn,refreshbtn,resetbtn);//检查变量有没有值

var map = document.getElementById("map");
var score = document.getElementsByClassName("score")[0];//HTMLCollect[div.scro]
//console.log(map,score);

//定义变量记录地图的数据
//地图的宽度
var width = 600;
//地图的高度
var height = 600;
//多少行
var row = 20;
//多少列
var col = 20;

//每一个方块的宽度
var w = width / col - 2;
//每一个方块的高度
var h = width / row - 2;

console.log({w:w,h:h});

//定义一个数组(大数组)
var elements = [];
//循环语句创建行
for(var i = 0 ; i < row ; i ++ ){
    //创建ul标签（行）
    var ulCreate = document.createElement("ul");
    //设置ul的高度
    ulCreate.style.height = (h+2)+"px";
    //创建小数组
    var arrRow = [];
    //循环创建li标签
    for(var j = 0 ; j < col ; j ++ ){
        var liCreate = document.createElement("li");
        //设置标签大小
        liCreate.style.width = w+"px";
        liCreate.style.height = h+"px";
        //添加到ul标签
        ulCreate.appendChild(liCreate);
        //把创建的li添加到小数组
        arrRow.push(liCreate);
    }
    //把ul添加到map
    map.appendChild(ulCreate);
    //把小数组添加到大数组
    elements.push(arrRow);
}
//console.log(elements);
//定义蛇
var snakeBody = [];


for(var k = 0 ; k < 3 ; k ++ ){
    //element[0][0]
    //element[0][1]
    //element[0][2]
    //设置代表蛇的方块
    elements[0][k].className="snake";
    //记录代表蛇的li标签
    snakeBody.push(elements[0][k]);
}

//定义蛇2
var snakeBody2 = [];

for(var k = 0 ; k < 3 ; k ++ ){
    //element[row][0]
    //element[row][1]
    //element[row][2]
    //设置代表蛇的方块
    elements[10][k].className="snake2";
    //记录代表蛇的li标签
    snakeBody2.push(elements[10][k]);
    console.log(snakeBody2);
}

//console.log(snakeBody);

//定义一个生成随机数的方法
function randomFunc(min,max){
    //返回一个随机整数
    return Math.round(Math.random()*(max-min)+min);
}
//绘制石头
    //定义石头数组
    // var nrock = [];
function createRock(){
    //定义石头的坐标
    rockX = randomFunc(0, col-1);
    rockY = randomFunc(0 , row-1);
    console.log({rockX:rockX,rockY:rockY});
    // 判断创建的石头坐标是否在蛇的身体上
    if(elements[rockY][rockX].className == "snake"||elements[rockY][rockX].className=="food"||elements[rockY][rockX].className == "snake2"){
        //重新创建石头的坐标
        createRock();
    }else{
        //设置石头的方块背景色
        elements[rockY][rockX].className = "rock";
        // nrock.push(elements[rockY][rockX])
    }
}
//绘制食物
function createFood(){
    //食物的横轴坐标
    foodX = randomFunc(0, col-1);
    foodY = randomFunc(0 , row-1);
    console.log({foodX:foodX,foodY:foodY});
    // 判断创建的食物坐标是否在蛇的身体上
    if(elements[foodY][foodX].className == "snake"||elements[foodY][foodX].className == "rock"||elements[rockY][rockX].className == "snake2"){
        //重新创建食物的坐标
        createFood();
    }else{
        //设置食物的方块背景色
        elements[foodY][foodX].className = "food";
    }
}
createRock();
createFood();

//定义蛇移动的方向
var direction = "right";
var direction2 = "right";
//定义蛇移动的坐标
var x = 2;
var y = 0;
var x1 = 2;
var y1 = 10;
//定义定时器变量
var timer = null
//定义布尔型变量 判断是否改变方向
isChange = false;
isChange2 = false;
//定义分数
var count = 0;
//键盘按下事件
document.onkeydown = function(event){
    //判断如果布尔值等于true
    if(isChange){
        //终止代码
        return;
    }
    //获取键值码 下==40 上==38 右==39 左==37
    var keyCode = event.keyCode;
    // console.log({keyCode:keyCode});
    //判断按下了哪个按键
    //如果蛇往右边移动，禁止按下“向左”
    if(direction=="right" && keyCode == 37){
        return;
    }
    if(direction=="left" && keyCode == 39){
        return;
    }
    if(direction=="down" && keyCode == 38){
        return;
    }
    if(direction=="up" && keyCode == 34){
        return;
    }
    //w87 a65 s83 d68
    if(direction2=="right" && keyCode == 65){
        return;
    }
    if(direction2=="left" && keyCode == 68){
        return;
    }
    if(direction2=="down" && keyCode == 87){
        return;
    }
    if(direction2=="up" && keyCode == 83){
        return;
    }
    //给direction赋值
    //按下向右
    if(keyCode == 39){
        direction = "right";
        //设置isChange为true
        isChange = true;
    }
      //按下向左
      if(keyCode == 37){
        direction = "left";
        isChange = true;
    }
      //按下向下
      if(keyCode == 40){
        direction = "down";
        isChange = true;
    }
      //按下向上
      if(keyCode == 38){
        direction = "up";
        isChange = true;
    }

    //给direction赋值
    //w87 a65 s83 d68
    //按下向右
    if(keyCode == 68){
        direction2 = "right";
        //设置isChange为true
        isChange2 = true;
    }
      //按下向左
      if(keyCode == 65){
        direction2 = "left";
        isChange2 = true;
    }
      //按下向下
      if(keyCode == 83){
        direction2 = "down";
        isChange2 = true;
    }
      //按下向上
      if(keyCode == 87){
        direction2 = "up";
        isChange2 = true;
    }

    //蛇移动方向
    console.log(direction);
    console.log(direction2);
    //延迟函数
    setTimeout(function(){
        //延迟300毫秒
        isChange = false;
        ischange2 = false;
    },0)
    
}
//定义蛇移动的函数
function move(){
    //控制流语句
    switch(direction){
        case "right":
            x++;
            break;
        case "left":
            x --;
            break;
        case "down":
            y ++;
            break;
        case "up":
            y --;
            break;
    }
    switch(direction2){
        case "right":
            x1++;
            break;
        case "left":
            x1 --;
            break;
        case "down":
            y1 ++;
            break;
        case "up":
            y1 --;
            break;
    }
    //改变x和y的值
    //console.log({x:x,y:y})
    //测试
    // elements[y][x].className = "snake";
    //判断蛇是否超出地图
    if(x > col-1 || x < 0 || y > row-1 || y < 0){
        //提示
        alert("1 DIE");
        
        //停止定时器函数
        clearInterval(timer);
        //终止代码
        window.location.reload();
        return;
    }
    if(x1 > col-1 || x1 < 0 || y1 > row-1 || y1 < 0){
        //提示
        alert("2 DIE");
        
        //停止定时器函数
        clearInterval(timer);
        //终止代码
        window.location.reload();
        return;
    }



    //判断蛇的头部(elements[y][x])和蛇身体部分发生碰撞的时候
    //循环snakeBody数组
    for(var i=0;i<snakeBody.length;i++){
        //
        if(elements[y][x] == snakeBody[i]||elements[y][x] == snakeBody2[i]){
            //提示
            alert("1 头爆炸了");
            //停止定时器函数
            clearInterval(timer);
            //终止代码
            window.location.reload();
            return;
        }
    }

    for(var i=0;i<snakeBody.length;i++){
        //
        if(elements[y1][x1] == snakeBody2[i]||elements[y1][x1] == snakeBody[i]){
            //提示
            alert("2 头爆炸了");
            //停止定时器函数
            clearInterval(timer);
            //终止代码
            window.location.reload();
            return;
        }
    }
    


    //处理蛇的移动逻辑
    //foodX foodY
    //x y
    if(x == foodX && y == foodY){
        //设置elements[y][x]标签为蛇
        elements[y][x].className="snake";
        //把食物添加到蛇数组
        snakeBody.push(elements[y][x]);
        //重新创建食物
        createFood();
        // 分数
        //吃到食物记录一分
        count ++;
        //渲染分数
        score.children[0].innerText = count;
    }else if(x==rockX && y==rockY){
        //设置elements[y][x]标签为蛇
        elements[y][x].className="snake";
        //把石头添加到蛇数组
        snakeBody.push(elements[y][x]);
        //移除蛇数组第一个元素的背景
        snakeBody[0].className = "";
        //重新创建石头
        createRock();
        //吃到石头减一分
        count --;
        //渲染分数
        score.children[0].innerText = count;
    }else{
        //移除蛇数组第一个元素的背景
        snakeBody[0].className = "";
        //删除蛇数组的第一个元素
        snakeBody.shift();
        // elements[y][x]添加到蛇数组
        snakeBody.push(elements[y][x]);
        //设置 elements[y][x]背景色
        elements[y][x].className = "snake";
    }
    if(x1 == foodX && y1 == foodY){
        //设置elements[y][x]标签为蛇
        elements[y1][x1].className="snake2";
        //把食物添加到蛇数组
        snakeBody2.push(elements[y1][x1]);
        //重新创建食物
        createFood();
        // 分数
        //吃到食物记录一分
        count ++;
        //渲染分数
        score.children[0].innerText = count;
    }else if(x1==rockX && y1==rockY){
        //设置elements[y][x]标签为蛇
        elements[y1][x1].className="snake2";
        //把石头添加到蛇数组
        snakeBody2.push(elements[y1][x1]);
        //移除蛇数组第一个元素的背景
        snakeBody2[0].className = "";
        //重新创建石头
        createRock();
        //吃到石头减一分
        count --;
        //渲染分数
        score.children[0].innerText = count;
    }else{
        //移除蛇数组第一个元素的背景
        snakeBody2[0].className = "";
        //删除蛇数组的第一个元素
        snakeBody2.shift();
        // elements[y][x]添加到蛇数组
        snakeBody2.push(elements[y1][x1]);
        //设置 elements[y][x]背景色
        elements[y1][x1].className = "snake2";
    }
}
//move();
//测试：执行定时器函数
//time = setInterval(move , 200);

//绑定点击事件 游戏开始、暂停、刷新、重置
//开始
startbtn.onclick = function(){
    //清除定时器
    clearInterval(timer);
    //执行定时器函数
    timer = setInterval(move,200);
    startbtn.className="activity";
    stopbtn.className="";
}
//暂停
stopbtn.onclick = function(){
    //清除定时器函数
    clearInterval(timer);
    stopbtn.className="activity";
    startbtn.className="";
}
//刷新
refreshbtn.onclick = function(){
    //刷新页面api
    window.location.reload();
}
//重置
resetbtn.onclick = function(){
    
    window.location.reload();
    //....自定义
}