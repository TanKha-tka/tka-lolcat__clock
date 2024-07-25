var wakeupTime = 7;
var noon = 12;
var lunchTime = 12;
var napTime = lunchTime + 2;
var partyTime;
var evening = 18;

// Getting it to show the current time on the page
var showCurrentTime = function() {
    var clock = document.getElementById('clock');
    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    var meridian = 'AM';

    // Set hours
    if (hours >= noon) {
        meridian = 'PM'
    }

    if (hours > noon) {
        hours = hours - 12;
    }

    // Set minutes
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    // Set seconds
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    // Put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";

    clock.innerText = clockTime
};

// Getting the clock to increment on its own and change out message and pictures
var updateClock = function() {
    var time = new Date().getHours();
    var messageText;
    var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
    
    var timeEventJS = document.getElementById("timeEvent");
    var lolcatImageJS = document.getElementById('lolcatImage');

    if (time == partyTime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
        messageText = "Let's party!";
    } else if (time == wakeupTime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
        messageText = "Wake up!";
    } else if (time == lunchTime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
        messageText = "Let's have some lunch!";
    } else if (time == napTime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
        messageText = "Sleep tight!";
    } else if (time < noon) {
        image = "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg";
        messageText = "Good morning!";
    } else if (time >= evening) {
        image = "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg";
        messageText = "Good evening!";
    } else {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";;
        messageText = "Good afternoon!";
    }

    console.log(messageText);
    timeEventJS.innerText = messageText;
    lolcatImageJS.src = image;

    showCurrentTime();
};

updateClock();

// Getting the clock to increment once a second
var oneSecond = 1000;
setInterval (updateClock, oneSecond);

// Getting the Party Time button to work
var partyButton = document.getElementById('partyTimeButton');

var partyEvent = function() {
    if (partyTime < 0) {
        partyTime = new Date().getHours()
        partyTimeButton.innerText - "Party Over!";
        partyTimeButton.style.backgroundColor = "#0a8dab";
    } else {
        partyTime = -1;
        partyTimeButton.innerText = "Party Time!";  
        partyTimeButton.style.backgroundColor = "#222";
    }
};

partyButton.addEventListener('click', partyEvent);
partyEvent();

// Activate Wake-up selector
var wakeUpTimeSelector = document.getElementById('wakeUpTimeSelector');

var wakeUpEvent = function() {
    wakeupTime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener('change', wakeUpEvent);

// Activates lunch selector
var lunchTimeSelector = document.getElementById('lucnchTimeSelector');

var lunchEvent = function() {
    lunchTime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener('change', lunchEvent);

// Activates Nap-time selector
var napTimeSelector = document.getElementById('napTimeSelector');

var napEvent = function() {
    napTime = napTimeSelector.value;
};

napTimeSelector.addEventListener('change', napEvent);