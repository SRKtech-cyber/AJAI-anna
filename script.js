document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz');

    const questions = [
        {
            lesson: "What is the main benefit of drinking water regularly?",
            options: ["Hydration", "Increased energy", "Improved muscle strength"],
            answer: "Hydration"
        },
        {
            lesson: "Which exercise is most commonly associated with cardiovascular health?",
            options: ["Running", "Weight lifting", "Stretching"],
            answer: "Running"
        },
        {
            lesson: "What is a common recommendation for a healthy diet?",
            options: ["Eat plenty of fruits and vegetables", "Skip breakfast", "Eat more sweets"],
            answer: "Eat plenty of fruits and vegetables"
        }
    ];

    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `
            <p class="question-text">${q.lesson}</p>
            ${q.options.map(option => `
                <button onclick="checkAnswer('${q.answer}', '${option}')">${option}</button>
            `).join('')}
        `;
        quizContainer.appendChild(questionDiv);
    });
});

function checkAnswer(correctAnswer, selectedAnswer) {
    if (correctAnswer === selectedAnswer) {
        alert('Correct! Well done.');
    } else {
        alert('Try again!');
    }
}
