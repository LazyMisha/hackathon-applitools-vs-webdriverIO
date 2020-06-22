const assert = require('assert');
const fs = require('fs');

const viewportWidth = process.env.WIDTH;
const viewportHeight = process.env.HEIGHT;
const browserName = process.env.SERVICE === 'geckodriver' ? 'Firefox' : 'Chrome';
const device = process.env.DEVICE;
const endPoint = process.env.VERSION;
const reportFile = endPoint.includes('V1') ? 'Traditional-V1-TestResults.txt' : 'Traditional-V2-TestResults.txt';

function hackathonReporter(task, testName, domId, comparisonResult) {
    fs.appendFileSync(reportFile, `"Task: ${task}, Test Name: ${testName}, DOM Id: ${domId}, Browser: ${browserName}, Viewport: ${viewportWidth + 'x' + viewportHeight}, Device: ${device}, Status: ${(comparisonResult ? "Pass" : "Fail")}\n`);
    assert.strictEqual(true, comparisonResult)
}

describe('Task 1 – Cross-Device Elements Test', () => {

    let searchInputFieldId = '#DIV__customsear__41';
    let searchIconId = '#I__headericon__44';

    let searchInputFieldDisplayed = true;

    if (device === 'Mobile') {
        searchIconId = '#A__btnsearchm__59';
        searchInputFieldDisplayed = false;
    }

    browser.url(endPoint);
    browser.setWindowSize(parseInt(viewportWidth), parseInt(viewportHeight));

    it('Search input field is displayed', () => {
        let isDisplayed = browser.$(searchInputFieldId).isDisplayed();
        hackathonReporter(1, 'Search input field is displayed', searchInputFieldId, isDisplayed === searchInputFieldDisplayed)
    });

    it('Search Icon should be displayed', () => {
        let isDisplayed = browser.$(searchIconId).isDisplayed();
        hackathonReporter(1, 'Search Icon is displayed', searchIconId, isDisplayed)
    });
});