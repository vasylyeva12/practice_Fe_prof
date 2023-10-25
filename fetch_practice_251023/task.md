1. грузить данные поста при нажатии на кнопку "Load"
Добавили кнопку в html и задали класс
 <button class="load">Load</button>
 Добавил кнопку через querySelector
const loadButton = document.querySelector('.load')
Вызвали кнопку чезез функцию в фиче
loadButton.addEventListener('click', () => {
    fetch(link)
        .then((resp) => resp.json())
        .then(render) 
})

 2. при нажатии на кнопку прошлый пост удалялся и грузился пост со следующим id