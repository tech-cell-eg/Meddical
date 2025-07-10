function initContact() {
  let aboutElement = document.getElementById("contact");


}

function renderContact() {
  fetch("../Contact/Contact.html")
    .then((response) => response.text())
    .then((html) => {
      root.innerHTML = html;

      const script = document.createElement("script");
      script.src = "../Contact/Contact.js";
      script.onload = () => {
        initContact();
      };
      document.body.appendChild(script);
    });
}
