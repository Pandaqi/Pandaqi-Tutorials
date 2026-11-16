import PandaqiPaint from "./pandaqiPaint"

function initPaintNodes()
{
    const pqPaints : PandaqiPaint[] = [];
    const pqPaintNodes = Array.from(document.getElementsByClassName("pandaqi-paint")) as HTMLElement[];

    for(const pqPaintNode of pqPaintNodes)
    {
        pqPaints.push(new PandaqiPaint(pqPaintNode));
    }

    // @ts-ignore
    window.PQ_PAINT = {
        nodes: pqPaints
    };
}

// Never rely on the `load` event alone: this bundle is loaded asynchronously (and Cloudflare Rocket Loader
// defers every script until after `load`), in which case a `load` listener registered here would never fire.
if(document.readyState !== "loading") { initPaintNodes(); }
else { document.addEventListener("DOMContentLoaded", initPaintNodes, { once: true }); }
