;(function(window){
    var CircleText =function (opts){
        this._init(opts)
    };
    CircleText.prototype={
        _init:function(opts){
            this.x =opts.x||0;
            this.y =opts.y||0;
            this.innerRadius =opts.innerRadius||0;
            this.outerRadius =opts.outerRadius||0;
            this.text =opts.text||'CircleText';
            this.innerStley= opts.innerStley||'#f00';
            this.outerStley= opts.outerStley||'#eee';
            this.fontSize = opts.fontSize||30;
            this.fontColor= opts.fontColor||'#fff';
            this.group = new Konva.Group({
                x:this.x,
                y:this.y
            });
            //    初始化一个内圈园
            var innnerCircle = new Konva.Circle({
                x:0,
                y:0,
                radius:this.innerRadius,
                fill:this.innerStley
            });
            this.group.add(innnerCircle);
        //    初始化一个圆环
            var outerRing = new Konva.Ring({
                x:0,
                y:0,
                innerRadius: this.innerRadius,
                outerRadius: this.outerRadius,
                fill:this.outerStley,
                opacity:.5
            });
            this.group.add(outerRing);
        //    初始化文字
            var text =new Konva.Text({
                x:0-this.innerRadius,
                y:0-this.fontSize/2,
                width:this.innerRadius*2,
                align:'center',
                text:this.text,
                fontSize: this.fontSize,
                fill:this.fontColor,
                fontFamily: 'Calibri',
                fontStyle:'bold'
            });
            this.group.add(text);
        },
        add:function(arg){
            arg.add(this.group);
        }
    };
    window.CircleText =CircleText;
})(window);
