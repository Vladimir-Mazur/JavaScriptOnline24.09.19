//Свойства. Задачи.
//Задача 1
const base = document.querySelector("article")
let text = document.querySelector("p");
const paragraph = document.createElement('div');
text = text.textContent;
paragraph.append('Результат ---->' + text);
base.append(paragraph)

// Задача 2
let someNode = document.querySelector('ul')
function getNodeInfo(node) {
   let domInfo = {}
   domInfo.type = node.nodeType;
   domInfo.name = node;
   domInfo.children = node.children;
   return domInfo;
}
console.log(getNodeInfo(someNode))

// Задача 3 
let links = Array.from(document.querySelectorAll("body a")).filter(
   link => link.closest("ul")
);

let resultLinks = [];

for (let i = 0; i < links.length; i++) {
   resultLinks.push(links[i].textContent)
}
console.log(resultLinks)

// Задача 4
//Воспользовался способность "Пропустить задачу"

//Свойства. Задачи.
// Задача 1
let ul = document.querySelector('ul')
ul.classList.add('list')
console.log(ul)




// Задача 2
let linkAfterUl = ul
while (linkAfterUl.tagName !== 'A' && linkAfterUl.nextElementSibling !== null) {
   linkAfterUl = linkAfterUl.nextElementSibling;
}

linkAfterUl.classList.add('list')
console.log(linkAfterUl)


// Задача 3
for (let i = 0; i < ul.children.length; i++) {
   if (i % 2 === 1) {
      let li = document.getElementsByTagName("li")[i - 1];
      li.classList.add('item')
   }
}

// Задача 4
let bodyLinks = Array.from(document.querySelectorAll("body a")).filter(
   link => link.closest("body")
);

for (let i = 0; i < bodyLinks.length; i++) {
   bodyLinks[i].classList.add('custom-link')
}

//Свойства. Задачи. Слайд 17
// Задача 1
for (let i = ul.children.length + 1; i <= 6; i++) {
   const newLi = document.createElement('li');
   newLi.classList.add('new-item')
   let text = 'item' + i;
   newLi.append(text);
   ul.append(newLi)
}

// Задача 3 
let body = document.querySelector('body')
let img = document.createElement('img')
img.src = 'img/обезьяна.jpg';
img.alt = 'обезьяна';
img.style.width = "300px"
body.insertAdjacentElement('afterbegin', img)
console.log(img)

// Задача 4
let mark = document.querySelector('mark')
let green = document.createElement('p')
green.classList.add('green')
let greenText = 'green'
green.insertAdjacentText('beforeend', greenText);
mark.insertAdjacentElement('beforeend', green)
console.log(green)

// Задача 6
const users = [
   {
     "_id": "5d220b10e8265cc978e2586b",
     "isActive": true,
     "balance": 2853.33,
     "age": 20,
     "name": "Buckner Osborne",
     "gender": "male",
     "company": "EMPIRICA",
     "email": "bucknerosborne@empirica.com",
     "phone": "+1 (850) 411-2997",
     "registered": "2018-08-13T04:28:45 -03:00",
       "nestedField": { total: 300 }
   },
   {
     "_id": "5d220b10144ef972f6c2b332",
     "isActive": true,
     "balance": 1464.63,
     "age": 38,
     "name": "Rosalie Smith",
     "gender": "female",
     "company": "KATAKANA",
     "email": "rosaliesmith@katakana.com",
     "phone": "+1 (943) 463-2496",
     "registered": "2016-12-09T05:15:34 -02:00",
       "nestedField": { total: 400 }
   },
   {
     "_id": "5d220b1083a0494655cdecf6",
     "isActive": false,
     "balance": 2823.39,
     "age": 40,
     "name": "Estrada Davenport",
     "gender": "male",
     "company": "EBIDCO",
     "email": "estradadavenport@ebidco.com",
     "phone": "+1 (890) 461-2088",
     "registered": "2016-03-04T03:36:38 -02:00",
       "nestedField": { total: 200 }
   }
 ];

// let table = document.createElement('table');
// let firstRow = document.createElement('tr')
// let th1 = '<th>#</th>';
// let th2 = '<th>Name</th>';
// let th3 = '<th>Email</th>';
// let th4 = '<th>Balance</th>';
// firstRow.append(th1)
// firstRow.append(th2)
// firstRow.append(th3)
// firstRow.append(th4)
// table.append(firstRow)
// base.insertAdjacentHTML('beforeend', firstRow)
const tableArr=['<table>'];
tableArr.push('<tr><th>' + '#' + '</th>' + '<th>' + 'Name' + '</th>' + '<th>' + 'Email' + '</th>' + '<th>' + 'Balance' + '</th>' + '</tr>');
for (i = 0; i < users.length; i++){
   tableArr.push('<tr style="border: 1px solid #000"><td>' + i + '</td>' + '<td>' + users[i]['name'] + '</td>' + '<td>' + users[i]['email'] + '</td>' + '<td>' + users[i]['balance'] + '</td>' + '</tr>');
}
let totalBalance = 0;

for (i = 0; i < users.length; i++){
   totalBalance += +users[i]['balance']
}

totalBalance = 'Total balance: ' + '<strong>' + totalBalance + '</strong>';

tableArr.push('<tr><td>' + '</td>' + '<td>' + '</td>' + '<td>' + '</td>' + '<td style="text-align: right">' + totalBalance + '</td>' + '</tr>');
tableArr.push('</table>');
document.getElementById('stat').innerHTML=tableArr.join('\n')
console.log(users.length)
