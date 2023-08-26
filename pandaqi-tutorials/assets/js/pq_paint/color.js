export default class Color
{
    constructor(r = 1.0, g = 1.0, b = 1.0, a = 1.0)
    {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    clone()
    {
        return new Color(this.r, this.g, this.b, this.a);
    }

    clamp(val)
    {
        return Math.min(Math.max(val, 0.0), 1.0);
    }

    toString()
    {
        return "rgba(" + this.r*255 + ", " + this.g*255 + ", " + this.b*255 + ", " + this.a + ")";
    }

    getChannel(channelName) { return this[channelName]; }
    setChannel(channelName, value)
    {
        this[channelName] = value;
    }

    setAlpha(a)
    {
        this.a = this.clamp(a);
    }

    distanceTo(otherColor)
    {
        const r = Math.abs(this.r - otherColor.r);
        const g = Math.abs(this.g - otherColor.g);
        const b = Math.abs(this.b - otherColor.b);
        const a = Math.abs(this.a - otherColor.a);
        return (r + g + b + a) / 4.0;
    }
}