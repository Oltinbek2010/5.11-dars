const btn = document.querySelector('button');
const wrapper = document.querySelector('#wrapper');
const todo = document.createElement('div')
function createCards(todo) {
    return `
    <div class="todo">  
        <h3>${todo.albumId}</h3> 
        <h3>${todo.id}</h3> 
        <p>${todo.title}</p>
        <p>${todo.url}</p> 
        <p>${todo.thumbnailUrl}</p> 
    </div>
    `;
}

document && document.addEventListener('DOMContentLoaded', (event) => {
    event.preventDefault();

    fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'Get'
    })
    .then((response) => {
        if (response.status == 200) {
            return response.json();
        }
    })
    .then(data => {
        wrapper.innerHTML = '';
        if (data.length) {
            data.forEach(todo => {
                let card = createCards(todo)
                wrapper.innerHTML += card
            });
        }
    })
    .catch(err => {
        console.log(err);
    })
})
