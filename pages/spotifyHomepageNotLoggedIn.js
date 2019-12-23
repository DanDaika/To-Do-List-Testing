var SpotifyHomepageNotLoggedIn = function() {
    var logInButton = element(by.css('.mh-header-secondary.svelte-vf0pv9.mh-tier-2[href="https://www.spotify.com/ro/account/overview/"]'));

    this.disableOrEnableWaitingForAngular = (enableOrDisable) =>{
        browser.waitForAngularEnabled(enableOrDisable);
    };
    
    this.getUrl = async(url) =>{
        await browser.get(url);
    };

    this.maximizeWindow = async() =>{
        await browser.manage().window().maximize();
    };

    this.getCurrentUrl = async() =>{
        return await browser.getCurrentUrl();
    };

    this.clickLogIn = async() =>{
        await logInButton.click();
    };

    this.logInButtonIsDisplayed = () =>{
        return logInButton.isDisplayed();
    };

};

module.exports = new SpotifyHomepageNotLoggedIn();