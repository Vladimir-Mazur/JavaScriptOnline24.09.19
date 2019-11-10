// Отображать список книг
// Добавление книги
// Сортирока (по цене, по алф)
// Фильтрация (по стране, по автору)
// валидация
// редактирование книги
// сохранение в локал стор

//Название книги, цена, автор, страна,
// картинка(по умолчанию), рейтинг(select), жанр (строка)
// - массив

const ARRAY_FIELDS = [
  { name: "book_name", label: "Название" },
  { name: "price", label: "Цена" },
  { name: "author", label: "автор" },
  { name: "country", label: "страна" },
  { name: "url", label: "картинка" },
  {
    name: "rate",
    label: "рейтинг",
    choices: [1, 2, 3, 4, 5],
    type: "select"
  },
  { name: "genre", label: "жанр" }
];

let books = [];
const addedBooks = document.createElement("div");
addedBooks.classList.add("new-book-list");
const body = document.querySelector('body');
body.append(addedBooks)

class Field {
  constructor({ name, label }) {
    this.name = name;
    this.label = label;
  }
}

class InputField extends Field {
  render() {
    const html = `<label class=${this.name}><span>${this.label}</span>
           <input name=${this.name} value=''>
       </label>`;
    return html;
  }
}

class SelectField extends Field {
  constructor(field) {
    super(field);
    const { choices } = field;
    this.choices = choices;
  }
  render() {
    const html = `<label class=${this.name}><span>${this.label}</span>
           <select name=${this.name}>
               ${this.choices.map(choice => `<option>${choice}</option>`)}
           </select>
       </label>`;
    return html;
  }
}

class Form {
  constructor(selector) {
    this.selector = selector;
    this.init();
  }
  init() {
    const form = document.createElement("form");
    const bookForm = document.querySelector(this.selector);
    ARRAY_FIELDS.forEach(field => {
      const inputName =
        field.type === "select"
          ? new SelectField(field)
          : new InputField(field);
      const html = inputName.render();
      form.insertAdjacentHTML("beforeend", html);
    });
    const divBtn = document.createElement("div");
    divBtn.classList.add("btn-default");
    const btn = document.createElement("button");
    btn.textContent = "Добавить книгу";
    btn.addEventListener("click", this.addBook);
    divBtn.append(btn);
    form.append(divBtn);
    bookForm.append(form);

    const sort = document.createElement("button");
    sort.classList.add("sort-btn");
    sort.textContent = "Сортировать от дешевых к дорогим";
    sort.addEventListener("click", this.sortPlusBook);
    form.append(sort);
    bookForm.append(form);

    const sortReserve = document.createElement("button");
    sortReserve.classList.add("sort-btn");
    sortReserve.addEventListener("click", this.sortMinusBook);
    sortReserve.textContent = "Сортировать от дорогих к дешевым";
    form.append(sortReserve);
    bookForm.append(form);
  }
  addBook(event) {
    event.preventDefault();
    const book = ARRAY_FIELDS.reduce((acc, { name }) => {
      const input = document.querySelector(`[name="${name}"]`).value;
      return { ...acc, [name]: input };
    }, {});
    books.push(book);
    listBooks.updateListBooks();
    const htmlForm = document.querySelector("form");
    htmlForm.reset();
  }
  sortPlusBook(book) {
    book.preventDefault();
    const newBooks = books.sort((a, b) => {
        return a.price - b.price;
    })
    const allBookList = document.querySelector('#book-list');
    allBookList.innerHTML = '';
    newBooks.forEach(field => {
        let bookList = new ListBooks(field)
        bookList.updateListBooks()
    })
  }
  sortMinusBook(book) {
    book.preventDefault();
    const newBooks = books.sort((a, b) => {
        return b.price - a.price;
    })
    const allBookList = document.querySelector('#book-list');
    allBookList.innerHTML = '';
    newBooks.forEach(field => {
        let bookList = new ListBooks(field)
        bookList.updateListBooks()
    })
  }
}

class Book {
  constructor(book) {
    this.book = book;
  }
  render() {
    const { book_name, price, author, country, url, rate, genre } = this.book;
      const html = `<div class="line"></div>
        <div class="new-book">
            <img src="${url}">
            <h2>${book_name}</h2>
            <div class="author book-parametrs"><span>Автор: </span><span>${author}</span></div>
            <div class="price book-parametrs"><span>Цена: </span><span class="price">${price}$</span></div>
            <div class="genre book-parametrs"><span>Жанр: </span><span>${genre}</span></div>
            <div class="country book-parametrs"><span>Страна: </span><span>${country}</span></div>
            <div class="rate book-parametrs"><span>Рейтинг:</span><span>${rate}</span></div>
            <button class="btn-default btn-buy">Купить</button>
        </div>`;
      return html;
  }
}

class ListBooks {
  updateListBooks() {
    const bookList = document.querySelector(".new-book-list");
    let html = '';
    bookList.innerHTML = '';
    books.forEach(book => {
      const oneBook = new Book(book);
      html = oneBook.render();
      bookList.insertAdjacentHTML("beforeend", html);
    });
  }
}

const form = new Form("#book-form");
const listBooks = new ListBooks();


//Добавить верстку на форму
//Добавить верстку на список книг
//Добавить возможность отображать картинку по url
//Пофиксить ошибку с добавлением книг на страницу
//Написать метод для добавления одной книги (сейчас добаляются все)

//Реализовать минимум одну из задач: (внизу есть пара подсказок для задач со *)
//1.* Добавить метод validate в класс Form. Метод должен пройтись по объекту book(метод addBook) и проверить
//все ли поля заполнены правильно.

//2.* Добавить сортировку по цене. СортировкИ "от дешевых к дорогим" / "от дорогих к дешевым"

//3.* Добавить фильтрацию по жанрам.

//4. Добавить сортировку по названию книги

//5. Добавить фильтр по рейтингу

// Подсказки

//  Для сортировок. В js сделать две кнопки (или селект). При нажатии на кнопку сортируем глобальный массив books,
//  потом удаляем все книги со страницы и запускаем метод updateListBooks()

// Для фильтров. Сделайте в js список жанров и выведите их списком checkboxes.
// Создайте массив, в котором будет хранится список выбранных жанров. (selectedGenres)
// При нажатии на checkbox с фильтром, нужно добавлять в selectedGenres новый жанр, или, если такой жанр уже есть в этом массиве - удалять
// Сделать кнопку "отфильтровать"
// При нажатии на кнопку запускать метод filter(), который будет проходить по глобальному массиву books и проверять у каждого
// элемента строку genre. То есть, есть ли в этой строке, хотя бы один элемент массива selectedGenres.
// После фильтрации массива books, запускаем метод updateListBooks
// И ещё. Если вы будете изменять массив books, то после первой же фильтрации у вас потеряется часть элементов. Советую создать
//ещё один массив - unfilteredBooks

//Для валидации. Начнем с того, что нужно определить, что значит "заполнены правильно".
// Добавьте в массив, который описывает поля формы, несколько полей: обязательноЗаполнить, минКоличествоСимволов,
// максКоличествоСимволов, сообщениеОбОшибке - тут будет текст, который вы будете где-то выводить