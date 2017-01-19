# Canvan-for-Chart(数据展示)
   对日常开发工作的数据展示<br>
### lineChart(折线图)
{ {{
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

 }} }
