function loadData(callback) {
    // create a new request
    const xhr = new XMLHttpRequest();

    // what to do when response arrives
    xhr.onload = function () {
        callback(this);
        // or we can use 
        // container.innerHTML = this.responseText;
    };

    // prepare request- Methods:: GET (fetch data from server), POST (send data to server), PUT, PATCH (Update server's data), DELETE, OPTIONS
    xhr.open("GET", "Data/data.txt ");

    // add a request header
    xhr.setRequestHeader("Dream", "Ajax");

    // send request
    xhr.send();

    // abort
    // xhr.abort();

}


function callback1(xhr) {
    const container = document.getElementById("demo1");
    container.innerHTML = xhr.responseText;
}

function callback2(xhr) {
    const container = document.getElementById("demo2");
    container.innerHTML = xhr.responseText;
}