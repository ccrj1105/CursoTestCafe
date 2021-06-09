import { Selector } from 'testcafe'

//
fixture `Getting started with testcafe`
.page `https://devexpress.github.io/testcafe/example/`

test('My first test cafe test', async t =>{
    //here goes testcafe code
    await t.typeText("#developer-name","Cristian")
    await t.click("#submit-button")
})