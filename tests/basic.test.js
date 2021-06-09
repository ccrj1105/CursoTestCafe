import { Selector } from 'testcafe'

//
fixture`Getting started with testcafe`
    .page`https://devexpress.github.io/testcafe/example/`
    .before(async t => {
        //test setup goes here
        //await rundatabasereset()
        //await sendTestData()
    }).beforeEach(async t => {
        //Run before each test
        await t.setTestSpeed(1)
        //await test.timeouts(0)

    }).after(async t => {
        //cleaning test data
        // logging and seding data to monitoring systems
    }).afterEach(async t => {
        // Runs aftter eahc test
    })


test('My first test cafe test', async t => {
    const developer_name_input = Selector("#developer-name")
    const submit_button = Selector("#submit-button")
    const articleText = Selector("#article-header").innerText

    await t.takeScreenshot({ fullPage: true })
    await t.takeElementScreenshot(submit_button)
    await t.typeText(developer_name_input, "Cristian")
    //await t.wait(3000)
    await t.click(submit_button)
    //compare text of a webelement
    await t.expect(articleText).contains('Cristian')
    //Click
    await t.click('selector', { options })
    // double click
    await t.doubleClick('selector', { options })
    //right click
    await t.rightClick('selector', { options })
    //drag element
    await t.drag('selector', { options })
    //hover
    await t.hover('selector', { options })
    //select text
    await t.selectText('selector')
    //type text
    await t.typeText('selector', 'text')
    //press key on keyboard
    await t.pressKey('key')
    //navigate
    await t.navigateTo('url')
    //resize window
    await t.resizeWindow(800, 600)


    //asert in testcafe

    //deep equal
    await t.expect('foo').eql('foo', 'message', options)
    //not deep equal
    await t.expect('foo').notEqll('foo', 'message', options)
    //ok
    await t.expect(false).ok()
    //not ok
    await t.expect(true).notOk()
    //contains
    await t.expect("foo").contains("o")
    //not contains
    await t.expect('foo').notContains('hey')
    //greater or less than
    await t.expect(10).gt(5)
    await t.expect(10).gte(10)
    await t.expect(10).lt(10)
    await t.expect(10).lte(10)
//within
await t.expect(10).within(1,100)
//not within
await t.expect(10).notWithin(1,100)



})

/*test.only('My first test cafe test', async t => {
    const developer_name_input = Selector("#developer-name")
    const submit_button = Selector("#submit-button")
    const articleText = Selector("#article-header").innerText

    await t.takeScreenshot({ fullPage: true })
    await t.takeElementScreenshot(submit_button)
    await t.typeText(developer_name_input, "Cristian")
    //await t.wait(3000)
    await t.click(submit_button)
    //compare text of a webelement
    await t.expect(articleText).contains('Cristian')
})*/