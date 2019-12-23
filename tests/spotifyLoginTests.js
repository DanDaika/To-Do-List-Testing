var spotifyHomepageNotLoggedIn = require ('../pages/spotifyHomepageNotLoggedIn.js');
var spotifyLogInPage = require ('../pages/spotifyLogInPage.js');
var spotifyHomepageLoggedIn = require ('../pages/spotifyHomepageLoggedIn.js');
var credentials = require ('../utils/helper.js');

var url = 'https://www.spotify.com/ro/';
var logInUrl = 'https://accounts.spotify.com/en/login/?_locale=en-RO&continue=https:%2F%2Fwww.spotify.com%2Fro%2Faccount%2Foverview%2F';
var loggedInUrl = 'https://www.spotify.com/ro/account/overview/';
var disable = false;
var enable = true;

describe ('Spotify Test Cases: ', () =>{
    beforeAll( async() =>{
        await spotifyHomepageNotLoggedIn.maximizeWindow();
        spotifyHomepageNotLoggedIn.disableOrEnableWaitingForAngular(disable);
        browser.manage().timeouts().implicitlyWait(10000);
    });
    beforeEach( async() =>{
        await spotifyHomepageNotLoggedIn.getUrl(url);
        expect(spotifyHomepageNotLoggedIn.getCurrentUrl()).toMatch(url,'001 - The homepage is not loaded!');
    });
    afterAll( () =>{
        spotifyHomepageNotLoggedIn.disableOrEnableWaitingForAngular(enable);
    });

    it ('Test Case 1 - Login (Happy Path).', async() =>{
        await spotifyHomepageNotLoggedIn.clickLogIn();
        browser.wait(ExpectedConditions.urlContains(logInUrl),10000);
        expect(spotifyLogInPage.logInButtonIsDisplayed()).toBe(true,'01 - The Log In button is not displayed!');
        expect(spotifyLogInPage.userNameFieldIsDisplayed()).toBe(true,'02 - The User Name field is not displayed!');
        expect(spotifyLogInPage.passwordFieldIsDisplayed()).toBe(true,'03 - The Password field is not displayed!');
        await spotifyLogInPage.setUserName(credentials.getValidUsername('validUsername'));
        await spotifyLogInPage.setPassword(credentials.getValidPassword('validPassword'));
        await spotifyLogInPage.clickLogIn();
        browser.wait(ExpectedConditions.urlContains(loggedInUrl),10000);
        await spotifyHomepageLoggedIn.getUrl(url);
        await spotifyHomepageLoggedIn.clickProfileButton();
        await spotifyHomepageLoggedIn.clickLogOutButton();
    });

    it ('Test Case 2 - Login (Negative 1).', async() =>{
        await spotifyHomepageNotLoggedIn.clickLogIn();
        browser.wait(ExpectedConditions.urlContains(logInUrl),10000);
        expect(spotifyLogInPage.logInButtonIsDisplayed()).toBe(true,'01 - The Log In button is not displayed!');
        expect(spotifyLogInPage.userNameFieldIsDisplayed()).toBe(true,'02 - The User Name field is not displayed!');
        expect(spotifyLogInPage.passwordFieldIsDisplayed()).toBe(true,'03 - The Password field is not displayed!');
        await spotifyLogInPage.setUserName(credentials.getValidUsername('validUsername'));
        await spotifyLogInPage.setPassword(credentials.getValidPassword('invalidPassword'));
        await spotifyLogInPage.clickLogIn();
        browser.wait(ExpectedConditions.urlContains(logInUrl),10000);
        expect(spotifyLogInPage.errorDisplayed()).toBe(true,'05 - The error message for failed login is not displayed!');
    });

    it ('Test Case 3 - Login (Negative 2).', async() =>{
        await spotifyHomepageNotLoggedIn.clickLogIn();
        browser.wait(ExpectedConditions.urlContains(logInUrl),10000);
        expect(spotifyLogInPage.logInButtonIsDisplayed()).toBe(true,'01 - The Log In button is not displayed!');
        expect(spotifyLogInPage.userNameFieldIsDisplayed()).toBe(true,'02 - The User Name field is not displayed!');
        expect(spotifyLogInPage.passwordFieldIsDisplayed()).toBe(true,'03 - The Password field is not displayed!');
        await spotifyLogInPage.setUserName(credentials.getValidUsername('invalidUsername'));
        await spotifyLogInPage.setPassword(credentials.getValidPassword('validPassword'));
        await spotifyLogInPage.clickLogIn();
        browser.wait(ExpectedConditions.urlContains(logInUrl),10000);
        expect(spotifyLogInPage.errorDisplayed()).toBe(true,'05 - The error message for failed login is not displayed!');
    });

});