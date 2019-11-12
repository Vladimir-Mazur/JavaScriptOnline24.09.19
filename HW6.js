//DOM. Задачи.
//Задача 1
console.log(document.querySelector("head"));

//Задача 2
console.log(document.querySelector("body"));

//Задача 3
console.log("list of children", document.body.children);

//Задача 4a
console.log(document.querySelector("div"));

//Задача 4б
let children = document.querySelector("div").children;

for (var i = 1; i < children.length - 1; ++i) {
  console.log(children[i]);
}

//DOM. Задачи. Вторая часть
//Задача 1
function isParent(parent, child) {
  let node = child.parentNode;
  if (child instanceof Element || child instanceof HTMLDocument) {
    while (node != null) {
      if (node == parent) {
        return true;
      }
      node = node.parentNode;
    }
  }
  return false;
}

console.log(document.body.children[1], document.querySelector("li"));
console.log(isParent(document.body.children[1], document.querySelector("li")));

//Задача 2
let links = Array.from(document.querySelectorAll("body a")).filter(
  link => !link.closest("ul")
);
console.log(links);

//Задача 3
let previousElem = document.querySelector("ul").previousElementSibling;
let nextElem = document.querySelector("ul").nextElementSibling;

console.log(previousElem, nextElem);

//Задача из Еще практика
const btn = document.getElementById("btn-push");
btn.addEventListener("click", () => {
  const user = document.querySelector('input[name="user"]').value;
  const login = document.querySelector('input[name="login"]').value;
  const password = document.querySelector('input[name="password"]').value;
  const checkbox = document.querySelector('input[name="checkbox"]').checked;
  if (
    (user.length > 2 &&
      user.length < 40 &&
      login !== "" &&
      password.length > 8 &&
      password.match(/[A-ZА-Я]/)) ||
    password.match(/[a-zа-я]/) ||
    (password.match(/\d/) && checkbox === true)
  ) {
    console.log("Все хорошо");
  } else {
    console.log("Все плохо");
  }
  console.log(user, login, password, checkbox);
});
