var spotifyHomepageNotLoggedIn = require ('../pages/spotifyHomepageNotLoggedIn.js');
var spotifyLogInPage = require ('../pages/spotifyLogInPage.js');
var spotifyHomepageLoggedIn = require ('../pages/spotifyHomepageLoggedIn.js');
var spotifyAccountOverview = require ('../pages/spotifyAccountOverview.js');
var spotifyWebPlayer = require ('../pages/spotifyWebPlayer.js');
var credentials = require ('../utils/helper.js');
var spotifyPremiumPage = require ('../pages/spotifyPremiumPage.js');

var url = 'https://www.spotify.com/ro/';
var logInUrl = 'https://accounts.spotify.com/en/login/?_locale=en-RO&continue=https:%2F%2Fwww.spotify.com%2Fro%2Faccount%2Foverview%2F';
var loggedInUrl = 'https://www.spotify.com/ro/account/overview/';
var premiumUrl = 'https://www.spotify.com/ro/premium/';
var disable = false;
var enable = true;
var loggedInStatus = false;

describe ('Spotify Test Cases: ', () =>{
    beforeAll( async() =>{
        await spotifyHomepageNotLoggedIn.maximizeWindow();
        spotifyHomepageNotLoggedIn.disableOrEnableWaitingForAngular(disable);
        browser.manage().timeouts().implicitlyWait(10000);
    });
    beforeEach( async() =>{
        await spotifyHomepageNotLoggedIn.getUrl(url);
        expect(spotifyHomepageNotLoggedIn.getCurrentUrl()).toMatch(url,'001 - The homepage is not loaded!');
        if (loggedInStatus == false) {
            await spotifyHomepageNotLoggedIn.clickLogIn();
            await browser.wait(ExpectedConditions.urlContains(logInUrl),10000);
            await spotifyLogInPage.setUserName(credentials.getValidUsername('validUsername'));
            await spotifyLogInPage.setPassword(credentials.getValidPassword('validPassword'));
            await spotifyLogInPage.clickLogIn();
            browser.wait(ExpectedConditions.urlContains(loggedInUrl),10000);
            await spotifyAccountOverview.clickSpotifyLogo();
            await spotifyHomepageLoggedIn.clickWebPlayerButton();
            loggedInStatus = true;
        } else { await spotifyHomepageLoggedIn.clickWebPlayerButton();};
    });
    afterAll( () =>{
        spotifyHomepageNotLoggedIn.disableOrEnableWaitingForAngular(enable);
    });

    it ('Test Case 4 - Start Webplayer.', async() =>{
        expect(spotifyWebPlayer.spotifyLogoDisplayed()).toBe(true,'01 - The Logo is not displayed!');
        expect(spotifyWebPlayer.homeButtonDisplayed()).toBe(true,'02 - The Home button is not displayed!');
        expect(spotifyWebPlayer.searchButtonDisplayed()).toBe(true,'03 - The Search button is not displayed!');
        expect(spotifyWebPlayer.yourLibraryButtonDisplayed()).toBe(true,'04 - The Your Library button is not displayed!');
    });

    it ('Test Case 5 - Search for an artist and verify that search results are showed (Positive).', async() =>{
        await spotifyWebPlayer.clickSearchButton();
        expect(spotifyWebPlayer.searchInputDisplayed()).toBe(true,'01 - The search input bar is not displayed!');
        await spotifyWebPlayer.typeSearchedItem('daika');
        expect(spotifyWebPlayer.songsAfterSearchDisplayed()).toBe(true,'02 - No songs are displayed for the searched item!');
        expect(spotifyWebPlayer.topResultAfterSearchDisplayed()).toBe(true,'03 - No top song is displayed for the searched item!');
    });

    it ('Test Case 6 - Play the first Library in your list of libraries.', async() =>{
        await spotifyWebPlayer.clickYourLibraryButton();
        expect(spotifyWebPlayer.playlistsTabInYourLibraryIsDisplayed()).toBe(true,'01 - Playlist tab is not displayed!');
        await spotifyWebPlayer.mouseOverDesiredPlaylistFromPlaylistsInYourLibrary(0);
        await spotifyWebPlayer.clickPlayOnDesiredPlaylistFromPlaylistsInYourLibrary(0);
        await spotifyWebPlayer.getloadingIconForPlayPauseButton();
        expect(spotifyWebPlayer.statusPlayPauseButtonInNowPlayingBarInYourLibrary()).toBe('Pause','02 - The playlist is not playing!')
    });

    it ('Test Case 7 - Webplayer UI Verification.', async() =>{
        expect(spotifyWebPlayer.recentlyPlayedInHomeTabDisplayed()).toBe(true,'01 - Recently played in Home tab is not displayed!');
        expect(spotifyWebPlayer.userNameDisplayed()).toBe(true,'02 - The user name in Home tab is not displayed!');
        expect(spotifyWebPlayer.upgradeButtonDisplayed()).toBe(true,'03 - The upgrade in Home tab is not displayed!');
        await spotifyWebPlayer.clickSearchButton();
        expect(spotifyWebPlayer.userNameDisplayed()).toBe(true,'04 - The user name in Search tab is not displayed!');
        expect(spotifyWebPlayer.upgradeButtonDisplayed()).toBe(true,'05 - The upgrade in Search tab is not displayed!');
        expect(spotifyWebPlayer.searchInputDisplayed()).toBe(true,'06 - The search bar in Search tab is not displayed!');
        expect(spotifyWebPlayer.browseAllInSearchMenuDisplayed()).toBe(true,'07 - Browse all in Search tab is not displayed!');
        await spotifyWebPlayer.clickYourLibraryButton();
        expect(spotifyWebPlayer.userNameDisplayed()).toBe(true,'08 - The user name in Search tab is not displayed!');
        expect(spotifyWebPlayer.upgradeButtonDisplayed()).toBe(true,'09 - The upgrade in Search tab is not displayed!');
        expect(spotifyWebPlayer.desiredTabInYourLibraryMenu(0)).toBe('PLAYLISTS','10 - The PLAYLISTS in Your Library tab is not displayed!');
        expect(spotifyWebPlayer.desiredTabInYourLibraryMenu(1)).toBe('MADE FOR YOU','11 - The MADE FOR YOU in Your Library tab is not displayed!');
        expect(spotifyWebPlayer.desiredTabInYourLibraryMenu(2)).toBe('LIKED SONGS','12 - The LIKED SONGS in Your Library tab is not displayed!');
        expect(spotifyWebPlayer.desiredTabInYourLibraryMenu(3)).toBe('ALBUMS','13 - The ALBUMS in Your Library tab is not displayed!');
        expect(spotifyWebPlayer.desiredTabInYourLibraryMenu(4)).toBe('ARTISTS','14 - The ARTISTS in Your Library tab is not displayed!');
        expect(spotifyWebPlayer.desiredTabInYourLibraryMenu(5)).toBe('PODCASTS','15 - The PODCASTS in Your Library tab is not displayed!');
    });

    it ('Test Case 8 - Upgrade to pro.', async() =>{
        await spotifyWebPlayer.clickUpgradeButton();
        browser.wait(ExpectedConditions.urlContains(premiumUrl),10000);
        expect(spotifyPremiumPage.viewPlansButtonDisplay()).toBe(true,'01 - The VIEW PLANS in Premium page  is not displayed!');
        spotifyPremiumPage.closeTheOpenedTab();
    });

    it ('Test Case 9 - Webplayer "console" is present at the bottom of the page with all the prerequisite buttons.', async() =>{
        expect(spotifyWebPlayer.nowPlayingBarShuffleButtonDisplayed()).toBe(true,'01 - Shuffle all in now playing tab is not displayed!');
        expect(spotifyWebPlayer.nowPlayingBarSkipBackButtonDisplayed()).toBe(true,'02 - Skip Back all in now playing tab is not displayed!');
        expect(spotifyWebPlayer.nowPlayingBarPlayPauseButtonDisplayed()).toBe(true,'03 - Play-Pause all in now playing tab is not displayed!');
        expect(spotifyWebPlayer.nowPlayingBarSkipForwardButtonDisplayed()).toBe(true,'04 - Skip Forward all in now playing tab is not displayed!');
        expect(spotifyWebPlayer.nowPlayingBarRepeatButtonDisplayed()).toBe(true,'05 - Repeat all in now playing tab is not displayed!');
        expect(spotifyWebPlayer.nowPlayingBarVolumeBarDisplayed()).toBe(true,'06 - Volume bar all in now playing tab is not displayed!');
    });

    it ('Test Case 10 - Create an empty playlist.', async() =>{
        await spotifyWebPlayer.clickCreatePlaylist();
        await spotifyWebPlayer.nameTheCreatedNewPlaylist('the ONE');
        await spotifyWebPlayer.clickGreenButton();
        expect(spotifyWebPlayer.getCreatedPlaylistNameTitle()).toBe('the ONE','01 - The created playlist is not displayed!')
        await spotifyWebPlayer.clickYourLibraryButton();
        await spotifyWebPlayer.mouseOverDesiredPlaylistFromPlaylistsInYourLibrary(0);
        browser.actions().click(protractor.Button.RIGHT).perform()
        await spotifyWebPlayer.clickDeleteButtonForDeletingCreatedPlaylistInYourLibrary();
        await spotifyWebPlayer.clickGreenButton();
    });

});