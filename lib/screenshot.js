const puppeteer = require('puppeteer');

let _page = null;

function getPage() {
    return new Promise(((resolve, reject) => {
        if (_page) {
            return resolve(_page);
        }
        puppeteer.launch({
            headless: true,
            args: ['--no-sandbox']
        }).then((browser) => {
            return browser.newPage();
        }).then(page => {
            _page = page
            return resolve(_page)
        }).catch(err => {
            reject(err)
        });
    }))
}

function screenshot(url, width, height) {
    return getPage().then((page) => {
        return page.setViewport({width: width, height: height}).then(() => {
            return page
        })
    }).then((page) => {
        return page.goto(url).then(()=>{return page});
    }).then((page) => {
        return page.screenshot();
    })
}

module.exports = {screenshot}