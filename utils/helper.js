var listOfTasks = require ('../data/listOfTasks.json');
var spotifyCredentials = require ('../data/spotifyCredentials.json');

var Tasks = function() {

this.getTask = async (taskNumber) => {
    return await listOfTasks[taskNumber].trim();
};

this.getDisplayedTask = (taskNumber) => {
    return listOfTasks[taskNumber].replace(/\s{2,}/g,' ').trim(); //Regex to remove all whitescape except one between words
};

this.getValidUsername = (validUsername) => {
    return spotifyCredentials[validUsername];
};

this.getValidPassword = (validPassword) => {
    return spotifyCredentials[validPassword];
};

this.getInvalidUsername = (invalidUsername) => {
    return spotifyCredentials[invalidUsername];
};

this.getInvalidPassword = (invalidPassword) => {
    return spotifyCredentials[invalidPassword];
};
};
module.exports = new Tasks();
