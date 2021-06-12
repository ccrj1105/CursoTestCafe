import { Selector, t } from "testcafe";

class Navbar {
    //selectores
    constructor() {
        this.searchBox = Selector('#js-site-search-input')
        this.searchBtn = Selector('#js-search-button')
    }

    async searchProduct(text) {
        await t
            .typeText(this.searchBox, text, { paste: true })
            .click(this.searchBtn)
    }
}

export default Navbar