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
        return window.localStorage.getItem(this.localStorageKey) == "true";
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