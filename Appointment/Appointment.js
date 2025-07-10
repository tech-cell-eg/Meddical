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
        initAbout();
      };
      document.body.appendChild(script);
    });
}/**************************************/
document.addEventListener("DOMContentLoaded", function () {
  const doctors = [
    "Dr. Emily Thompson",
    "Dr. James Anderson",
    "Dr. Olivia Martinez",
    "Dr. William Smith",
    "Dr. Sophia Johnson",
    "Dr. Michael Brown"
  ];
  const dep =  [
    "Cardiology",
    "Dermatology",
    "Pediatrics",
    "Orthopedics",
    "Oncology",
    "Radiology",
    "Psychiatry",
    "Gastroenterology",
    "Urology",
    "Endocrinology"
  ];

  const doctorSelect = document.querySelector(".doctors");
  const departmentSelect = document.querySelector(".departments");

  doctors.forEach((doc) => {
    const option = document.createElement("option");
    option.value = doc;
    option.textContent = doc;
    doctorSelect.appendChild(option);
  });

  dep.forEach((dept) => {
    const option = document.createElement("option");
    option.value = dept.toLowerCase();
    option.textContent = dept;
    departmentSelect.appendChild(option);
  });
});
