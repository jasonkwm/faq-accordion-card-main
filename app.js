const questions = document.querySelectorAll(".qna-items");

//Hover Effect(orange text,hide answer) and Dropdown
questions.forEach((q) => {
  //Add Hover Effect to all .qna-items
  q.classList.add("hover-event");
  q.addEventListener("click", (e) => {
    questions.forEach((n) => {
      //Remove Previous question with dropdown and add hover effect
      n.classList.remove("dropdown");
      n.classList.add("hover-event");
    });
    // Display answer and remove hover effect
    q.classList.add("dropdown");
    q.classList.remove("hover-event");
  });
});
