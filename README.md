# Canvan-for-Chart(数据展示)
   对日常开发工作的数据展示<br>
### 1、lineChart(折线图)
```javascript
    var data =[{
        x: //数据点X轴
        y: //数据点Y轴
        lineColor: // 折线的颜色
        title: // 折线的描述
    }]
    var eachr = new Ehart(data,'canvas');
        eachr.lineChar({
            rectH:10,//网格线的长度
            rectStyle:'#eee',//网格线的长度
            originW:2,//轴线的宽度
            originStyle:'#000',// 轴线颜色
            originX:10,//坐标原点X位置
            originY:590,//坐标原点Y位置
            axisX:780, // x轴的长度
            axisY:500, // y轴的长度
            arrowsW:5,//箭头的大小//
            toptile: '折线图dome' // 图的标题
        })
```
### 2、pieChart(圆饼图)
```javascript
var  data =[
        {
            'val':0.2,//比例
            'color':'red',//扇形颜色
            'title':'应届生'//
         }
    ];
    var ehacr = new Ehart(data,'canvas');
    ehacr.pieChart({
        centerX:280, // 中心横坐标
        centerY:280,//中心纵轴坐标
        radius:80, //半径
        beyondW:20, // 向外延伸的距离
        tipcW:130 ,// 位置下方的长
        font:"12px Arial", // 字体样式
        toptile: '饼状图dome' // 图的标题
    });
```
### 3、 Frame Animation(帧动画)
```javascript
    var  s =  new Sprite({
        x:300,//图片绘制的X轴方向
        y:300,//图片绘制的Y轴方向
         w:80,//背景图片绘制在画布的宽
         h:65*2,//景图片绘制在画布的高
        fps:10,//帧速
        originW:40,//背景图片的宽
        originH:65,//背景图片的高
        imgSrc:'./imgs/gameImgs/DMMban.png',//背景图片的地址
         dirIndex:0//背景图片方向
    });
    // 渲染函数
     s.render(ctx);//ctx:canvan上下文对象
     //方向（'top','right','bottom','left'）;
     s.changeDir(dir);
```
### 4、rectangle(矩形)
```javascript
 var  rectangleDome = new Rectangle({
        x:0 ,//绘制矩形X坐标
        y:0,//绘制矩形Y坐标
        w:50,//绘制矩形宽度
        h:50,//绘制矩形高度
        rotation:45,//旋转角度
        opacity:0.5,//透明度
        scaleX:2,//X方向放缩比例
        scaleY:2,//Y方向放缩比例
        strokeStyle :'#f00',// 边框的颜色
        fillStyle:'#eee' //填充颜色
    });
    rectangleDome.render(ctx);//ctx:canvan上下文对象
 ```