const assert = require('assert')
const fs = require('fs')

const browserName = 'chrome'
const viewportWidth = 1200
const viewportHeight = 700
const device = 'Laptop'

function hackathonReporter(task, testName, domId, comparisonResult) {
    fs.appendFileSync('Traditional-V1-TestResults.txt', `"Task: ${task}, Test Name: ${testName}, DOM Id: ${domId}, Browser: ${browserName}, Viewport: ${viewportWidth + 'x' + viewportHeight}, Device: ${device}, Status: ${(comparisonResult ? "Pass" : "Fail")}\n`)
    assert.strictEqual(true, comparisonResult)
}


describe('Task 1 - Header location', function () {

    browser.url('/gridHackathonV1.html')
    browser.setWindowSize(viewportWidth, viewportHeight)

    it('Search input field is displayed', () => {
        var isDisplayed = browser.$('#DIV__customsear__41').isDisplayed()
        hackathonReporter(1, 'Search input field is displayed', 'DIV__customsear__41', isDisplayed)
    });

    it('Search Icon should be displayed', () => {
        var isDisplayed = browser.$('#I__headericon__44').isDisplayed()
        hackathonReporter(1, 'Search Icon is displayed', 'I__headericon__44', isDisplayed)
    });
});