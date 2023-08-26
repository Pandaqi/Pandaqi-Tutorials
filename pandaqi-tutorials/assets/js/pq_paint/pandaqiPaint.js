import Brush from "./brush"
import PaintCanvas from "./paintCanvas"
import PaintInterface from "./paintInterface"

import BrushTool from "./tools/brushTool"
import EraserTool from "./tools/eraserTool"
import PickerTool from "./tools/pickerTool"
import FillTool from "./tools/fillTool"

export default class PandaqiPaint
{
    constructor(node)
    {
        this.node = node;
        this.brush = new Brush();
        this.tools = {
            "brush": new BrushTool(),
            "eraser": new EraserTool(),
            "picker": new PickerTool(),
            "fill": new FillTool()
        }

        this.createCanvas();
        this.createInterface();
    }

    getContainerNode()
    {
        return this.node;
    }

    getBrush()
    {
        return this.brush;
    }

    getToolDictionary() { return this.tools; }
    getTool()
    {
        return this.tools[this.interface.getToolSelected()];
    }

    getCanvas() { return this.canvas; }
    createCanvas()
    {
        this.canvas = new PaintCanvas(this);
    }

    getInterface() { return this.interface; }
    createInterface()
    {
        this.interface = new PaintInterface(this);
    }
}