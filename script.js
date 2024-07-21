document.addEventListener('DOMContentLoaded', (event) => {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    const guessButton = document.getElementById('guessButton');
    const resetButton = document.getElementById('resetButton');
    const guessInput = document.getElementById('guessInput');
    const feedback = document.getElementById('feedback');
    const attemptsDisplay = document.getElementById('attempts');

    guessButton.addEventListener('click', function() {
        let userGuess = parseInt(guessInput.value);
        attempts++;

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            feedback.textContent = 'Please enter a number between 1 and 100.';
            feedback.style.color = 'orange';
            return;
        }

        if (userGuess === randomNumber) {
            feedback.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
            feedback.style.color = 'lime';
            attemptsDisplay.textContent = '';
        } else if (userGuess < randomNumber) {
            feedback.textContent = 'Too low! Try again.';
            feedback.style.color = 'orange';
            attemptsDisplay.textContent = `Attempts: ${attempts}`;
        } else if (userGuess > randomNumber) {
            feedback.textContent = 'Too high! Try again.';
            feedback.style.color = 'red';
            attemptsDisplay.textContent = `Attempts: ${attempts}`;
        }
    });

    resetButton.addEventListener('click', function() {
        randomNumber = Math.floor(Math.random() * 100) + 1;
        attempts = 0;
        guessInput.value = '';
        feedback.textContent = '';
        attemptsDisplay.textContent = '';
        feedback.style.color = 'white';
    });
});
