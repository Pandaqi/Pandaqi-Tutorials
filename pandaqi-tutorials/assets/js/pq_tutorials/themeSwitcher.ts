export default class ThemeSwitcher
{
    localStorageKey: string;
    currentValue: boolean;
    themeNames: string[];

    constructor()
    {
        this.localStorageKey = "pandaqiTutorialsDarkMode";
        this.currentValue = this.readMode();
        this.themeNames = ["theme-light", "theme-dark"];

        const buttons : HTMLButtonElement[] = Array.from(document.getElementsByClassName("darkModeBtn"));
        for(const button of buttons)
        {
            button.addEventListener("click", (ev) => {
                this.toggleMode();
                window.location.reload();
            });
        }

        this.setModeOnBody();
    }

    toggleMode()
    {
        this.currentValue = !this.currentValue;
        window.localStorage.setItem(this.localStorageKey, this.currentValue + "");
    }

    readMode()
    {
        const stored = window.localStorage.getItem(this.localStorageKey);
        if(stored !== null) { return stored == "true"; }

        const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
        return !!prefersDark;
    }

    setModeOnBody()
    {
        for(const theme of this.themeNames)
        {
            if(!document.body.classList.contains(theme)) { continue; }
            document.body.classList.remove(theme);
        }
        document.body.classList.add(this.getModeString());
    }

    getModeString()
    {
        if(this.currentValue) { return "theme-dark"; }
        return "theme-light";
    }

}