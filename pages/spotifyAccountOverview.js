var SpotifyHomepageLoggedIn = function() {
    var spotifyLogo = element(by.css('.mh-header-primary.svelte-18o1xvt'));
  
    this.getCurrentUrl = async() =>{
        return await browser.getCurrentUrl();
    };

    this.clickSpotifyLogo = async () =>{
        await spotifyLogo.click();
    };

};

module.exports = new SpotifyHomepageLoggedIn();