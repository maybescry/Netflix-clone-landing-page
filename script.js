////This Javascript vanila code used for the purpose of implementing style of Accordion to the FAQ section of the webpage.


document.addEventListener("DOMContentLoaded", () => {         
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const toggle = item.querySelector(".toggle");

    question.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");

      
      document.querySelectorAll(".faq-item.open").forEach(openItem => {
        openItem.classList.remove("open");
        openItem.querySelector(".faq-answer").style.display = "none";
        openItem.querySelector(".toggle").textContent = "+";
      });


      if (!isOpen) {
        item.classList.add("open");
        answer.style.display = "block";
        toggle.textContent = "×"; 
      }
    });
  });
});
