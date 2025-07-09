function initServices() {
  let aboutElement = document.getElementById("services");
  aboutElement.onclick = function change() {
    aboutElement.style.fontSize = "50px";
    aboutElement.style.backgroundColor = "yellow";
    aboutElement.style.color = "red";
  };
}

function renderServices() {
  fetch("../Services/Services.html")
    .then((response) => response.text())
    .then((html) => {
      root.innerHTML = html;

      const script = document.createElement("script");
      script.src = "../Services/Services.js";
      script.onload = () => {
        initServices();
      };
      document.body.appendChild(script);
    });
}
