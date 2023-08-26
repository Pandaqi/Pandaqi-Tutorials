export default class PaintInterface
{
    constructor(pqPaint)
    {
        this.pqPaint = pqPaint;
        this.tool = null;
        this.toolEnum = ["brush", "eraser", "picker", "fill"];
        this.createHTML();
    }

    createHTML()
    {
        const cont = document.createElement("div");
        cont.classList.add("paint-interface");
        this.pqPaint.getContainerNode().appendChild(cont);
        this.node = cont;

        this.createToolSet();
        this.createColorPicker();
        this.createBrushProperties();
    }

    createToolSet()
    {
        const cont = document.createElement("div");
        cont.classList.add("tool-set");
        this.node.appendChild(cont);

        const toolsList = Object.keys(this.pqPaint.getToolDictionary());

        const params = {
            node: cont,
            values: toolsList,
            valueDefault: toolsList[0],
            callback: (val) => { this.setTool(val); }
        }

        this.createRadioButtons(params);
    }

    getToolSelected() { return this.tool; }
    setTool(toolName)
    {
        this.tool = toolName;
        console.log("TOOL IS ", this.tool);
    }

    createColorPicker()
    {
        const cont = document.createElement("div");
        cont.classList.add("color-picker");
        this.node.appendChild(cont);

        const preview = document.createElement("div");
        preview.classList.add("color-preview");
        preview.style.height = "50px";
        cont.appendChild(preview);
        this.colorPreview = preview;

        const params = {
            node: cont,
            label: "Red",
            value: this.pqPaint.getBrush().getColorChannel("r"),
            callback: (val) => { this.pqPaint.getBrush().setColorChannel("r", val); this.updateColorPreview(); }
        }
        this.createSlider(params);

        params.label = "Green";
        params.value = this.pqPaint.getBrush().getColorChannel("g");
        params.callback = (val) => { this.pqPaint.getBrush().setColorChannel("g", val); this.updateColorPreview(); }
        this.createSlider(params);

        params.label = "Blue";
        params.value = this.pqPaint.getBrush().getColorChannel("b");
        params.callback = (val) => { this.pqPaint.getBrush().setColorChannel("b", val); this.updateColorPreview(); }
        this.createSlider(params);
    }

    // @TODO: might want to do this via signals. (When color changes, pqPain emits "colorChanged" event, stuff like that)
    updateColorPreview()
    {
        const brush = this.pqPaint.getBrush();
        const color = brush.getColor().clone();
        color.setAlpha(this.pqPaint.getBrush().getOpacity());
        this.colorPreview.style.backgroundColor = color.toString();
    }

    createBrushProperties()
    {
        const cont = document.createElement("div");
        cont.classList.add("brush-properties");
        this.node.appendChild(cont);

        const params = {
            node: cont,
            label: "Opacity",
            value: this.pqPaint.getBrush().getOpacity(),
            callback: (val) => { this.pqPaint.getBrush().setOpacity(val); this.updateColorPreview(); }
        }
        this.createSlider(params);

        params.label = "Hardness";
        params.value = this.pqPaint.getBrush().getHardness();
        params.callback = (val) => { this.pqPaint.getBrush().setHardness(val); }
        this.createSlider(params);

        params.label = "Size";
        params.callback = (val) => { this.pqPaint.getBrush().setSize(val); }
        params.min = 1;
        params.max = 256;
        params.step = 1;
        params.value = this.pqPaint.getBrush().getSize();
        this.createSlider(params);
    }

    createSlider(params = {})
    {
        const parent = params.node || this.node;
        
        const cont = document.createElement("div");
        parent.appendChild(cont);
        cont.classList.add("slider-input");

        const label = document.createElement("label");
        cont.appendChild(label);
        label.innerHTML = params.label || "Label";

        const inp = document.createElement("input");
        cont.appendChild(inp);
        inp.type = "range";
        inp.min = params.min ?? 0;
        inp.max = params.max ?? 1;
        inp.step = params.step || 0.05;

        const avgValue = 0.5*(parseFloat(inp.min) + parseFloat(inp.max));
        inp.value = params.value ?? avgValue;

        const emptyCallback = (val) => {};
        const callback = params.callback || emptyCallback;
        inp.addEventListener("input", (ev) => {
            callback(parseFloat(inp.value));
        });

        const fakeEvent = new Event("input");
        inp.dispatchEvent(fakeEvent);
    }

    createRadioButtons(params)
    {
        const values = params.values;
        const buttons = [];
        params.nodes = buttons;

        const valueDefault = params.valueDefault ?? values[0]; 
        let indexDefault = -1;

        for(let i = 0; i < values.length; i++)
        {
            const v = values[i];
            params.value = v;
            buttons.push( this.createRadioButton(params) );
            if(v == valueDefault) { indexDefault = i; }
        }

        const defaultOption = buttons[indexDefault];
        this.fakeClickButton(defaultOption); 
    }

    createRadioButton(params)
    {
        const parent = params.node || this.node;
        const value = params.value;

        const btn = document.createElement("button");
        btn.innerHTML = value;
        parent.appendChild(btn);

        btn.addEventListener("click", (ev) => {

            this.changeRadioButton(btn, true);
            for(const otherNode of params.nodes)
            {
                this.changeRadioButton(otherNode, false);
            }

            params.callback(value);
        })

        return btn;
    }

    // @TODO: proper styles for this
    changeRadioButton(node, toggled)
    {
        node.style.opacity = 1.0;
        if(toggled) { node.style.opacity = 0.5; }
    }

    fakeClickButton(node)
    {
        const fakeEvent = new Event("click");
        node.dispatchEvent(fakeEvent);
    }
}