function initDoctors() {
  let aboutElement = document.getElementById("doctors");
  aboutElement.onclick = function change() {
    aboutElement.style.fontSize = "50px";
    aboutElement.style.backgroundColor = "yellow";
    aboutElement.style.color = "red";
  };
}

function renderDoctors() {
  fetch("../Doctors/Doctors.html")
    .then((response) => response.text())
    .then((html) => {
      root.innerHTML = html;

      const script = document.createElement("script");
      script.src = "../Doctors/Doctors.js";
      script.onload = () => {
        initAbout();
      };
      document.body.appendChild(script);
    });
}
