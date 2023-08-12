export default class HexGrid {
    constructor(className = "sub-container") 
    { 
        this.className = className;
        window.addEventListener('resize', this.resize.bind(this));
        this.resize();
    }

    resize()
    {
        const hexGrids = document.getElementsByClassName(this.className);

        for(const hexGrid of hexGrids)
        {
            if(!hexGrid.parentNode.classList.contains("summary-grid")) { continue; }
            
            const width = hexGrid.getBoundingClientRect().width;
            if(width <= 249.99) {
                hexGrid.parentNode.style.marginBottom = "1.0em";
                return;
            }
    
            const height = hexGrid.getBoundingClientRect().height;
            hexGrid.parentNode.style.marginBottom = 0.67*height + "px";
        }
    }
}