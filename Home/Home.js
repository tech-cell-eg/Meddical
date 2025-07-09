function initHome() {
  // let aboutElement = document.getElementById("home");
  // aboutElement.onclick = function change() {
  //   aboutElement.style.fontSize = "50px";
  //   aboutElement.style.backgroundColor = "yellow";
  //   aboutElement.style.color = "red";
  // };
}

renderHome();

function renderHome() {
  fetch("../Home/Home.html")
    .then((response) => response.text())
    .then((html) => {
      root.innerHTML = html;

      const script = document.createElement("script");
      script.src = "../Home/Home.js";
      script.onload = () => {
        initAbout();
      };
      document.body.appendChild(script);
    });
}
