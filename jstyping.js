const texts = [
  "Computer Science Student",
  "Web Developer",
  "Tech Enthusiast",
  "Future Software Engineer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  }

  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  const typingElement = document.getElementById("typing-text");
  typingElement.textContent = letter;

  // Add giggle (shake) effect
  typingElement.classList.add("giggle");

  if (letter.length === currentText.length) {
    setTimeout(() => {
      index = 0;
      count++;
    }, 1200);
  }

  setTimeout(type, 120);
})();
