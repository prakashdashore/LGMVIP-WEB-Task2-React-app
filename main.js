let box = document.getElementById("cards");

let API = async () => {
  let response = await fetch("https://reqres.in/api/users?page=1");
  let file = await response.json();
  let info = file.data
    .map((element) => {
      return`<div class="wrapper">
      <div class="img-area">
          <div class="inner-area">
              <img src="${element.avatar}"
                  alt="">
          </div>
      </div>
      <div class="icon arrow"><i class="ri-anticlockwise-2-line"></i></div>
      <div class="icon dots"><i class="ri-strikethrough-2"></i></div>
      <div class="name">${element.first_name} ${element.last_name}</div>
      <div class="about">User-ID :${element.id}</div>
      <div class="about">Email-Add :${element.email}</div>
      <div class="social-icons">
          <a href="#" class="fb"><i class="ri-linkedin-fill"></i></a>
          <a href="#" class="twitter"><i class="ri-twitter-fill"></i></a>
          <a href="#" class="insta"><i class="ri-github-fill"></i></a>
          <a href="#" class="yt"><i class="ri-discord-fill"></i></a>
      </div>

  </div>`

    })
    .join("");
  cards.innerHTML = info;
};

let navBtn = document.getElementById("nav-btn");
navBtn.addEventListener("click", () => {
  cards.innerHTML = `<p1 id="tagline" class='load'>Getting Data From the API..!</p1>`;
  setTimeout(() => {
    API();
  }, 2000);
});