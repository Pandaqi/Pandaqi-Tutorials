/* Images <=> Fullscreen */
export default class Images {
    constructor(id = "overlay-image", sourceID = "overlay-image-src")
    {
        this.overlayImage = document.getElementById(id);
        this.overlayImageSource = document.getElementById(sourceID);
        this.setupEvents();
    }

    setupEvents()
    {
        if(!this.overlayImage) { return; }
        if(!this.overlayImageSource) { return; }

        const imgs = document.getElementsByTagName("img");
        for(const img of imgs)
        {
            if(img.classList.contains("no-click")) { continue; }

            img.addEventListener("click", (ev) => {
                const src = img.getAttribute("src");
                this.overlayImage.style.display = "flex";
                this.overlayImageSource.src = src;
                this.overlayImageSource.style.maxWidth = img.naturalWidth + "px";
                this.overlayImageSource.style.maxHeight = img.naturalHeight + "px";
            });
        }

        this.overlayImage.addEventListener("click", (ev) => {
            if(this.overlayImage.style.display != "flex") { return; }
            this.overlayImage.style.display = 'none';
        });
    }
}