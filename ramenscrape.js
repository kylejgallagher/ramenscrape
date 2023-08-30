const cheerio = require('cheerio');
const request = require('request');

for (let r = 0; r <= 9000; r++){
    const url = "https://ramendb.supleks.jp/s/" + r + ".html";
    request(url, (error, response, html) => {
    if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);
    const value = $('div.value').text();
    const shopName = $('span.shopname').text();
    //Trying to add location, still working on it
    // const location = $("/search?state=tokyo").text();
    // console.log(location);
    if (value >= 93.000) {console.log(`${shopName} has a current ranking of ${value}`)};
    }
    });
};
