import { Selector,t } from "testcafe";

class SearchResultPage {
    resulTittle: Selector = Selector('h1')
  


    async validateTittle(t: TestController) {
        await t.expect(this.resulTittle.innerText).contains('Celulares y Smartphones')

    }
}



export default SearchResultPage