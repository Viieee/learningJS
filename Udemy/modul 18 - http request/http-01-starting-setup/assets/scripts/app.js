const listElement = document.querySelector('.posts') // ul element
const postTemplate = document.getElementById('single-post') // template element

// http request require XMLHttpRequest object
const xhr = new XMLHttpRequest();

// configuring the http object
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts'); // first step

// pre-configuring the response (parsing the response) into js objects/arrays
xhr.responseType = 'json'

// event listener using on load (alternative to addEventListener because using it in XMLHttpRequest object is not supported in some browser)
xhr.onload = function(){
    // this function will handle upcoming responses

    // extracting the response
    console.log(xhr.response) // this is the response fetched from the server (in form of JSON data as the default)

    // converting the JSON data into js objects and arrays with JSON helper method parse()
    // const listOfPosts = JSON.parse(xhr.response);
    // console.log(listOfPosts)
    const listOfPosts = xhr.response;

    // inserting the response into list item on the template element
    for(const post of listOfPosts){
        const postEl = document.importNode(postTemplate.content, true); // cloning the content of the template element, so in this case the li element
        console.log(postTemplate.content);
        postEl.querySelector('h2').textContent = post.title.toUpperCase();
        postEl.querySelector('p').textContent = post.body;

        // appending the element inside of the template into the ul element
        listElement.append(postEl);
    }
}

xhr.send(); // sending the request


