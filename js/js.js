let root = document.querySelector("#root");

const toTop = document.getElementById("toTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
});
toTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


function initHome() {
  let aboutElement = document.getElementById("home");
 
}


function renderHome() {
  fetch("../Home/Home.html")
    .then((response) => response.text())
    .then((html) => {
      root.innerHTML = html;

      const script = document.createElement("script");
      script.src = "../Home/Home.js";
      script.onload = () => {
        initHome();
      };
      document.body.appendChild(script);
    });
}

renderHome();
