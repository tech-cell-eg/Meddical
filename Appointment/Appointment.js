function initAppointment() {
  let aboutElement = document.getElementById("appointment");
  aboutElement.onclick = function change() {
    aboutElement.style.fontSize = "50px";
    aboutElement.style.backgroundColor = "yellow";
    aboutElement.style.color = "red";
  };
}

function renderAppointment() {
  fetch("../Appointment/Appointment.html")
    .then((response) => response.text())
    .then((html) => {
      root.innerHTML = html;

      const script = document.createElement("script");
      script.src = "../Appointment/Appointment.js";
      script.onload = () => {
        initAppointment();
      };
      document.body.appendChild(script);
    });
}
