document.getElementById("showAnswers").addEventListener("click", function() {
    document.querySelectorAll(".question").forEach((question, index) => {
        let selectedAnswer = question.querySelector("input:checked, select");
        let feedback = question.querySelector(".feedback");
        let correctAnswer = question.querySelector("input[value='correcto'], input[value='verdadero'], select option[value='correcto']");
        
        if (selectedAnswer && selectedAnswer.value === correctAnswer.value) {
            feedback.textContent = "✅ Respuesta correcta";
            feedback.classList.add("correct");
        } else {
            feedback.textContent = "❌ Respuesta incorrecta";
            feedback.classList.add("incorrect");
        }
        feedback.classList.remove("hidden");
    });

    document.querySelectorAll(".answer").forEach(answer => answer.classList.remove("hidden"));
});

