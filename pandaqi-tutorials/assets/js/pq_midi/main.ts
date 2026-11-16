import Player from "./player"

// @ts-ignore
window.PQ_MIDI = {};

function initMidiPlayers()
{
    const players : Player[] = [];
    const midiPlayers = Array.from(document.getElementsByClassName("midi-player")) as HTMLElement[];
    for(let i = 0; i < midiPlayers.length; i++)
    {
        const midiPlayer = midiPlayers[i];
        players.push(new Player(i, midiPlayer));
    }

    // @ts-ignore => @DEBUGGING
    window.PQ_MIDI.players = players;
}

// Never rely on the `load` event alone: this bundle is loaded asynchronously (and Cloudflare Rocket Loader
// defers every script until after `load`), in which case a `load` listener registered here would never fire.
if(document.readyState !== "loading") { initMidiPlayers(); }
else { document.addEventListener("DOMContentLoaded", initMidiPlayers, { once: true }); }
