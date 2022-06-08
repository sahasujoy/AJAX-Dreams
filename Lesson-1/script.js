function loadData() 
{
    // create a new request
    const xhr = new XMLHttpRequest();

    // what to do when response arrives
    xhr.onload = function () {
        const container = document.getElementById('demo');
        container.innerHTML = xhr.responseText;
        // or we can use 
        // container.innerHTML = this.responseText;

        console.log(xhr.getAllResponseHeaders()); //it must be located at this onload function;
    };

    // prepare request- Methods:: GET (fetch data from server), POST (send data to server), PUT, PATCH (Update server's data), DELETE, OPTIONS
    // by default it is true(asynchronous). if it is false then it will be synchronous - that means it makes task one after another;
    xhr.open("GET", "Data/data.txt"); //it is true;
    // xhr.open("GET", "Data/data.txt", true); 
    // xhr.open("GET", "Data/data.txt", false); 
    

    // add a request header
    xhr.setRequestHeader("Dream", "Ajax");
    

    // send request
    xhr.send();

    //

    // abort
    // xhr.abort();
}