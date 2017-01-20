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
            x:300,
            y:300,
            w:80,
            h:65*2,
            fps:10,
            originW:40,
            originH:65,
            imgSrc:'./imgs/gameImgs/DMMban.png',
            dirIndex:0
    });
    // 渲染函数
     s.render(ctx);
     //方向（'top','right','bottom','left'）;
     s.changeDir(dir);
```
### 4、rectangle(矩形)
```javascript
 var  rectangleDome = new Rectangle({
        x:0 ,
        y:0,
        w:50,
        h:50,
        rotation:45,
         opacity:0.5,
        scaleX:2,
        scaleY:2,
        strokeStyle :'#f00',
        fillStyle:'#eee'
    });
    rectangleDome.render(ctx);
 ```