
//1eb1efaedc914cd4b5fa84a29f516b95

class Service {
    constructor () {
        this.key = '1eb1efaedc914cd4b5fa84a29f516b95';
        this.country = '';
        this.category = '';
        this.search = '';
        this.sorting = '';
    }
    sendRequest({country='', category=''}) {
        if (country !== '') {
            this.country = country;
        }
        if (category !== '') {
            this.category = category;
        }

        return fetch(`https://newsapi.org/v2/top-headlines?country=${this.country}&category=${this.category}&apiKey=${this.key}`)
            .then((response) => { return response.json()})
            .catch((err) => { console.error('Моя ошибка - ', err) })
    }
    searchRequst({search='', sortBy =''}) {
        if(search !== '') {
            this.search = search;
        }
        if(sortBy !== '') {
            this.sortBy = sortBy;
        }

        return fetch(`https://newsapi.org/v2/everything?q=${this.search}&sortBy=${this.sortBy}&apiKey=${this.key}`)
            .then((response) => { return response.json()})
            .catch((err) =>  {console.error('моя ошибка - ', err)})
    }
}

class UI {
    constructor () {
        this.service = new Service();
        this.layout = new LayoutNews();
    }
    init() {
        const country = document.querySelector('#country');
        const category = document.querySelector('#category');
        const search = document.querySelector('#search');
        const sort = document.querySelector('#sort')

        country.addEventListener('change', this.handleSelect.bind(this))
        category.addEventListener('change', this.handleSelect.bind(this))
        search.addEventListener('keyup', this.handleSearch.bind(this))
        sort.addEventListener('keyup', this.handleSearch.bind(this))
    }
    handleSelect(event) {
        const {id: selectName, value: selectValue} = event.target;
        this.service.sendRequest({[selectName]: selectValue})
            .then((response) => {
                this.layout.renderAll(response.articles)
            })
    }
    handleSearch(event) {
        const {id: selectName, value: selectValue} = event.target;
        this.service.searchRequst({[selectName]:selectValue})
        .then((response) => {
            this.layout.renderAll(response.articles)
        })
    }
}

class LayoutNews {
    constructor() {
        this.divRow = document.querySelector('#row');
    }
    renderAll(newsList) {
        this.divRow.innerHTML = '';

        newsList.forEach((news) => {
            const html = this.render(news);
            this.divRow.insertAdjacentHTML('beforeend', html);
        })
    }
    render (news) {
        return `<div class="col s12 m6">
                <div class="card"> 
                  <div class="card-image">
                     <img src="${news.urlToImage}"> 
                  </div>
                  <div class="card-content">
                     <span class="card-title">${news.title || ''}</span>
                     <p>${news.description || ''}</p> 
                  </div>
                  <div class="card-action">
                     <a href="${news.url}" target="_blank">Read more</a> 
                  </div> 
                </div>
            </div>`;
    }
}

const myUI = new UI();
myUI.init();
