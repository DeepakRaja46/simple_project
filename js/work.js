var menu = document.querySelector(".menu-list");
var link = menu.querySelectorAll("li");
var wd = menu.querySelector(".link1");
var mp = menu.querySelector("link2");
var software = menu.querySelector("link3");
var solution = menu.querySelector("link4");

console.log(wd);

 

for (var i = 0; i < link.length; i++) {
  link[i].addEventListener("click", function () {
    var current = document.getElementsByClassName(" active");
    current[0].className = current[0].className.replace(" active");
    this.className += " active";
  });
}

var workContent = document.querySelector(".work-content");
var website = workContent.querySelector(".website");
var mobile = workContent.querySelector(".mobile");
var content = workContent.querySelector(".content");

var cls = wd.className
console.log(website.classList[2])
console.log(cls)
if(wd.classList[2] === "active"){
  website.classList.add("display");
}