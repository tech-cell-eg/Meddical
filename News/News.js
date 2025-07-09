function initNews() {
  let aboutElement = document.getElementById("news");

}

function renderNews() {
  fetch("../News/News.html")
    .then((response) => response.text())
    .then((html) => {
      root.innerHTML = html;

      const script = document.createElement("script");
      script.src = "../News/News.js";
      script.onload = () => {
        initNews();
      };
      document.body.appendChild(script);
    });
}
