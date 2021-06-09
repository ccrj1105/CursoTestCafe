import { Selector } from 'testcafe'

//
fixture `Getting started with testcafe`
.page `https://devexpress.github.io/testcafe/example/`
.before(async t =>{
    //test setup goes here
    //await rundatabasereset()
    //await sendTestData()
}).beforeEach(async t =>{
    //Run before each test
}).after(async t =>{
    //cleaning test data
    // logging and seding data to monitoring systems
}).afterEach(async t =>{
    // Runs aftter eahc test
})


test('My first test cafe test', async t =>{
    //here goes testcafe code
    await t.typeText("#developer-name","Cristian")
    await t.click("#submit-button")
    //compare text of a webelement
    await t.expect(Selector('#article-header').innerText).contains('Cristian')
})