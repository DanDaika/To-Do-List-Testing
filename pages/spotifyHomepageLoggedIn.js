var SpotifyHomepageLoggedIn = function() {
    var profileButton = element(by.css('.mh-profile-title.svelte-kdyqkb'));
    var logOutButton = element(by.css('.mh-subtle.svelte-xcjamp'));
    var launchWebPlayerButton = element(by.css('.btn.btn-stroked-dark'));
  
    this.getUrl = async(url) =>{
        await browser.get(url);
    };

    this.getCurrentUrl = async() =>{
        return await browser.getCurrentUrl();
    };

    this.clickProfileButton = async () =>{
        await profileButton.click();
    };

    this.clickLogOutButton = async () =>{
        await logOutButton.click();
    };

    this.clickWebPlayerButton = async () =>{
        await launchWebPlayerButton.click();
    };

};

module.exports = new SpotifyHomepageLoggedIn();