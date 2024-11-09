var links = document.querySelectorAll(".nav-bar ul li a");
var pages = ["index.html", "categories.html"];

links.forEach((e) => {
  var url = window.location.href;
  var page = url.split("http://127.0.0.1:5500/")[1];
  if (pages.includes(page)) {
    e.classList.add("active");
  } else {
    e.classList.remove("active");
  }
});
