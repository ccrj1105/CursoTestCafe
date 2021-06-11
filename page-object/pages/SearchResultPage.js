import { Selector, t } from "testcafe";

class SearchResultPage {
    constructor() {
        this.resultTittle = Selector('h1').innerText
    }

    async validateTitle(){
t.expect(this.resultTittle).contains('Celulares y Smartphones')
    }

}

export default SearchResultPage
