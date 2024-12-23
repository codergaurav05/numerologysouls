document.getElementById('numerologyForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('nameInput').value.trim();
    const birthdate = document.getElementById('birthdateInput').value;
    const resultDiv = document.getElementById('result');

    const lifePathNumber = calculateLifePathNumber(birthdate);
    const expressionNumber = calculateExpressionNumber(name);
    const soulUrgeNumber = calculateSoulUrgeNumber(name);
    const personalityNumber = calculatePersonalityNumber(name);

    resultDiv.innerHTML = `
        <p><strong>Life Path Number:</strong> ${lifePathNumber}</p>
        <p><strong>Expression Number:</strong> ${expressionNumber}</p>
        <p><strong>Soul Urge Number:</strong> ${soulUrgeNumber}</p>
        <p><strong>Personality Number:</strong> ${personalityNumber}</p>
    `;
});

function calculateLifePathNumber(birthdate) {
    const dateParts = birthdate.split('-').map(Number);
    const sum = dateParts.reduce((acc, part) => acc + part, 0);
    return reduceToSingleDigit(sum);
}

function calculateExpressionNumber(name) {
    return calculateNumerologyValue(name);
}

function calculateSoulUrgeNumber(name) {
    const vowels = name.match(/[AEIOUaeiou]/g) || [];
    return calculateNumerologyValue(vowels.join(''));
}

function calculatePersonalityNumber(name) {
    const consonants = name.match(/[^AEIOUaeiou\s]/g) || [];
    return calculateNumerologyValue(consonants.join(''));
}

function calculateNumerologyValue(str) {
    const letterValues = {
        A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9,
        J: 1, K: 2, L: 3, M: 4, N: 5, O: 6, P: 7, Q: 8, R: 9,
        S: 1, T: 2, U: 3, V: 4, W: 5, X: 6, Y: 7, Z: 8
    };
    const sum = str.toUpperCase().replace(/[^A-Z]/g, '').split('').reduce((acc, letter) => acc + letterValues[letter], 0);
    return reduceToSingleDigit(sum);
}

function reduceToSingleDigit(num) {
    while (num > 9) {
        num = num.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    }
    return num;
}
