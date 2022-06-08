function sendRequest(method, url, data) {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.onload = function () {
            //handle application error
            if(this.status >= 400) {
                reject(
                    `There was an application error and the response status is ${this.status}`
                );
            }
            resolve(this.response);
        };

        xhr.onerror = function () {
            reject("There was an error");
        };

        xhr.open(method, url);

        xhr.responseType = "json";

        xhr.send();
    });

    return promise;
}


function getData() {

    sendRequest("GET", "https://jsonplaceholder.typicode.com/todos/post").then((responseData) => {
        console.log(responseData);
    })
    .catch((err) => {
        console.log(err);
    });

    // const xhr = new XMLHttpRequest();

    // xhr.onload = function() {
    //     // console.log(JSON.parse(this.responseText));
    //     // console.log(JSON.parse(this.responseText).userId);
    //     // console.log(JSON.parse(this.responseText).title);

    //     //if we declare the type of response before sending request [xhr.responseType = "json";] then it will not be [console.log(JSON.parse(this.responseText));], it will be::
    //     console.log(this.response); 
    // };

    // xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1");

    // xhr.responseType = "json";

    // xhr.send();
}

function sendData() {
    sendRequest("POST", "https://jsonplaceholder.typicode.com/posts", JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
        })
    ).then((responseData) => {
        console.log(responseData);
    });
}

const getButton = document.getElementById("get");
const sendButton = document.getElementById("send");

getButton.addEventListener("click", getData);
sendButton.addEventListener("click", sendData);