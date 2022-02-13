module.exports = {
    clickElement: async function(page, selector){
        try {
            await page.waitForSelector(selector)
            await page.click(selector)
        } catch (error) {
            throw new Error(`Could not click on selector: ${selector}`)
            
        }

    },
    getText: async function(page,selector){
        try {
            await page.waitForSelector(selector)
            return await page.$eval(selector, el => el.textContent)
        } catch (error) {
            throw new Error(`Can not get text from selector: ${selector}`)
            
        }

    }
}