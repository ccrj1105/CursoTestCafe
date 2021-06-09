import { Selector } from 'testcafe'
import {login,loginWrong} from '../function'

const loginForm = Selector('body > center > div > form')
const userInput = Selector('input[type=text]')
//const passInput = Selector('input[type=password]')
// similar the xpath
const passInput = Selector('input').withAttribute('name','password')

const loginButton = Selector('.button')
const booksForm = Selector('#available')
fixture`Login test`.page`http://sahitest.com/demo/training/login.htm`

test('user cannot login with invalid credentials', async t => {
    //const errorMessage = Selector('#errorMessage').innerText

   await loginWrong()

})

test('user  login with credentials correct', async t => {
    
   await login('test','secret')

})