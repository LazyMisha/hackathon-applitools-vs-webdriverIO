const assert = require('../node_modules/soft-assert/lib/assertion');
const fs = require('fs');

const viewportWidth = process.env.WIDTH;
const viewportHeight = process.env.HEIGHT;
const browserName = process.env.SERVICE === 'geckodriver' ? 'Firefox' : 'Chrome';
const device = process.env.DEVICE;
const endPoint = process.env.VERSION;
const reportFile = endPoint.includes('V1') ? 'Traditional-V1-TestResults.txt' : 'Traditional-V2-TestResults.txt';

function hackathonReporter(task, testName, domId, comparisonResult) {
    fs.appendFileSync(reportFile, `"Task: ${task}, Test Name: ${testName}, DOM Id: ${domId}, Browser: ${browserName}, Viewport: ${viewportWidth + 'x' + viewportHeight}, Device: ${device}, Status: ${(comparisonResult ? "Pass" : "Fail")}\n`);
    assert._assert(comparisonResult, true, testName)
}

describe('Task 3 – Product Details Test', () => {

    browser.url(endPoint);
    browser.setWindowSize(parseInt(viewportWidth), parseInt(viewportHeight));

    it('Should be displayed correct item size', () => {

        const blackCheckBox = $('#SPAN__checkmark__107');
        const filterButton = $('#filterBtn');
        const openFilterButton = $('//a[@id="A__openfilter__207" or @id="A__openfilter__206"]');
        const firstPairOfShoes = $('#product_1');
        const size = $('#DIV__colxlcollg__91');

        if (device !== 'Laptop') {
            openFilterButton.waitForClickable({ timeout: 5000 });
            openFilterButton.click();
        }

        blackCheckBox.waitForClickable({ timeout: 5000 });
        blackCheckBox.click();
        filterButton.waitForClickable({ timeout: 5000 });
        filterButton.click();
        firstPairOfShoes.waitForClickable({ timeout: 5000 });
        firstPairOfShoes.click();

        size.waitForExist({ timeout: 5000 });
        let isSizeCorrect = size.getText() === 'Small (S)';

        hackathonReporter(3, 'Should be displayed correct item size', '#DIV__colxlcollg__91', isSizeCorrect);
    });

    it('Should be displayed correct item id', () => {

        const itemId = $('#SMALL____84');

        itemId.waitForDisplayed({ timeout: 5000 });
        let isItemIdCorrect = itemId.getText() === 'SKU: MTKRY-001';

        hackathonReporter(3, 'Should be displayed correct item id', '#SMALL____84', isItemIdCorrect);
    });

    it('Should be displayed correct new item price', () => {

        const newItemPrice = $('#new_price');

        newItemPrice.waitForDisplayed({ timeout: 5000 });
        let isNewItemPriceCorrect = newItemPrice.getText() === '$33.00';

        hackathonReporter(3, 'Should be displayed correct new item price', '#new_price', isNewItemPriceCorrect);
    });

    it('Should be displayed correct old item price', () => {

        const oldItemPrice = $('#old_price');

        oldItemPrice.waitForDisplayed({ timeout: 5000 });
        let isOldItemPriceCorrect = oldItemPrice.getText() === '$48.00';

        hackathonReporter(3, 'Should be displayed correct old item price', '#old_price', isOldItemPriceCorrect);
    });

    it('Should be displayed item picture', () => {

        const itemImage = $('#shoe_img');

        itemImage.waitForDisplayed({ timeout: 5000 });
        let isItemImageCorrect = itemImage.isDisplayed();

        hackathonReporter(3, 'Should be displayed item picture', '#shoe_img', isItemImageCorrect);
    });

    it('Should be displayed item title', () => {

        const itemName = $('#shoe_name');

        itemName.waitForDisplayed({ timeout: 5000 });
        let isItemNameCorrect = itemName.getText() === 'Appli Air x Night';

        hackathonReporter(3, 'Should be displayed item title', '#shoe_name', isItemNameCorrect);
    });

    it('Should be displayed item discount', () => {

        const itemDiscount = $('#discount');

        itemDiscount.waitForDisplayed({ timeout: 5000 });
        let isItemDiscountCorrect = itemDiscount.getText() === '-30% discount';

        hackathonReporter(3, 'Should be displayed item discount', '#discount', isItemDiscountCorrect);
    });

    it('Should be displayed item quantity', () => {

        const itemQuantity = $('#quantity_1');

        itemQuantity.waitForDisplayed({ timeout: 5000 });
        let isItemQuantityCorrect = itemQuantity.getValue() === '1';

        hackathonReporter(3, 'Should be displayed item quantity', '#quantity_1', isItemQuantityCorrect);
    });

    it('Should be displayed item rating', () => {

        const itemRating = $('//em');

        itemRating.waitForExist({ timeout: 5000 });
        let isItemRatingCorrect = itemRating.getText() === '4 reviews';

        hackathonReporter(3, 'Should be displayed item rating', '//em', isItemRatingCorrect);
    });

    it('Should be displayed item "Add to CArt" button', () => {

        const addToCartButton = $('#A__btn__114');

        addToCartButton.waitForDisplayed({ timeout: 5000 });
        let isbuttonDisplayed = addToCartButton.isDisplayed();

        hackathonReporter(3, 'Should be displayed item "Add to CArt" button', '#A__btn__114', isbuttonDisplayed);
    });
});