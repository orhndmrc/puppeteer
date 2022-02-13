const puppeteer = require('puppeteer')
const expect = require('chai').expect
const {clickElement} = require('../library/helpers')
const {getText} = require('../library/helpers')
describe('My First Puppeteer Test', () => {
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
    it('should lunch the browser', async function () {
        await page.goto('https://devexpress.github.io/testcafe/example/')
        const text = await getText(page,'h1')
        console.log(text)
        await page.reload()
        const title = await page.title()
        const url = await page.url()
        expect(title).equal('TestCafe Example Page')
        expect(url).include('io')
        console.log(`The title===>${title} and url ==>${url}`)
        await page.type('#developer-name', "Orhan")
        //await page.click('#tried-test-cafe', { clickCount: 1 })
        await clickElement(page,'#tried-test-cafe')
        await page.select('#preferred-interface', 'Both', 'JavaScript API')
        
        


    })
    after('tearDown', async function(){
        await browser.close()

    })

})