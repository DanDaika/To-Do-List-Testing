var SpotifyWebPlayer = function() {
    var spotifyLogo = element(by.className('navBar-header'));
    var navBarGroup = element.all(by.css('.navBar__entry-points li'));
    var searchInput = element(by.className('_2f8ed265fb69fb70c0c9afef329ae0b6-scss'));
    var songsField = element(by.className('_3bd5f5dcfac4ddcbdf761e12c647bbdc-scss'));
    var topResultField = element(by.className('_666f5b94c971f4cb22e791e148d5eac1-scss _6893d0c9a0fcb4e48764fc3b1c159116-scss'));
    var playlistsTabInYourLibrary = element(by.css('._137ec408b14ac4ea5aec6ded3d95f328-scss.be059487cfa7b71ee0f482c8e5be2b7e-scss'));
    var playPauseButtonInNowPlayingBarInYourLibrary = element(by.css('.Root__now-playing-bar .control-button--circled'));
    var playlistsListsInYourLibrary = element.all(by.css('.c247a773eeb0d66dcd9c92d83e50c263-scss ._5658c6accf868644593ce36887a475b1-scss'));
    var loadingIconForPlayPauseButton = element(by.css('.Root__top-container .control-button--loading'));
    var recentlyPlayedInHomeTab = element(by.css('.f56a72bdee0d33bbdbea23a12b263896-scss .d9eb38f5d59f5fabd8ed07639aa3ab77-scss[href="/view/recently-played"]'));
    var userName = element(by.className('UserWidget__link'));
    var upgradeButton = element(by.className('_2221af4e93029bedeab751d04fab4b8b-scss'));
    var browseAllInSearchMenu = element(by.className('_7d86d8c9735f821e7aec85a8325f0eae-scss'));
    var tabsInYourLibraryMenu = element.all(by.css('._09de7f5685fbf244f783483fedae7419-scss li'));
    var nowPlayingBarShuffleButton = element(by.css('.Root__now-playing-bar .spoticon-shuffle-16'));
    var nowPlayingBarSkipBackButton = element(by.css('.Root__now-playing-bar .spoticon-skip-back-16'));
    var nowPlayingBarPlayPauseButton = element(by.css('.Root__now-playing-bar .control-button--circled'));
    var nowPlayingBarSkipForwardButton = element(by.css('.Root__now-playing-bar .spoticon-skip-forward-16'));
    var nowPlayingBarRepeatButton = element(by.css('.Root__now-playing-bar .spoticon-repeat-16'));
    var nowPlayingBarVolumeBar = element(by.css('.Root__now-playing-bar .volume-bar'));
    var createPlaylistButton = element(by.className('CreatePlaylistButton__text'));
    var playlistNameInputBox = element(by.className('inputBox-input'));
    var createDeleteGreenButton = element(by.className('btn-green'));
    var createdPlaylistName = element(by.className('mo-info-name'));
    var deleteButtonForDeletingCreatedPlaylistInYourLibrary = element(by.xpath('//*[@id="main"]/div/nav[3]/div[3]'));


  
    this.getCurrentUrl = async() =>{
        return await browser.getCurrentUrl();
    };

    this.spotifyLogoDisplayed = async () =>{
        return await spotifyLogo.isDisplayed();
    };

    this.clickSpotifyLogo = async () =>{
        await spotifyLogo.click();
    };

    this.homeButtonDisplayed = async () =>{
        return await navBarGroup.then(list => list[0].isDisplayed());
    };

    this.searchButtonDisplayed = async () =>{
        return await navBarGroup.then(list => list[1].isDisplayed());
    };

    this.clickSearchButton = async () =>{
        await navBarGroup.then(list => list[1].click());
    };

    this.yourLibraryButtonDisplayed = async () =>{
        return await navBarGroup.then(list => list[2].isDisplayed());
    };

    this.clickYourLibraryButton = async () =>{
        await navBarGroup.then(list => list[2].click());
    };

    this.searchInputDisplayed = async () =>{
        return await searchInput.isDisplayed();
    };

    this.typeSearchedItem = async (searchedItem) =>{
        await searchInput.clear();
        await searchInput.sendKeys(searchedItem);
    };

    this.songsAfterSearchDisplayed = async () =>{
        return await songsField.isDisplayed();
    };

    this.topResultAfterSearchDisplayed = async () =>{
        return await topResultField.isDisplayed();
    };

    this.playlistsTabInYourLibraryIsDisplayed = async () =>{
        return await playlistsTabInYourLibrary.isDisplayed();
    };

    this.statusPlayPauseButtonInNowPlayingBarInYourLibrary = async () =>{
        return await playPauseButtonInNowPlayingBarInYourLibrary.getAttribute('title');
    };

    this.mouseOverDesiredPlaylistFromPlaylistsInYourLibrary = async (playlistIndex) =>{
        await playlistsListsInYourLibrary.then(async list => {
           await browser.actions().mouseMove(list[playlistIndex]).perform();
        });
    };

    this.clickPlayOnDesiredPlaylistFromPlaylistsInYourLibrary = async (playlistIndex) =>{
        await playlistsListsInYourLibrary.then(async list => {
           await (list[playlistIndex].element(by.className('_11f5fc88e3dec7bfec55f7f49d581d78-scss'))).click();
        });
    };

    this.getloadingIconForPlayPauseButton = async () =>{
        browser.wait(ExpectedConditions.invisibilityOf(loadingIconForPlayPauseButton));
    };

    this.recentlyPlayedInHomeTabDisplayed = () =>{
        return recentlyPlayedInHomeTab.isDisplayed();
    };

    this.userNameDisplayed = () =>{
        return userName.isDisplayed();
    };

    this.clickUpgradeButton = async () =>{
        await upgradeButton.click();
        await browser.getAllWindowHandles().then(function (handles) {
                browser.switchTo().window(handles[1]);
        });
    };

    this.upgradeButtonDisplayed = () =>{
        return upgradeButton.isDisplayed();
    };

    this.browseAllInSearchMenuDisplayed = () =>{
        return browseAllInSearchMenu.isDisplayed();
    };

    this.desiredTabInYourLibraryMenu = async (tabIndex) =>{
        return await tabsInYourLibraryMenu.then(async list => {
            return await (list[tabIndex].getText());
         });
    };

    this.nowPlayingBarShuffleButtonDisplayed = () =>{
        return nowPlayingBarShuffleButton.isDisplayed();
    };

    this.nowPlayingBarSkipBackButtonDisplayed = () =>{
        return nowPlayingBarSkipBackButton.isDisplayed();
    };

    this.nowPlayingBarPlayPauseButtonDisplayed = () =>{
        return nowPlayingBarPlayPauseButton.isDisplayed();
    };

    this.nowPlayingBarSkipForwardButtonDisplayed = () =>{
        return nowPlayingBarSkipForwardButton.isDisplayed();
    };
    
    this.nowPlayingBarRepeatButtonDisplayed = () =>{
        return nowPlayingBarRepeatButton.isDisplayed();
    };

    this.nowPlayingBarVolumeBarDisplayed = () =>{
        return nowPlayingBarVolumeBar.isDisplayed();
    };

    this.clickCreatePlaylist = async () =>{
        await createPlaylistButton.click();
    };

    this.nameTheCreatedNewPlaylist = async (playlistName) =>{
        await playlistNameInputBox.sendKeys(playlistName);
    };

    this.clickGreenButton = async () =>{
        await createDeleteGreenButton.click();
    };

    this.getCreatedPlaylistNameTitle = async () =>{
        return await createdPlaylistName.getAttribute('title');
    };

    this.rightClick = async (playlistIndex) =>{
        await playlistsListsInYourLibrary.then(async list => {
            await actions.contextClick(list[playlistIndex]).perform();
        });
    };
    
    this.clickDeleteButtonForDeletingCreatedPlaylistInYourLibrary = async () =>{
        await deleteButtonForDeletingCreatedPlaylistInYourLibrary.click();
    };

};

module.exports = new SpotifyWebPlayer();