
// If the axios request is successful this function will run. This function uses the data 
// that is brought in by the request to inject code onto the page
function randomActivitySuccess(res) {
    console.log(res.data);
    let randomActivityData = res.data;
    let container = document.getElementById('randomContainer');
    container.innerHTML += `<div><h3>${randomActivityData.activity}</h3><p>${randomActivityData.participants}</p></div>`;
}

// if the axios request failures a error message will appear in the console log
function randomActivityFailure(err) {
    console.log(err);
}

// this function will be used as an event, this function requests the data from the api 
// axios does the work for us, even parseing the JSON for us
function randomActivity(e) {
    console.log(e);
    axios.request({
        method: "GET",
        url: `http://www.boredapi.com/api/actiity/`

    }).then(randomActivitySuccess).catch(randomActivityFailure);
}

// add click event
document.getElementById('randomButton').addEventListener("click", randomActivity);



// If the axios request is successful this function will run. This function uses the data 
// that is brought in by the request to inject code onto the page
function participantActivitySuccess(res) {
    console.log(res.data);
    let participantActivityData = res.data;
    let container = document.getElementById('participantsContainer');
    container.innerHTML += `<div><h3>${participantActivityData.activity}</h3><p>${participantActivityData.participants}</p></div>`;

}


// if the axios request failures a error message will appear in the console log
function participantActivityFailure(err) {
    console.log(err);
}


// this function will be used as an event, this function requests the data from the api 
// axios does the work for us, even parseing the JSON for us
function participantActivity(e) {
    // use .value to set participantValue to the forms selected value
    // use participantValue in the url string to call the correct API according to the users chioce
    let participantValue = document.getElementById('participantsList').value;
    axios.request({
        method: "GET",
        url: `http://www.boredapi.com/api/activity?participants=${participantValue}`

    }).then(participantActivitySuccess).catch(participantActivityFailure);
}

// add click event
document.getElementById('participantButton').addEventListener("click", participantActivity);

