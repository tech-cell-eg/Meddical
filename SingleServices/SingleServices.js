function initSingleServices() {
  let aboutElement = document.getElementById("singleServices");
  aboutElement.onclick = function change() {
    aboutElement.style.fontSize = "50px";
    aboutElement.style.backgroundColor = "yellow";
    aboutElement.style.color = "red";
  };
}

function renderSingleServices() {
  fetch("../SingleServices/SingleServices.html")
    .then((response) => response.text())
    .then((html) => {
      root.innerHTML = html;

      const script = document.createElement("script");
      script.src = "../SingleServices/SingleServices.js";
      script.onload = () => {
        initAbout();
      };
      document.body.appendChild(script);
    });
}
