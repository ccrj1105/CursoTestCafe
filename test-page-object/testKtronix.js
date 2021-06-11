import Navbar from "../page-object/components/Navbar";
import SearchResultPage from "../page-object/pages/SearchResultPage";

const navbar = new Navbar()

fixture`buy Ktronix`.page`https://www.ktronix.com/`

test('user in ktronix page',async t =>{
    //await t.typeText(navbar.searchBox,"iphone", { paste: true })
    //await t.click(navbar.searchBtn)

    navbar.searchProduct('iphone')

})