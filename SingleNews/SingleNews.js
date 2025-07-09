function initSingleNews() {
  let aboutElement = document.getElementById("singleNews");

}

function renderSingleNews() {
  fetch("../SingleNews/SingleNews.html")
    .then((response) => response.text())
    .then((html) => {
      root.innerHTML = html;

      const script = document.createElement("script");
      script.src = "../SingleNews/SingleNews.js";
      script.onload = () => {
        initAbout();
      };
      document.body.appendChild(script);
    });
}
