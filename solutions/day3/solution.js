// Advent of Code Template
// To run: node solution.js

const fs = require('fs');

// ========== UTILITY FUNCTIONS ==========

/**
 * Reads the input file and returns its content
 */
function readFile(filename) {
    try {
        const content = fs.readFileSync(filename, 'utf-8');
        return content;
    } catch (error) {
        console.error('Error reading file:', error.message);
        process.exit(1);
    }
}

/**
 * Converts content into an array of lines
 */
function getLines(content) {
    // trim() removes spaces at the beginning and end
    // split('\n') splits the text at each line break
    return content.trim().split('\n');
}


// ========== PART 1 OF THE PUZZLE ==========

function solvePart1(lines) {
    console.log('\n=== Part 1 ===');
    let sum = 0;
    for (const line of lines) {
        // for each character in the line
        let maxNumber = line[0];
        let maxNumberIndex = 0;
        let firstNumber = line[0];
        for (let i = 1; i < line.length - 1; i++) {
            // Analyze each character
            const char = line[i];
            if(char > maxNumber) {
                maxNumber = char;
                maxNumberIndex = i;
            }
        }
        firstNumber = maxNumber;
        maxNumber = 0;
        for (let i = maxNumberIndex + 1; i < line.length; i++) {
            // Analyze each character
            const char = line[i];
            if(char > maxNumber) {
                maxNumber = char;
                maxNumberIndex = i;
            }
        }
        // concat firstNumber and maxNumber
        let maxJoltage = firstNumber + maxNumber;
        sum += parseInt(maxJoltage, 10);
        //console.log('In', line, 'you can make the largest joltage possible', maxJoltage);
    }

    const answer = sum;
    return answer;
}

// ========== PART 2 OF THE PUZZLE ==========
function solvePart2(lines) {
    console.log('\n=== Part 2 ===');
    let sum = 0;
    for (const line of lines) {
        // for each character in the line
        let maxNumber = line[0];
        let maxNumberIndex = 0;
        for (let i = 1; i < line.length - 11; i++) {
            // Analyze each character
            const char = line[i];
            if(char > maxNumber) {
                maxNumber = char;
                maxNumberIndex = i;
            }
        }
        firstNumber = maxNumber;
        let top11 = [];
        top11.push(maxNumber);
        let substringAfterFirst = line.substring(maxNumberIndex + 1);
        for(let i = 11; i > 0; i--) {
            //console.log('Analyzing for next max number with', i, 'characters');
            const { nextMaxNumber, nextMaxNumberIndex } = getNextMaxNumbers(substringAfterFirst, i);
            //console.log('Next max number is', nextMaxNumber, 'at index', nextMaxNumberIndex, 'in substring:', substringAfterFirst);
            substringAfterFirst = substringAfterFirst.substring(nextMaxNumberIndex + 1);
            maxNumberIndex = nextMaxNumberIndex;
            top11.push(nextMaxNumber);
        }
        // concat firstNumber and maxNumber
        let maxJoltage = top11.join('');
        sum += parseInt(maxJoltage, 10);
        //console.log('In', line, 'you can make the largest joltage possible', maxJoltage);
    }
    const answer = sum;
    return answer;
}

function getNextMaxNumbers(idStr, count) {
    let nextMaxNumberIndex = 0;
    let workingStr = idStr;
    let nextMaxNumber = workingStr[0];
    let maxNumberIndex = idStr.length - count;
    for(let n = 0; n <= maxNumberIndex; n++) {
       // Analyze each character
        const char = workingStr[n];
        if(char > nextMaxNumber) {
            nextMaxNumber = char;
            nextMaxNumberIndex = n;
        }
    }
    return { nextMaxNumber, nextMaxNumberIndex };
}

// ========== MAIN FUNCTION ==========

function main() {
    console.log('🎄 Advent of Code 2025 🎄');

    // Read the input file
    const filename = 'input.txt';
    const content = readFile(filename);

    // Convert to lines
    const lines = getLines(content);

    console.log(`File loaded: ${lines.length} lines`);

    // Solve both parts
    const result1 = solvePart1(lines);
    console.log('Answer part 1:', result1);

    const result2 = solvePart2(lines);
    console.log('Answer part 2:', result2);
}

// Run the program
main();
