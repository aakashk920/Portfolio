document.addEventListener("DOMContentLoaded", function() {
    const textItems = [" Aakash Kashyap", " Full Stack Developer", " Front End Developer", " Back End Developer"];
    let currentItem = 0;
    let isDeleting = false;
    let textIndex = 0;
    let speed = 100; // Adjust the typing speed here
    let delay = 1500; // Adjust the delay time here
    let textElement = document.querySelector(".home-text h1");

    function type() {
      if (isDeleting && textIndex <= 0) {
        isDeleting = false;
        currentItem = (currentItem + 1) % textItems.length;
        delay = 1500;
      }

      if (textIndex < textItems[currentItem].length && !isDeleting) {
        textElement.textContent += textItems[currentItem][textIndex];
        textIndex++;
      } else {
        isDeleting = true;
        textElement.textContent = textItems[currentItem].substring(0, textIndex);
        textIndex--;
        delay = 500;
      }

      setTimeout(type, isDeleting ? speed / 2 : speed);
    }

    setTimeout(type, delay);
  });