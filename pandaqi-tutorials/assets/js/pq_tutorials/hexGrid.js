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
        const fontSize = window.getComputedStyle(document.body).getPropertyValue('font-size').slice(0,-2);
        const sizeOfOneEntry = fontSize * (8.0 + 0.5 + 0.5);
        const spaceLostPerRow = fontSize * 1.808;

        console.log(sizeOfOneEntry);

        for(const hexGrid of hexGrids)
        {
            if(!hexGrid.parentNode.classList.contains("summary-grid")) { continue; }

            const numEntries = parseInt(hexGrid.parentNode.dataset.count);
            
            // This calculates exactly how wide our grid will be, so we can properly center-align it
            const parentWidth = window.getComputedStyle(hexGrid.parentNode).getPropertyValue("width").slice(0, -2);
            const tightWidth = Math.min(numEntries, Math.floor(parentWidth / sizeOfOneEntry)) * sizeOfOneEntry;
            hexGrid.style.width = tightWidth + "px";

            // This calculates how many rows it will display, so we can compensate for margin lost at bottom
            // (To prevent overlapping objects or acres of empty space below the grid.)
            const width = window.getComputedStyle(hexGrid).getPropertyValue('width').slice(0,-2);
            const numEntriesPerRow = Math.floor(width / sizeOfOneEntry);
            const numRows = Math.ceil(numEntries / numEntriesPerRow); 
            const spaceLost = numRows * spaceLostPerRow;

            hexGrid.parentNode.style.marginBottom = spaceLost + "px";

            const breakpointHexToSquare = 350;
            if(parentWidth < breakpointHexToSquare)
            {
                hexGrid.style.width = "100%";
                hexGrid.parentNode.style.marginBottom = "2em";
            }

        }
    }
}