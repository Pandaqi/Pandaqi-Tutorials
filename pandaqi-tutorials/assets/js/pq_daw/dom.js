import Slider from "./dom/slider"
import Shortcuts from "./dom/shortcuts"

// layer for interaction between data behind the scenes and the DOM/HTML
export default {

    init()
    {
        this.focusNode = null;
        Shortcuts.init();
    },

    isType(node, classInstance)
    {
        return node instanceof classInstance;
    },

    changeFocusTo(node)
    {
        this.releaseFocus(this.focusNode);
        this.addFocus(node);
    },

    addFocus(node)
    {
        this.focusNode = node;
        if(this.focusNode.node) { this.focusNode.node.classList.add("pq-daw-dom-focus"); }
        else { this.focusNode.classList.add("pq-daw-dom-focus"); }
    },

    releaseFocus(node)
    {
        if(!node) { return; }
        if(this.focusNode.node) { this.focusNode.node.classList.remove("pq-daw-dom-focus"); }
        else { this.focusNode.classList.remove("pq-daw-dom-focus"); }
    },
    
    setProperty(node, key, val)
    {
        node.dataset[key] = val;
    },

    setProperties(node, keys, vals)
    {
        for(let i = 0; i < keys.length; i++)
        {
            node.dataset[keys[i]] = vals[i];
        }
    },

    getProperty(node, key)
    {
        return node.dataset[key];
    },

    toggleButton(guiNode, ownerNode)
    {
        if(guiNode.dataset.toggled == "true") {
            guiNode.classList.remove("daw-btn-enabled");
            guiNode.dataset.toggled = "false";
            if(guiNode.innerHTML.toLowerCase() == "on") { guiNode.innerHTML = "Off"; }
        } else {
            guiNode.dataset.toggled = "true";
            guiNode.classList.add("daw-btn-enabled");
            if(guiNode.innerHTML.toLowerCase() == "off") { guiNode.innerHTML = "On"; }
        }

        // if it's a single-click button (no "on/off"), just click again
        if(guiNode.dataset.onetime == "true" && guiNode.dataset.toggled == "true")
        {
            this.toggleButton(guiNode, ownerNode);
        }
    },

    togglePlugin(plugin)
    {
        if(!plugin.isVisible()) { plugin.setVisible(true); }
        else { plugin.setVisible(false); }
    },

    addDefaults(params, defaults)
    {
        for(const key in defaults)
        {
            if(key in params) { continue; }
            params[key] = defaults[key]
        }
    },

    createEffectControlContainer(container, params)
    {
        const controlContainer = document.createElement("div");
        controlContainer.classList.add("effect-control-container");
        container.appendChild(controlContainer);

        const labelContainer = document.createElement("div");
        labelContainer.classList.add("label-container");
        controlContainer.appendChild(labelContainer);
        
        const label = document.createElement("label");
        label.innerHTML = params.text;
        label.for = params.name;
        labelContainer.appendChild(label);
        
        const display = document.createElement("span");
        display.classList.add('value-display');
        labelContainer.appendChild(display);

        return controlContainer;
    },

    createDropdown(owner, params)
    {
        const container = (params.cont) ? params.cont : owner;
        const defaults = { text: "Untitled", name: "untitled", callback: () => {}, keys: ["No options"], values: [""] };
        this.addDefaults(params, defaults);

        const controlContainer = this.createEffectControlContainer(container, params);
        controlContainer.classList.add("effect-subsection");

        const select = document.createElement("select");
        select.name = params.name;

        for(let i = 0; i < params.keys.length; i++)
        {
            const key = params.keys[i];
            const val = params.values[i];

            const option = document.createElement("option");
            option.value = val;
            option.innerHTML = key;
            select.appendChild(option);
        }
        controlContainer.appendChild(select);

        select.addEventListener("change", () => {
            const val = select[select.selectedIndex].value;
            this.setProperty(owner, params.name, val);
            params.callback.call(this, select, owner);
        });

        this.fakeSelectDropdown(select);
    },

    // @IMPROV: also put this into its own neat class + return that, like slider?
    createButton(owner, params)
    {
        const container = (params.cont) ? params.cont : owner;
        const defaults = { value: false, text: "Untitled", name: "untitled", callback: () => {} };
        this.addDefaults(params, defaults);

        const controlContainer = this.createEffectControlContainer(container, params);

        const btn = document.createElement("button");
        btn.innerHTML = "Off";
        controlContainer.appendChild(btn);
        this.connectButton(btn, owner, (guiNode, ownerNode) => { 
            this.setProperty(owner, params.name, guiNode.dataset.toggled);
            params.callback.call(this, guiNode, ownerNode);
        });

        if(params.value) { this.fakeClickButton(btn); }
    },

    createSlider(owner, params = {})
    {
        const container = (params.cont) ? params.cont : owner;
        const defaults = { min: 0, max: 100, step: 1, value: 0, text: "Untitled", name: "untitled", unit: "percentage" };
        this.addDefaults(params, defaults);

        const controlContainer = this.createEffectControlContainer(container, params);

        const inp = document.createElement("input");
        controlContainer.appendChild(inp);

        inp.type = "range";
        inp.min = params.min;
        inp.max = params.max;
        inp.step = params.step;
        inp.value = params.value;
        inp.name = params.name;
        inp.dataset.unit = params.unit;

        const nodes = {
            cont: controlContainer, 
            label: controlContainer.getElementsByTagName("label"), 
            display: controlContainer.getElementsByClassName("value-display")[0], 
            slider: inp, 
        }

        return new Slider(owner, nodes, params);
    },

    createEditableText(params)
    {
        const node = params.node;
        if(!node) { return; }

        const useCapture = params.useCapture || false;
        const callback = params.callback;

        node.addEventListener("click", () => this.changeFocusTo(node), useCapture);
        node.setAttribute("contentEditable", true);

        if(callback) { node.addEventListener("input", () => { callback(node) }); }
    },

    makeButtonSingleClick(btn)
    {
        btn.dataset.onetime = true;
    },

    fakeSelectDropdown(select)
    {
        var event = new Event('change', { bubbles: true, cancelable: false });
        select.dispatchEvent(event);
    },

    fakeSelectDropdownByIndex(select, idx)
    {
        const curIdx = select.selectedIndex;
        const nothingChanged = curIdx == idx;
        if(nothingChanged) { return; }
        select.selectedIndex = idx;
        this.fakeSelectDropdown(select);
    },

    fakeClickButton(btn)
    {
        var event = new Event('click', { bubbles: false, cancelable: false });
        btn.dispatchEvent(event);
    },

    fakeChangeSlider(slider, delta = 0)
    {
        slider.value = parseFloat(slider.value) + delta
        var event = new Event('input', { bubbles: true, cancelable: true });
        slider.dispatchEvent(event);
    },

    fakeSetSlider(slider, newVal = 0)
    {
        const curVal = parseFloat(slider.value);
        this.fakeChangeSlider(slider, newVal - curVal);
    },

    connectSlider(guiNode, ownerNode, callback)
    {
        guiNode.addEventListener("input", (ev) => { callback.call(this, guiNode, ownerNode) });
        this.fakeChangeSlider(guiNode); // immediately call it once to get correct initial values) 
    },

    connectButton(guiNode, ownerNode, callback)
    {
        guiNode.dataset.toggled = "false";
        guiNode.addEventListener("click", (ev) => { 
            this.toggleButton(guiNode, ownerNode);
            callback.call(this, guiNode, ownerNode) 
        });
    },

    connectPluginButton(guiNode, ownerNode, plugin)
    {
        guiNode.addEventListener("click", (ev) => { 
            this.toggleButton(guiNode, ownerNode);
            this.togglePlugin(plugin);
        });
    },
    
}