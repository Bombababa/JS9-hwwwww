function logItems(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`${i + 1} - ${array[i]}`);
    }
}

logItems(['Mango', 'Poly', 'Ajax']);


function calculateEngravingPrice(message, pricePerWord) {
    const words = message.split(' ').filter(word => word !== '');
    return words.length * pricePerWord;
}

console.log(calculateEngravingPrice("Hello world", 10)); // 20



function findLongestWord(string) {
    const words = string.split(' ');
    let longestWord = '';

    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    
    return longestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // "jumped"



function formatString(string) {
    if (string.length <= 40) {
        return string;
    } else {
        return string.slice(0, 40) + '...';
    }
}

console.log(formatString("This is a short string.")); // "This is a short string."
console.log(formatString("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")); // "Lorem ipsum dolor sit amet, consectetur adi..."



function checkForSpam(message) {
    const lowerCaseMessage = message.toLowerCase();
    return lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale');
}

console.log(checkForSpam("Get a great sale now!")); // true
console.log(checkForSpam("This is not spam.")); // true
console.log(checkForSpam("Just a regular message.")); // false


let numbers = [];
let input;

while (true) {
    input = prompt("Введіть число (або натисніть Cancel для завершення):");
    if (input === null) break; // Виходимо з циклу, якщо натиснуто Cancel
    const number = Number(input);
    
    if (!isNaN(number)) { // Перевіряємо, чи введене значення - число
        numbers.push(number);
    }
}

let total = 0;
for (const number of numbers) {
    total += number;
}

console.log(`Загальна сума чисел дорівнює ${total}`);
