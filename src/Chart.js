
;(function(window){
    /**
     * @param data 数据参数  (Array)
     * @param canvasId  画布id （string）
     */
    var  Chart =function(data,canvasId){
        if(!document.getElementById(canvasId)){
            throw  new Error('canvasId is error');
        }
        if(!(data instanceof Array)){
            throw  new Error('data is not Array');
        }
        this.data =data;
        this.canvas =document.getElementById(canvasId);
    };
    /*折线图*/
    Chart.prototype.lineChar =function(opts){
        var _self=this;
        var canvas = _self.canvas;
        var data = _self.data;
        var ctx = _self.canvas.getContext('2d');
        //    矩形绘制
        ctx.beginPath();
        ctx.lineWidth=0.5;
        ctx.strokeStyle= opts.rectStyle;
        for(var i = 0,len= canvas.width/opts.rectH;i<len;i++){
//        横线
            ctx.moveTo(0,i*opts.rectH);
            ctx.lineTo(canvas.width,i*opts.rectH);
//        竖线
            ctx.moveTo(i*opts.rectH,0);
            ctx.lineTo(i*opts.rectH,canvas.height);
        }
        ctx.stroke();
        //    横轴
        ctx.beginPath();
        ctx.lineWidth=opts.originW;
        ctx.strokeStyle= opts.originStyle;
        ctx.moveTo(opts.originX,opts.originY);
        ctx.lineTo(opts.originX+opts.axisX,opts.originY);
        ctx.lineTo(opts.originX+opts.axisX-opts.arrowsW,opts.originY-opts.arrowsW);
        ctx.lineTo(opts.originX+opts.axisX,opts.originY);
        ctx.lineTo(opts.originX+opts.axisX-opts.arrowsW,opts.originY+opts.arrowsW);
        //   纵轴
        ctx.moveTo(opts.originX,opts.originY);
        ctx.lineTo(opts.originX,opts.originY-opts.axisY);
        ctx.lineTo(opts.originX+opts.arrowsW,opts.originY-opts.axisY+opts.arrowsW);
        ctx.lineTo(opts.originX,opts.originY-opts.axisY);
        ctx.lineTo(opts.originX-opts.arrowsW,opts.originY-opts.axisY+opts.arrowsW);
        ctx.stroke();
        //图的标题绘制
        ctx.beginPath();
        ctx.font="normal normal bold 40px arial";
        ctx.textAlign='center';
        ctx.fillText(opts.toptile,canvas.width/2,50);
        //折线图
        for(var j =0;j<data.length-1;j++){
            ctx.beginPath();
            ctx.strokeStyle= data[j+1].lineColor;
            ctx.moveTo(opts.originX+data[j].x,opts.originY-data[j].y);
            ctx.lineTo(opts.originX+data[j+1].x,opts.originY-data[j+1].y);
            ctx.stroke();
            //  图例
            ctx.beginPath();
            ctx.fillStyle = data[j+1].lineColor;
            ctx.fillRect(canvas.width-50,40*(j+1),30,10);
            ctx.font="8px Arial";
            ctx.fillText(data[j].title,canvas.width-95,40*(j+1)+10);
        }
    };
    /*饼状图*/
    Chart.prototype.pieChart =function(opts){
        var _self=this;
        var canvas = _self.canvas;
        var data = _self.data;
        var ctx = _self.canvas.getContext('2d');
        var tempAngle = -90;
        for(var i =0,len= data.length;i<len;i++){
             //扇形绘制
            ctx.beginPath();
            var angle = data[i].val*360;
            var  startAngle =  tempAngle*Math.PI/180;
            var endAngle  = (tempAngle+angle)*Math.PI/180;
            ctx.fillStyle=data[i].color;
            ctx.moveTo(opts.centerX,opts.centerY);
            ctx.arc(opts.centerX,opts.centerY,opts.radius,startAngle,endAngle,false);
            ctx.fill();
            tempAngle +=angle;
            var averageAngle =tempAngle-angle/2;
//            文字显示
            var beyondW = opts.beyondW;
            ctx.beginPath();
            ctx.lineWidth=1;
            ctx.strokeStyle=data[i].color;
            var averageX =(opts.radius+beyondW) *Math.cos(averageAngle*Math.PI/180)+opts.centerX;
            var averageY =(opts.radius+beyondW) *Math.sin(averageAngle*Math.PI/180)+opts.centerY;
            ctx.moveTo(opts.centerX,opts.centerY);
            ctx.lineTo(averageX,averageY);
            ctx.textAlign='left';
            ctx.font= opts.font;
            if((tempAngle-angle/2)>-90 && (tempAngle-angle/2)<90){
                ctx.lineTo(averageX+opts.tipcW ,averageY);
                ctx.fillText(data[i].title+'  百分比：'+data[i].val*100+'%',averageX ,averageY-5);
            }else {
                ctx.lineTo(averageX-opts.tipcW ,averageY);
                ctx.fillText(data[i].title+'  百分比：'+data[i].val*100+'%',averageX-opts.tipcW ,averageY-5);
            }
            ctx.stroke();
            // 图例显示
            ctx.beginPath();
            ctx.fillStyle = data[i].color;
            ctx.fillRect(100*(i+1),canvas.height-100,30,10);
            ctx.font="8px Arial";
            ctx.textAlign='center';
            ctx.fillText(data[i].title,100*(i+1)+15,canvas.height-105);
        }
        //图的标题绘制
        ctx.beginPath();
        ctx.font="normal normal bold 40px arial";
        ctx.textAlign='center';
        ctx.fillStyle = '#000';
        ctx.fillText(opts.toptile,canvas.width/2,50);
    };
    window.Chart = Chart;
})(window);


