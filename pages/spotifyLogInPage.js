var SpotifyLogInPage = function() {
    var logInButton = element(by.css('.btn.btn-block.btn-green.ng-binding'));
    var userNameField = element(by.model('form.username'));
    var passwordField = element(by.model('form.password'));
    var errorMessageLoggingIn = element(by.css('.ng-binding.ng-scope'));

    this.getCurrentUrl = async() =>{
        return await browser.getCurrentUrl();
    };

    this.clickLogIn = async() =>{
        await logInButton.click();
    };

    this.logInButtonIsDisplayed = () =>{
        return logInButton.isDisplayed();
    };

    this.userNameFieldIsDisplayed = () =>{
        return userNameField.isDisplayed();
    };

    this.passwordFieldIsDisplayed = () =>{
        return passwordField.isDisplayed();
    };

    this.setUserName = async (username) =>{
        await userNameField.clear();
        await userNameField.sendKeys(username);
    };

    this.setPassword = async (password) =>{
        await passwordField.clear();
        await passwordField.sendKeys(password);
    };

    this.clickLogIn = async () =>{
        await logInButton.click()
    };

    this.errorDisplayed = () =>{
        return errorMessageLoggingIn.isDisplayed();
    };

};

module.exports = new SpotifyLogInPage();