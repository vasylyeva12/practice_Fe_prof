let postId = 1;
const root = document.querySelector('#root')
const loadButton = document.querySelector('.load')

function render({title, body}) {
    const container = document.createElement('div')
    const titleElem = document.createElement('p')
    const bodyElem = document.createElement('p')
    
    titleElem.innerText = title
    bodyElem.innerText = body
    container.append(titleElem, bodyElem)
    root.append(container)
        
}

loadButton.addEventListener('click', () => {
    const link = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    fetch(link)
        .then((resp) => resp.json())
        .then(render) 
        postId++
})
