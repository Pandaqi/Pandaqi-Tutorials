import Color from "./color"
import Point from "./point"

export default class Brush
{
    constructor()
    {
        this.radius = 24;
        this.hardness = 0.0;
        this.channelOrder = ["r", "g", "b", "a"];
        this.opacity = 1.0;
        this.color = new Color(1, 0, 0);
    }

    getAlphaFalloff(centerPoint)
    {
        const distToCenter = Math.sqrt(Math.pow(centerPoint.x - this.radius, 2) + Math.pow(centerPoint.y - this.radius, 2));
        const distToCenterUnit = distToCenter / this.radius;
        if(distToCenterUnit < 0.0 || distToCenterUnit > 1.0) { return -1; }

        const alphaAtCenter = this.opacity;
        const alphaAtEdge = this.hardness;
        const alpha = alphaAtCenter + distToCenterUnit * (alphaAtEdge - alphaAtCenter);
        return alpha;
    }

    getImage()
    {
        const canv = document.createElement("canvas");
        canv.width = this.radius*2;
        canv.height = this.radius*2;
        
        const ctx = canv.getContext("2d");

        for(let x = 0; x < this.radius*2; x++)
        {
            for(let y = 0; y < this.radius*2; y++)
            {
                const p = new Point().setXY(x,y);
                const alpha = this.getAlphaFalloff(p);
                const dontDraw = alpha < 0;
                if(dontDraw) { continue; }

                const c = this.color.clone();
                c.setAlpha(alpha);
                this.setCanvasPixel(ctx, p, c);
            }
        }

        return canv;
    }

    getImageData(ctx)
    {
        const imageData = ctx.createImageData(this.radius*2, this.radius*2);
        
        for(let x = 0; x < this.radius*2; x++)
        {
            for(let y = 0; y < this.radius*2; y++)
            {
                const p = new Point().setXY(x,y);
                const id = this.getPixelID(imageData, p);
                const alpha = this.getAlphaFalloff(p);

                const c = this.color.clone();
                c.setAlpha(alpha);
                this.setRawPixel(imageData, id, c);
            }
        }

        return imageData
    }

    getOpacity() { return this.opacity; }
    setOpacity(o)
    {
        this.opacity = o;
    }

    getHardness() { return this.hardness; }
    setHardness(h)
    {
        this.hardness = h;
    }

    getSize() { return this.radius; }
    setSize(s)
    {
        this.radius = s;
    }

    getColor() { return this.color; }
    getColorWithOpacity() { const c = this.color.clone(); c.setAlpha(this.opacity); return c; }
    setColor(c) { this.color = c; }

    getColorChannel(channelName) { return this.color.getChannel(channelName); }
    setColorChannel(channelName, value)
    {
        this.color.setChannel(channelName, value);
    }

    fillPixelListRaw(imageData, pixelList)
    {
        const color = this.getColorWithOpacity();
        for(const pixel of pixelList)
        {
            const id = this.getPixelID(imageData, pixel);
            this.setRawPixel(imageData, id, color);
        }
    }

    setCanvasPixel(context, point, color)
    {
        context.fillStyle = color.toString();
        context.fillRect(point.x, point.y, 1, 1);
    }

    setRawPixel(imageData, id, color)
    {
        this.setPixelChannel(imageData, id, "r", color.r);
        this.setPixelChannel(imageData, id, "g", color.g);
        this.setPixelChannel(imageData, id, "b", color.b);
        this.setPixelChannel(imageData, id, "a", color.a);

        /*imageData.data[offset + 0] = color.r;
        imageData.data[offset + 1] = color.g;
        imageData.data[offset + 2] = color.b;
        imageData.data[offset + 3] = color.a;*/
    }

    setPixelChannel(imageData, id, channelName, value)
    {
        const tempID = id + this.channelOrder.indexOf(channelName);
        imageData.data[tempID] = Math.round(value * 255);
    }
    
    getNumChannels()
    {
        return this.channelOrder.length;
    }

    getPixelID(imageData, point)
    {
        return (point.y * imageData.width + point.x) * this.getNumChannels();
    }

    offsetPointForDrawing(p)
    {
        return p.clone().move(new Point().setXY(-this.radius, -this.radius));
    }

    getIdealDrawInterpolationSize()
    {
        return Math.max(Math.round(this.radius * 0.1), 1);
    }

    getInterpolatedPointList(params)
    {
        const lastDrawPos = params.lastDrawPos;
        const pos = params.pos;
        let vec = lastDrawPos.clone().vecTo(pos);

        const stepSize = this.getIdealDrawInterpolationSize();
        const vecNorm = vec.clone().normalize().scaleFactor(stepSize);
        const rawDist = vec.length();
        let vecDist = Math.ceil(rawDist / stepSize);

        // @TODO: use the registerPoint properly again
        const registerPoint = (rawDist >= stepSize);
        if(!registerPoint) { vecDist = 0; }
        
        const list = [];
        let blendPos = lastDrawPos.clone();

        for(let i = 0; i < vecDist; i++)
        {
            blendPos.move(vecNorm);
            
            const lastPoint = i == (vecDist - 1);
            if(lastPoint) { blendPos = pos; }

            const drawPosCentered = this.offsetPointForDrawing(blendPos);
            list.push(drawPosCentered);
        }

        return list;
    }
}