import FontLoader from "./fonts"
import HexGrid from "./hexGrid"
import Images from "./images"
import Navigation from "./navigation"
import Quiz from "./quiz"
import ThemeSwitcher from "./themeSwitcher"

const fonts = new FontLoader();
fonts.load();

const hexGrid = new HexGrid();
const images = new Images();
const navigation = new Navigation();
const quiz = new Quiz();
const themeSwitcher = new ThemeSwitcher();

// @ts-ignore
window.PQ_TUTORIALS = {
    fonts: fonts,
    hexGrid: hexGrid,
    images: images,
    navigation: navigation,
    quiz: quiz,
    themeSwitcher: themeSwitcher
}