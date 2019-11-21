class CustomHttp {
  get(url, callback) {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.send();
      xhr.addEventListener('load', () => callback(xhr.responseText))
  }
  post(url, data, callback) {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', url);
      xhr.send(data);
      xhr.addEventListener('load', () => callback(xhr.responseText))

  }
}

const http = new CustomHttp();

http.get('https://jsonplaceholder.typicode.com/photos', (res) => {
  const parsedPosts = JSON.parse(res);
  const postForRendering = new Post();
  parsedPosts.forEach((post) => {
      postForRendering.render(post);
  })
});

class Post {
  constructor() {
      this.wrapper = document.querySelector('.text');
  }
  handleClick() {
      const postId = event.target.dataset.id;
      http.get('https://jsonplaceholder.typicode.com/photos?id=' + postId, (res) => {
        res= JSON.parse(res)
        let img = document.createElement('img')
        img.getAttribute('.img');
        img.src = res[0].url;
        const photoCol = document.querySelector('.photos')
        console.log("img", res)
        photoCol.append(img)
      });
  }
  render(post) {
      const div = document.createElement('div')
      div.textContent = post.title;
      div.setAttribute('data-id', post.id);
      div.addEventListener('click', this.handleClick)
      this.wrapper.append(div)
  }
}