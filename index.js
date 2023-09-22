const btnTranslate = document.querySelector(".translate_btn");
const textInput = document.querySelector('#text_input');
const outputArea = document.querySelector(".output");

// const serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";


const serverUrl = "https://api.funtranslations.com/translate/minion.json";

function getTranslationUrl(url, text) {
    return url +"?text=" + text;
}

function errorHandler(error) {
    console.log("Error Occured: ", error);
    alert("something wrong with the server! try again after some time");
}

function clickHandler() {
    console.log("Clicked!");
    // console.log("Input: ",textInput.value);
    // outputArea.innerText = textInput.value;

    var inputText = textInput.value; //input

    // calling server for procesing
    fetch(getTranslationUrl(serverUrl, inputText))
        .then(response => response.json())
        .then(json => outputArea.innerText = json.contents.translated) //output
        .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);









// console.log("Testing Mock Server");
// const url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

// by using callBack function
// fetch(url)
//     .then(response => response.json())
//     .then(json => console.log(json));

// fetch(url)
//     .then(function responseHandler(response) {return response.json()})
//     .then(function logJSON(json) {console.log(json)});







// creating testing form below three text
// function constructUrl(text) {
//     return url + "?text=" + text; 
// }

// function doFetch(url) {
//     fetch(url) 
//         .then(response => response.json())
//         .then(json => console.log(json));
// }

// const text1 = "I am iornman";
// const text2 = "I am batman";
// const text3 = "I am shaktiman";

// doFetch(constructUrl(text1));
// doFetch(constructUrl(text2));
// doFetch(constructUrl(text3));