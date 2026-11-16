import CodeBlock from "./codeblock"
import Lexer from "./lexer"

// @ts-ignore
if(!self.PQ_BAMBOO) { self.PQ_BAMBOO = {}; }
// @ts-ignore
self.PQ_BAMBOO.Lexer = Lexer;

// @SOURCE (very old version): original code inspired by https://codepen.io/brianmearns/pen/YVjZWw
function initBambooBlocks()
{
    // @ts-ignore
    const insideWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
    if(insideWebWorker) { return; }

    const bambooBlockNodes = Array.from(document.getElementsByClassName("pq-bamboo")) as HTMLElement[];
    const bambooBlocks : CodeBlock[] = [];

    for(const blockNode of bambooBlockNodes)
    {
        const block = new CodeBlock(blockNode);
        bambooBlocks.push(block);
    }

    // @ts-ignore => @DEBUGGING
    self.PQ_BAMBOO.codeBlocks = bambooBlocks;
}

// This same bundle is also loaded inside the web worker (through importScripts), where `document` does not exist,
// so nothing may touch `document` at the top level.
// Also: never rely on the `load` event alone. The bundle is loaded asynchronously (and Cloudflare Rocket Loader
// defers every script until after `load`), in which case a `load` listener registered here would never fire.
const documentUnavailable = (typeof document === "undefined");
if(!documentUnavailable && document.readyState !== "loading") { initBambooBlocks(); }
else { self.addEventListener("load", initBambooBlocks, { once: true }); }
