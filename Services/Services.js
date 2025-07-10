function initServices() {
  const cards = document.querySelectorAll(".card");
  console.log(cards);
  cards.forEach((card) => {
    const image = card.querySelector(".image");
    const icon = card.querySelector(".icon"); 

    if (!image || !icon) return; 

    image.addEventListener("mouseenter", () => {
      icon.classList.add("d-none");
    });

    image.addEventListener("mouseleave", () => {
      icon.classList.remove("d-none");
    });
  });
}

function renderServices() {
  fetch("../Services/services.html")
    .then((response) => response.text())
    .then((html) => {
      root.innerHTML = html;

      const script = document.createElement("script");
      script.src = "../Services/services.js";
      script.onload = () => {
        initServices();
      };
      document.body.appendChild(script);
    });
}
