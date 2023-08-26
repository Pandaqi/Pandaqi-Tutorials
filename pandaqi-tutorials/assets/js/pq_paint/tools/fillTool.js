import Point from "../point"

export default class FillTool
{
    constructor()
    {
        this.MAX_DIFFERENCE_FOR_FLOOD_FILL = 0.15;
        this.neighborOffsets = [
            new Point().setXY(1,0),
            new Point().setXY(0,1),
            new Point().setXY(-1,0),
            new Point().setXY(0,-1)
        ]
    }

    onDrawStart(params) {}
    onDrawProgress(params) {}
    onDrawEnd(params)
    {
        this.floodFill(params);
    }

    floodFill(params)
    {
        const pos = params.pos.clone().round();
        const canvas = params.pqPaint.getCanvas();
        const ctx = canvas.getContext();
        const canvasSize = canvas.getSize();
        const startingColor = canvas.readColorAt(pos);

        const pixelsToCheck = [pos];
        const pixelsFlooded = [];

        // save which pixels were already checked as a 2D array; 
        // WAY faster lookup (on large resolution canvases)
        const pixelsChecked = [];
        for(let x = 0; x < canvasSize.width; x++)
        {
            pixelsChecked[x] = [];
            for(let y = 0; y < canvasSize.height; y++)
            {
                pixelsChecked[x][y] = false;
            }
        }

        const imageData = ctx.getImageData(0, 0, canvasSize.width, canvasSize.height);
        
        // first, find all connected pixels with the same or similar colors
        while(pixelsToCheck.length > 0)
        {
            const pixel = pixelsToCheck.pop();
            pixelsChecked[pixel.x][pixel.y] = true;

            const color = this.getPixelRaw(imageData, pixel);
            const tooDissimilar = this.colorsTooFarApart(startingColor, color, this.MAX_DIFFERENCE_FOR_FLOOD_FILL);
            if(tooDissimilar) { continue; }

            pixelsFlooded.push(pixel);

            const nbs = this.getNeighbors(pixel, canvasSize);
            for(const nb of nbs)
            {
                const alreadyHandled = pixelsChecked[nb.x][nb.y];
                if(alreadyHandled) { continue; }
                pixelsToCheck.push(nb);
                pixelsChecked[nb.x][nb.y] = true;
            }
        }

        // second, actually fill all those pixels with the brush color
        const brush = params.pqPaint.getBrush();
        brush.fillPixelListRaw(imageData, pixelsFlooded);
        ctx.putImageData(imageData, 0, 0);
    }

    /*distColorToRawColor(color, raw)
    {
        const r = Math.abs(color.r - raw[0]);
        const g = Math.abs(color.g - raw[1]);
        const b = Math.abs(color.b - raw[2]);
        const a = Math.abs(color.a - raw[3]);
        return (r + g + b + a) / 4.0;
    }*/

    colorsTooFarApart(color, raw, t)
    {
        return Math.abs(color.r - raw[0]) > t || Math.abs(color.g - raw[1]) > t ||  Math.abs(color.b - raw[2]) > t;
    }

    getPixelRaw(imageData, point) 
    {
        const offset = (point.y * imageData.width + point.x) * 4;
        return imageData.data.slice(offset, offset + 4);
    }

    outOfBounds(pos, canvasSize)
    {
        return (pos.x < 0 || pos.y < 0) || (pos.x >= canvasSize.width || pos.y >= canvasSize.height);
    }

    getNeighbors(pixel, canvasSize)
    {
        const list = [];
        for(let i = 0; i < 4; i++)
        {
            const nbPos = pixel.clone();
            nbPos.move(this.neighborOffsets[i]);
            if(this.outOfBounds(nbPos, canvasSize)) { continue; }
            list.push(nbPos.round());
        }
        return list;
    }
}