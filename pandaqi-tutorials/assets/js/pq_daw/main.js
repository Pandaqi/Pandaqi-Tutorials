import Daw from "./daw"
import AUDIO from "./audio"
import PLAYER from "./player"
import DOM from "./dom"

// initialize all DAW interfaces
window.addEventListener('load', async function () {

    AUDIO.init();
    PLAYER.init();
    DOM.init();

    const daws = [];
    const dawNodes = document.getElementsByClassName("pq-daw-wrapper");
    for(const node of dawNodes)
    {
        const newDaw = new Daw({ parent: node.parentNode, node: node });
        await newDaw.loadResources();
        daws.push(newDaw);
        node.remove(); // remove the original node used for setup (once the loop is done, it will be garbage collected)
    }

    window.PQ_DAW = { 
        daw: Daw,
        daws: daws
    };
})
