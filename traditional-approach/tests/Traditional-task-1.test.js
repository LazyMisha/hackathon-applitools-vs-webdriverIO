const env = require('../wdio.conf');
const device = env.config.device;

describe('Task 1 – Cross-Device Elements Test', () => {

    let searchInputFieldId = '#DIV__customsear__41';
    let searchIconId = '#I__headericon__44';

    let searchInputFieldDisplayed = true;

    if (device === 'Mobile') {
        searchIconId = '#A__btnsearchm__59';
        searchInputFieldDisplayed = false;
    }

    it('Search input field is displayed', () => {
        let isDisplayed = browser.$(searchInputFieldId).isDisplayed();
        env.config.hackathonReporter(1, 'Search input field is displayed', searchInputFieldId, isDisplayed === searchInputFieldDisplayed)
    });

    it('Search Icon should be displayed', () => {
        let isDisplayed = browser.$(searchIconId).isDisplayed();
        env.config.hackathonReporter(1, 'Search Icon is displayed', searchIconId, isDisplayed)
    });
});