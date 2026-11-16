import Daw from "./daw"
import AUDIO from "./audio"
import PLAYER from "./player"
import DOM from "./dom"

// initialize all DAW interfaces
async function initDawInterfaces()
{
    AUDIO.init();
    PLAYER.init();
    DOM.init();

    const daws = [];
    const dawNodes = Array.from(document.getElementsByClassName("pq-daw-wrapper")) as HTMLElement[];
    for(const node of dawNodes)
    {
        const newDaw = new Daw({ parent: node.parentElement, node: node });
        await newDaw.loadResources();
        daws.push(newDaw);
        node.remove(); // remove the original node used for setup (once the loop is done, it will be garbage collected)
    }

    // @ts-ignore => @DEBUGGING
    window.PQ_DAW = { daw: Daw, daws: daws };
}

// Never rely on the `load` event alone: this bundle is loaded asynchronously (and Cloudflare Rocket Loader
// defers every script until after `load`), in which case a `load` listener registered here would never fire.
if(document.readyState !== "loading") { initDawInterfaces(); }
else { document.addEventListener("DOMContentLoaded", initDawInterfaces, { once: true }); }
