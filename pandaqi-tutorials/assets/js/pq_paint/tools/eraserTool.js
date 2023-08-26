export default class EraserTool
{
    constructor()
    {
        this.drawCanvas = null;
    }

    onDrawStart(params)
    {
        this.drawCanvas = params.pqPaint.getBrush().getImage();
        this.drawAt(params);
    }

    onDrawProgress(params)
    {
        this.drawAt(params);
    }

    onDrawEnd(params)
    {
        this.drawCanvas = null;
    }

    drawAt(params)
    {
        const canvas = params.pqPaint.getCanvas();
        const pointList = params.pqPaint.getBrush().getInterpolatedPointList(params);
        for(const point of pointList)
        {
            canvas.addToBuffer({ canvas: this.drawCanvas, pos: point, composite: "destination-out" });
        }
    }
}