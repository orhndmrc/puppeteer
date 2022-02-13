const puppeteer = require('puppeteer')
const { percySnapshot } = require('@percy/puppeteer')


describe('Percy Visual Test', () => {
    let browser
    let page
    beforeAll(async function () {
        browser = await puppeteer.launch({ headless: true })
        page = await browser.newPage()
    })
    afterAll(async function () {
        browser.close()
    })
    test('Full Page Percy Snapshot', async function () {
        await page.goto('https://example.com')
        await page.waitForSelector('h1')
        await percySnapshot(page,'Example Page')
    })

})