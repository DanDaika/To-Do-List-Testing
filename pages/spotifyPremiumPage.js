var PremiumPage = function() {
    var viewPlansButton = element(by.className('sc-bZQynM'));

    this.viewPlansButtonDisplay = () =>{
        return viewPlansButton.isDisplayed();
    };

    this.closeTheOpenedTab = async () =>{
        await browser.getAllWindowHandles().then(function (handles) {
            browser.driver.close();
            browser.switchTo().window(handles[0]);
        });
    }

};

module.exports = new PremiumPage();