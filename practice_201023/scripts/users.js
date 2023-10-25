const users = [
    {  id: 1, name: "User 1", email: "user1@example.com", },
    {  id: 2, name: "User 2", email: "user2@example.com", },
    {  id: 3, name: "User 3", email: "user3@example.com", },
    {  id: 4, name: "User 4", email: "user4@example.com", },
    {  id: 5, name: "User 5", email: "user5@example.com", },
    {  id: 6, name: "User 6", email: "user6@example.com", },
    {  id: 7, name: "User 7", email: "user7@example.com", },
    {  id: 8, name: "User 8", email: "user8@example.com", },
    {  id: 9, name: "User 9", email: "user9@example.com", },
    {  id: 10, name: "User 10", email: "user10@example.com",},
    
  ];

  const root = document.querySelector('#root')

  users.forEach(users => {
    const userId = document.createElement('p')
    userId.innerHTML = `ID: ${users.id}`
    const lastName = document.createElement('p');
    lastName.innerText = `Name: ${name}`;
    const email = document.createElement('p')  
    email.innerText = `email: ${email}`;  
    const container = document.createElement('div');
    container.classList.add('card') 
    container.append(userId, lastName, email);
    root.append(container)

    
    container.addEventListener('click', () => {
        localStorage.setItem('selectUser', JSON.stringify(users))       
  })           
    })  
    
    
    
   
    
   
  

  //This array contains 10 user objects, each with an id, name, and email property. You can customize the user data as needed for your specific use case.
  //<!-- 1 Отрисовать 10 пользоватлеей через js -->
  // При клике на конкретного пользователя добавить в локал сторедж "selectedUser": <выбранный пользователь> -->