
;(function(window){
    var Rectangle = function(opts){
        this._init(opts)
    };
    Rectangle.prototype={
        _init:function(opts){
            this.x = opts.x ||0;
            this.y = opts.y || 0;
            this.w = opts.w ||0;
            this.h = opts.h || 0;
            this.rotation = opts.rotation || 0;
            this.opacity = opts.opacit==0 ? 0 : opts.opacit||1;
            this.scaleX = opts.scaleX ||1;
            this.scaleY  = opts.scaleY ||1;
            this.strokeStyle = opts.strokeStyle || '#eee';
            this.lineWidth = opts.lineWidth||1;
            this.fillStyle = opts.fillStyle || '#0ff';
        },
        render:function(ctx){
                ctx.save();
                ctx.beginPath();
                ctx.rotate(this.rotation*Math.PI/180);
                ctx.globalAlpha =this.opacity;
                ctx.scale(this.scaleX,this.scaleY);
                ctx.rect(this.x,this.y,this.w,this.h);
                ctx.fillStyle = this.fillStyle;
                ctx.fill();
                ctx.strokeStyle =this.strokeStyle;
                ctx.lineWidth = this.lineWidth;
                ctx.stroke();
                ctx.restore();
        }
    };
    window.Rectangle =Rectangle;
})(window);
