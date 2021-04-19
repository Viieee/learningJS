const listElement = document.querySelector('.posts') // ul element
const postTemplate = document.getElementById('single-post') // template element
const form = document.querySelector('#new-post form'); // selecting form element inside a parent node with new-post as the id
const fetchButton = document.querySelector('#available-posts button');


function sendHttpRequest(method, url, data = null){
    // data parameter is optional (in this case for the post method)

    const promise = new Promise((resolve, reject)=>{
        // http request require XMLHttpRequest object
        const xhr = new XMLHttpRequest();
        
        // configuring the http object
        xhr.open(method, url); // first step
        
        // pre-configuring the response (parsing the response) into js objects/arrays
        xhr.responseType = 'json'
        
        // event listener using on load (alternative to addEventListener because using it in XMLHttpRequest object is not supported in some browser)
        xhr.onload = function(){
            // this function will handle upcoming responses
            resolve(xhr.response);
            // extracting the response
            console.log(xhr.response) // this is the response fetched from the server (in form of JSON data as the default)
        
            // converting the JSON data into js objects and arrays with JSON helper method parse()
            // const listOfPosts = JSON.parse(xhr.response);
            // console.log(listOfPosts)
        }
        xhr.send(JSON.stringify(data)); // sending the request
    });
    return promise;
}

// fetching data using promise only
// function fetchPosts(){
//     sendHttpRequest('GET', 'https://jsonplaceholder.typicode.com/posts')
//     .then((responseData) =>{
//         const listOfPosts = responseData;
//         // inserting the response into list item on the template element
//         for(const post of listOfPosts){
//             const postEl = document.importNode(postTemplate.content, true); // cloning the content of the template element, so in this case the li element
//             console.log(postTemplate.content);
//             postEl.querySelector('h2').textContent = post.title.toUpperCase();
//             postEl.querySelector('p').textContent = post.body;
    
//             // appending the element inside of the template into the ul element
//             listElement.append(postEl);
//         }
//     })
// }

// fetching data using promise + async await 
async function fetchPosts(){
    const responseData = await sendHttpRequest('GET', 'https://jsonplaceholder.typicode.com/posts');

    const listOfPosts = responseData;

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

async function createPost(title, content){
    const userId = Math.random(); 
    // post object
    const post = {
        title: title,
        body: content,
        userId: userId // naming of this property is caused by the naming requirement of the API i'm using 
                      // to learn about this topic, it's called jsonplaceholder.typicode.com
    }

    sendHttpRequest('POST','https://jsonplaceholder.typicode.com/posts', post);

}

// createPost('CONTOH', 'baru nih hehehehe');

// event listener
fetchButton.addEventListener('click', ()=>{
    fetchPosts();
});

form.addEventListener('submit', event => {
    event.preventDefault();
    const enteredTitle = event.currentTarget.querySelector('#title').value;
    const enteredContent = event.currentTarget.querySelector('#content').value;

    createPost(enteredTitle, enteredContent);
})