class CustomHttp {
  get(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    xhr.addEventListener("load", () => callback(xhr.responseText));
  }
  post(url, data, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.send(data);
    xhr.addEventListener("load", () => callback(xhr.responseText));
  }
}

const http = new CustomHttp();

http.get("https://jsonplaceholder.typicode.com/photos", res => {
  const parsedPosts = JSON.parse(res);
  const postForRendering = new Post();
  parsedPosts.forEach(post => {
    postForRendering.render(post);
  });
});

class Post {
  constructor() {
    this.wrapper = document.querySelector("#photos");
  }
  render(post) {
    this.wrapper.insertAdjacentHTML(
      "beforeend",
      `<div class="img-wrapper" data-id="${post.id}">
               <a href="${post.url}">
                  <img src="${post.thumbnailUrl}">
               </a>
         </div>`
    );
  }
}
