export default class ThemeSwitcher
{
    constructor()
    {
        this.localStorageKey = "pandaqiTutorialsDarkMode";
        this.currentValue = this.readMode();

        const buttons = document.getElementsByClassName("darkModeBtn");
        for(const button of buttons)
        {
            button.addEventListener("click", (ev) => {
                this.toggleMode();
                window.location.reload();
            });
        }

        //document.documentElement.classList.add(this.getModeString());
        document.body.classList.add(this.getModeString());
    }

    toggleMode()
    {
        this.currentValue = !this.currentValue;
        window.localStorage.setItem(this.localStorageKey, this.currentValue);
    }

    readMode()
    {
        return window.localStorage.getItem(this.localStorageKey) == "true";
    }

    getModeString()
    {
        if(this.currentValue) { return "theme-dark"; }
        return "theme-light";
    }

}