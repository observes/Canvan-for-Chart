;(function(window){
    //  图片动画
    var Sprite =function(opts){
        this._init(opts)
    };
    Sprite.prototype={
        //初始化参数
        _init:function(opts){
            //在画布什么位置绘制
            this.x =  opts.x ===0 ? opts.x : opts.x ||10;
            this.y = opts.y===0 ? opts.y : opts.y|| 10;
            //在canva 绘制的图片的大小
            this.w = opts.w ||40;
            this.h = opts.h ||65;
            //图片信息
            this._imgSrc = opts.imgSrc||'';
            //方向和速度
            this.fps = opts.fps||10;
            this.dirIndex = opts.dirIndex||0;
            //背景图片大小
            this.originW  = opts.originW|| 40;
            this.originH  = opts.originH|| 65;
        },
        //渲染方法
        /**
         * @param ctx  canvans 上下文对像
         */
        render:function(ctx){
            var _self  =this;
            var imgDom = new  Image();
            imgDom.src  =_self._imgSrc;
            imgDom.onload =  function(){
                var franeIdenx =0;
                setInterval(function(){
                    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
                    ctx.drawImage(
                        imgDom,
                        _self.originW*franeIdenx,
                        _self.originH*_self.dirIndex,
                        _self.originW,_self.originH,
                        _self.x,_self.y,
                        _self.w,_self.h
                    );
                    franeIdenx ++;
                    franeIdenx = franeIdenx%4;
                },1000/_self.fps);
            };
        },
        //    改变方向
        changeDir:function(dir){
            if(typeof dir !== 'string'){
                return;
            }
            var _dirNum= [0,2,3,1];
            var _dirStr= ['top','right','bottom','left'];
            this.dirIndex = _dirNum[ _dirStr.indexOf(dir)]
        }
    };
    window.Sprite = Sprite;
})(window);