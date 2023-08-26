import Point from "./point"
import Color from "./color"

export default class PaintCanvas
{
    constructor(pqPaint) 
    {
        this.pqPaint = pqPaint;
        this.drawing = false;
        this.lastDrawPos = null;
        this.canvasResolution = { width: 1280, height: 720 };
        this.drawBuffer = [];
        this.drawCanvas = null;

        this.MAX_DRAWS_PER_FRAME = 60.0;

        this.createCanvasElement();
        this.attachMouseEvents();
        this.onAnimationFrame();
    }

    getSize() { return this.canvasResolution; }
    getContext() { return this.ctx; }
    createCanvasElement()
    {
        const canv = document.createElement("canvas");
        canv.width = this.canvasResolution.width;
        canv.height = this.canvasResolution.height;
        canv.style.width = "100%";
        canv.classList.add("paint-canvas");

        this.pqPaint.getContainerNode().appendChild(canv);
        this.canvas = canv;
        this.ctx = this.canvas.getContext("2d", { willReadFrequently: true });
    }

    attachMouseEvents()
    {
        const canv = this.canvas;
        canv.addEventListener('mousedown', this.onDrawStart.bind(this), true);
        canv.addEventListener('touchstart', this.onDrawStart.bind(this), true);

        canv.addEventListener('mousemove', this.onDrawProgress.bind(this), true);
        canv.addEventListener('touchmove', this.onDrawProgress.bind(this), true);

        canv.addEventListener('mouseup', this.onDrawEnd.bind(this), true);
        canv.addEventListener('touchend', this.onDrawEnd.bind(this), true);

        canv.addEventListener('mouseleave', this.onDrawCancel.bind(this), true);
        canv.addEventListener('touchcancel', this.onDrawCancel.bind(this), true);
    }

    getPosFromEvent(ev)
    {
        if(!ev) { return this.lastDrawPos; }

        const p = new Point();
        const offset = this.canvas.getBoundingClientRect();
        p.move({ x: -offset.left, y: -offset.top });

        if(ev.type == 'touchstart' || ev.type == 'touchmove' || ev.type == 'touchend' || ev.type == 'touchcancel')
        {
            var evt = (typeof ev.originalEvent === 'undefined') ? ev : ev.originalEvent;
            var touch = evt.touches[0] || evt.changedTouches[0];
            p.move({ x: touch.clientX, y: touch.clientY });
        } else if (ev.type == 'mousedown' || ev.type == 'mouseup' || ev.type == 'mousemove' || ev.type == 'mouseover'|| ev.type == 'mouseout' || ev.type == 'mouseenter' || ev.type=='mouseleave' ) {
            p.move({ x: ev.clientX, y: ev.clientY });
        } 
        
        const finalPos = this.convertRealPosToCanvasPos(p);
        return finalPos;
    }

    collectToolParams(ev)
    {
        return {
            pos: this.getPosFromEvent(ev),
            lastDrawPos: this.lastDrawPos,
            pqPaint: this.pqPaint,
        }
    }

    onDrawStart(ev)
    {
        if(this.drawing) { return; }
        this.drawing = true;
        
        const pos = this.getPosFromEvent(ev);
        this.lastDrawPos = pos.clone();
        this.pqPaint.getTool().onDrawStart(this.collectToolParams(ev));
    }

    onDrawProgress(ev)
    {
        if(!this.drawing) { return; }

        const params = this.collectToolParams(ev);
        this.pqPaint.getTool().onDrawProgress(params);
        this.lastDrawPos = params.pos.clone();
    }

    onDrawEnd(ev)
    {
        if(!this.drawing) { return; }
        this.drawing = false;
        this.lastDrawPos = null;

        this.pqPaint.getTool().onDrawEnd(this.collectToolParams(ev));
    }

    onDrawCancel()
    {
        if(!this.drawing) { return; }
        this.onDrawEnd(null);
    }

    onAnimationFrame()
    {
        requestAnimationFrame(this.onAnimationFrame.bind(this));
        this.drawFromBuffer();
    }

    addToBuffer(val) { this.drawBuffer.push(val); }
    drawFromBuffer()
    {
        const numDraws = Math.min(this.drawBuffer.length, this.MAX_DRAWS_PER_FRAME);
        if(numDraws <= 0) { return; }

        for(let i = 0; i < numDraws; i++)
        {
            const drawObject = this.drawBuffer.pop();
            const pos = drawObject.pos;
            const canv = drawObject.canvas;
            const comp = drawObject.composite;
            this.ctx.globalCompositeOperation = comp; 
            this.ctx.drawImage(canv, pos.x, pos.y);
        }
    }

    convertRealPosToCanvasPos(realPos)
    {
        const displaySize = this.canvas.getBoundingClientRect();
        const underlyingSize = this.canvasResolution;

        const scaleVector = new Point().setXY(
            underlyingSize.width / displaySize.width,
            underlyingSize.height / displaySize.height
        );

        return realPos.clone().scale(scaleVector);
    }

    convertCanvasPosToRealPos(canvasPos)
    {
        const displaySize = this.canvas.getBoundingClientRect();
        const underlyingSize = this.canvasResolution;

        const scaleVector = new Point().setXY(
            displaySize.width / underlyingSize.width,
            displaySize.height / underlyingSize.height
        );

        return canvasPos.clone().scale(scaleVector);
    }

    readColorAt(canvasPos)
    {
        const rawColor = this.ctx.getImageData(canvasPos.x, canvasPos.y, 1, 1).data;
        const color = new Color(rawColor[0] / 255.0, rawColor[1] / 255.0, rawColor[2] / 255.0, rawColor[3] / 255.0)
        return color;
    }

}