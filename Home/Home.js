function initHome() {
  let aboutElement = document.getElementById("home");
}

// renderHome();

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
