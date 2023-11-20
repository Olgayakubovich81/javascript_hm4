// Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers.


const numbersDiv = document.querySelector('.numbers')
for(let i = 100; i >= 50; i-=10) {
  console.log(i); 
  const newPElem = document.createElement("p") 
     newPElem.innerText = "какой чудесный день"
  numbersDiv.append(newPElem)}




// Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом strings_container. Строки взять произвольные.

const strArray = ["Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipisicing", "elit.", "Nam", "perferendis", "debitis", "reiciendis", "enim", "rerum", "animi", "vero", "obcaecati", "fuga"]


const stringContainerDiv = document.querySelector(".string_container")
for(let i = 0; i <= strArray.length-1; i++) {
  console.log(strArray[i]); 
  const newPElem = document.createElement("p") 
  newPElem.innerText = strArray[i]
  stringContainerDiv.append(newPElem)} 



// Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, last_name и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом users_container.

const users = [
    {
        first_name: "Olga",
        last_name: "Muller",
        age: 30
      },

      {
      first_name: "Tim",
      last_name: "Goldberg",
      age:15
    },
{
    first_name: "Tom",
    last_name: "Schneider",
    age:25
  },
{

  first_name: "Ivan",
  last_name: "Ivanov",
  age:45
}

]

const usersContainer = document.querySelector('.users_container');

for (let i = 0; i < users.length; i++) {
  const user = users[i];
  if (user.age >= 18) {
    const card = document.createElement('div');
    card.classList.add('user_card');
    const name = document.createElement('p');
    name.innerText = `Имя: ${user.first_name} ${user.last_name}`;
    const age = document.createElement('p');
    age.innerText = `Возраст: ${user.age}`;

    card.append(name);
    card.append(age);

      usersContainer.append(card);
  }
}

