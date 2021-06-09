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