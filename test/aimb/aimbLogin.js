const puppeteer = require('puppeteer')
const expect = require('chai').expect
let helpers = require('../../library/helpers.js')
describe('Aimb Login', () => {
    let browser
    let page
    before('setUp',async function () {
        browser = await puppeteer.launch({
            headless: false,
            slowMo: 100,
            devtools: false

        })
        page = await browser.newPage()
        
    })
    it('login with valid credential', async function () {
        await page.goto('https://hybrid-model.qa2.mnubo.org/'),
        await page.waitForSelector('#kc-login')
        await page.type('#username',"qav")
        await page.type('#password',"Aspen100!")
        await page.click('#kc-login')
        await page.waitForSelector('#project-create-button>span')

    })
    after('tearDown', async function(){
        await browser.close()

    })

})