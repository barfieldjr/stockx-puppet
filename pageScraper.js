const scraperObject = {
    url: 'https://stockx.com/air-jordan-4-retro-lightning-2021',
    async scraper(browser){
        let page = await browser.newPage();
        console.log(`Navigating to ${this.url}...`);
        // Navigate to the selected page
        await page.goto(this.url);
        // Wait for the required DOM to be rendered
        let data = await page.evaluate(() => {
            let title = parseInt(document.querySelector('dd[class ="chakra-stat__number css-1brf3jx"]').innerText.substring(1));
            return title;
        });
        
        browser.close(); //Manipulate the amount of times browser is called. Close when want to terminate program
        console.log( data);
        return data;
    }
}

module.exports = scraperObject;