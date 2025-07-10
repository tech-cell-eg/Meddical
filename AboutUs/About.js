function initAbout() {
  let aboutElement = document.getElementById("about");

}

function renderAbout() {
  fetch("../AboutUs/About.html")
    .then((response) => response.text())
    .then((html) => {
      root.innerHTML = html;

      const script = document.createElement("script");
      script.src = "../AboutUs/About.js";
      script.onload = () => {
        initAbout();
      };
      document.body.appendChild(script);
    });
}
