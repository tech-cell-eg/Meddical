function initServices() {
  let aboutElement = document.getElementById("services");
 
}

function renderServices() {
  fetch("../Services/Services.html")
    .then((response) => response.text())
    .then((html) => {
      root.innerHTML = html;

      const script = document.createElement("script");
      script.src = "../Services/Services.js";
      script.onload = () => {
        initAbout();
      };
      document.body.appendChild(script);
    });
}
