const { mail } = require('./mail');
const pageScraper = require('./pageScraper');
const update = require('./updateDB');
async function scrapeAll(browserInstance){
    let browser;
    try{
        browser = await browserInstance;
        let scrapedData = 0;
        let date_ob = new Date();
        scrapedData = await pageScraper.scraper(browser);
        console.log("Successfully scraped "+ scrapedData +" !");
        console.log(date_ob)
        console.log(scrapedData);
        update(date_ob,scrapedData);
    }
    catch(err){
        console.log("Could not resolve the browser instance => ", err);
    }
}

module.exports = (browserInstance) => scrapeAll(browserInstance);