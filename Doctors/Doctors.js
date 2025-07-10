function initDoctors() {
  let aboutElement = document.getElementById("doctors");
}

function renderDoctors() {
  fetch("../Doctors/Doctors.html")
    .then((response) => response.text())
    .then((html) => {
      root.innerHTML = html;

      const script = document.createElement("script");
      script.src = "../Doctors/Doctors.js";
      script.onload = () => {
        initDoctors();
      };
      document.body.appendChild(script);
    });
}
