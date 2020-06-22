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

describe('Task 2 – Shopping Experience Test', () => {

    browser.url(endPoint);
    browser.setWindowSize(parseInt(viewportWidth), parseInt(viewportHeight));

    it('Should be displayed two pairs of black shoes', () => {

        const blackCheckBox = $('#SPAN__checkmark__107');
        const filterButton = $('#filterBtn');
        const openFilterButton = $('//a[@id="A__openfilter__207" or @id="A__openfilter__206"]');

        if (device !== 'Laptop') {
            openFilterButton.waitForClickable({ timeout: 5000 });
            openFilterButton.click();
        }

        blackCheckBox.waitForClickable({ timeout: 5000 });
        blackCheckBox.click();
        filterButton.waitForClickable({ timeout: 5000 });
        filterButton.click();
        let count = $$(`#product_grid .grid_item`).length;

        hackathonReporter(1, 'Should be displayed two pairs of black shoes', '#product_grid .grid_item', count === 2);
    });
});