function initNews() {
  let aboutElement = document.getElementById("news");
  aboutElement.onclick = function change() {
    aboutElement.style.fontSize = "50px";
    aboutElement.style.backgroundColor = "yellow";
    aboutElement.style.color = "red";
  };
}

function renderNews() {
  fetch("../News/News.html")
    .then((response) => response.text())
    .then((html) => {
      root.innerHTML = html;

      const script = document.createElement("script");
      script.src = "../News/News.js";
      script.onload = () => {
        initAbout();
      };
      document.body.appendChild(script);
    });
}
