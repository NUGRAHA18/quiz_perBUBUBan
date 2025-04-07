const questions = [
    {
      question: "Kamu sayang aku apa engga ? ",
      options: ["ga", "ga", "IYA", "ga"],
      answer: 2
    },
    {
      question: "Siapa yang bilang 'aku sayang kamu' duluan?",
      options: [ "ALLIFA",],
      answer: 0
    },
    {
      question: "aku mau cium boleh ga?",
      options: ["ga", "ga", "ga", "BOLEH"],
      answer: 3
    }
  ];
  
  let quizContainer = document.getElementById("quiz-container");
  let submitBtn = document.getElementById("submit");
  let resultContainer = document.getElementById("result");
  
  let userAnswers = [];
  
  function loadQuiz() {
    questions.forEach((q, index) => {
      let qBlock = document.createElement("div");
      qBlock.innerHTML = `
        <p><strong>${index + 1}. ${q.question}</strong></p>
        ${q.options.map((opt, i) => `
          <label>
            <input type="radio" name="q${index}" value="${i}"> ${opt}
          </label><br>
        `).join("")}
        <br/>
      `;
      quizContainer.appendChild(qBlock);
    });
  }
  
  submitBtn.addEventListener("click", () => {
    let score = 0;
    questions.forEach((q, i) => {
      let selected = document.querySelector(`input[name="q${i}"]:checked`);
      if (selected && parseInt(selected.value) === q.answer) {
        score++;
      }
    });
  
    let message = "";
    if (score === questions.length) {
      message = "Kamu tau semua tentang kita! ❤️";
    } else if (score >= 1) {
      message = "Lumayan, tapi masih perlu diingat nih! 😘";
    } else {
      message = "Duh, jangan-jangan kamu pacar orang lain? 😆";
    }
  
    resultContainer.innerHTML = `<h2>Skor kamu: ${score}/${questions.length}</h2><p>${message}</p>`;
  });
  
  loadQuiz();
  