// содать маленькую форму с полями имени, фамилии и возраста
// после сабмита формы сохранять данные о пользователи в localeStorage, кроме значение имени фамилии и возраста сохранять значение isAdult(true/false  исохдя из возраста пользователья)
const regForm = document.getElementById('form')


regForm.addEventListener('submit', function(event){
    event.preventDefault();
    const firstName = document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;
    const ageP = document.getElementById('ageP').value;

    const users = {
        fname: firstName, 
        lName: lastName, 
        age:ageP, 
        isAdult: ageP >=18 ? true : false }

        const userJSON = JSON.stringify(users);
        localStorage.setItem('userData', userJSON)
        form.reset()
    
})



// e.preventDefault();
// const name = document.getElementById("name").value;
// const lastName = document.getElementById("lastName").value;
// const age = document.getElementById("age").value;

// const userObject = {
//     name,
//     lastName,
//     age,
//     isAdult: age >= 18 ? true : false
// };

// const stringifiedObject = JSON.stringify(userObject);
// localStorage.setItem("user", stringifiedObject);
// form.reset();
// })
// }

// document.addEventListener("DOMContentLoaded", saveFormValue)

