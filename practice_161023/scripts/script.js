let users = [
    {id: 1, first_name: 'Анатолий', last_name: 'Сидоров', age: 30, gender: 'm'},
    {id: 2, first_name: 'Степан', last_name: 'Грибов', age: 35, gender: 'm'},
    {id: 3, first_name: 'Ирина', last_name: 'Романова', age: 27, gender: 'f'},
    {id: 4, first_name: 'Олег', last_name: 'Куликов', age: 29, gender: 'm'},
    {id: 5, first_name: 'Иван', last_name: 'Митрофанов', age: 37, gender: 'm'}
]

// используя dom найдите элемент #root и впешите в него текст "Вот он"

const root = document.querySelector('#root')
// root.innerText = 'Вот он'

// создать функцию addCard, которая в качестве аргумента получает объект со свойствами first_name и last_name
// и добавляет в #root следующую структуру 

// на следующем занятии сделать rerender

function addCard({id,first_name, last_name, age, gender}) {
    const firstName = document.createElement('p');
    const lastName = document.createElement('p');
    const peopleAge = document.createElement('p')
    
    // у кажлой карточки добавить кнопку "удалить"
    const buttonDel = document.createElement('button')
    const container = document.createElement('div');

    // реализовать вывод фразу "Удален пользователь с id <номер id>"
    buttonDel.addEventListener('click', () => {
        console.log(`Удален пользователь с id: ${id}`);
        // при нажатии на кнопку создать нвоый массив с пользователями без пользователя
        // чью кнопку "удалить" мы нажали
        // записать получившийся массив в переменную users
        users = users.filter((user) => user.id !== id)
        rerender();
    })
    container.classList.add('card')

    // в ином случае розовый
    const genders = {
        m: '#3498db',
        f: '#fd79a8'
    };
    container.style.backgroundColor = genders[gender]

    container.style.fontSize = '30px';
    // в ином случае розовый
    // container.style.backgroundColor = gender === 'm' ? '#3498db' : '#fd79a8';
   

    firstName.innerText = first_name;
    lastName.innerText = last_name;
    // Возраст: <значение>
    peopleAge.innerText = `Возраст: ${age}`;
    buttonDel.innerText = 'Удалить'
    container.append(firstName, lastName, peopleAge, buttonDel);
    return container  
}

function message(text) {
    const peopleNull = document.createElement('p')
        peopleNull.innerText = text
        return peopleNull;
}
// создать функцию calculation. Которая возвращает параграф 
// с надписью "Кол-во пользователей: <значение>"

// вызвать функцию calculation в rerender и добавить этот параграф
// в root



function rerender() {
    root.innerText = '';
    if (users.length === 0) {        
        root.append(message ('пользователей нет'))
} else{
    const cards = users.map(user => addCard(user));
    root.append(...cards); 
}
    
}
rerender()

// если массив пустой, вывести добавить в #root параграф 
// с фразой "Пользователей нет"








// создать новый массив, которы состоит только из имен пользователей
// const nameNew = users.map(({first_name}) => first_name)

// // console.log(nameNew);

// // создать новый массив, которы состоит только из имен пользователей мужского пола

// const man = users
// .filter(({gender}) => gender === 'm')
// .map(({first_name}) => first_name)
// console.log(man);