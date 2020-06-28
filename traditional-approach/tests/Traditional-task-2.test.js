const env = require('../wdio.conf');
const device = env.config.device;

describe('Task 2 – Shopping Experience Test', () => {

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

        env.config.hackathonReporter(2, 'Should be displayed two pairs of black shoes', '#product_grid .grid_item', count === 2);
    });
});