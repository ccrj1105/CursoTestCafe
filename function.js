import { t, Selector } from 'testcafe'


const loginForm = Selector('body > center > div > form')
const userInput = Selector('input[type=text]')
//const passInput = Selector('input[type=password]')
// similar the xpath
const passInput = Selector('input').withAttribute('name', 'password')
const loginButton = Selector('.button')
const booksForm = Selector('#available')


export async function login(username, password) {
    await t.expect(loginForm.exists).ok()
    await t.typeText(userInput, username, { paste: true })
    await t.typeText(passInput, password, { paste: true })
    await t.click(loginButton)
    await t.expect(booksForm.exists).ok
    await t.expect(loginForm.exists).notOk
}

export async function loginWrong() {
    const errorMessage = Selector('#errorMessage').innerText
    await t.expect(loginForm.exists).ok()
    await t.typeText(userInput, "invalid user", { paste: true })
    await t.typeText(passInput, "invalid password", { paste: true })
    await t.click(loginButton)
    await t.expect(errorMessage).contains('Invalid username or password')
}