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

/**
 * Converts an array of strings into an array of numbers
 */
function parseNumbers(array) {
    // map() transforms each element of the array
    // parseInt() converts a string to an integer
    return array.map(element => parseInt(element, 10));
}

// ========== PART 1 OF THE PUZZLE ==========

function solvePart1(lines) {
    console.log('\n=== Part 1 ===');

    // EXAMPLE: Count the number of lines
    let counter = 0;

    // Classic FOR loop
    for (let i = 0; i < lines.length; i++) {
        counter++;
    }

    console.log('Number of lines:', counter);

    // EXAMPLE: Iterate and analyze each line
    let sum = 0;

    // FOR...OF loop (more modern, equivalent to for-each in Java)
    for (const line of lines) {
        // Check if the line contains something
        if (line.length > 0) {
            // Example processing
            // Adapt according to your puzzle
        }
    }

    // EXAMPLE: Using an array
    const results = [];

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        // Example of IF/ELSE condition
        if (line.startsWith('#')) {
            results.push('comment');
        } else if (line.length === 0) {
            results.push('empty');
        } else {
            results.push('data');
        }
    }

    // EXAMPLE: Filter an array
    const dataOnly = results.filter(r => r === 'data');
    console.log('Number of data lines:', dataOnly.length);

    const answer = 0; // Calculate according to your puzzle
    return answer;
}

// ========== PART 2 OF THE PUZZLE ==========

function solvePart2(lines) {
    console.log('\n=== Part 2 ===');

    // EXAMPLE: Using an object (equivalent to Map in Java)
    const counters = {};

    for (const line of lines) {
        // Check if a key exists in the object
        if (counters[line]) {
            counters[line]++;
        } else {
            counters[line] = 1;
        }
    }

    // EXAMPLE: Iterate over an object
    for (const key in counters) {
        console.log(`${key}: ${counters[key]} times`);
    }

    // EXAMPLE: Find the maximum in an array
    const numbers = [1, 5, 3, 9, 2];
    let maximum = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maximum) {
            maximum = numbers[i];
        }
    }

    // ALTERNATIVE with Math.max
    const maxWithMath = Math.max(...numbers); // ... spread operator

    // EXAMPLE: WHILE loop
    let index = 0;
    while (index < lines.length && lines[index] !== 'STOP') {
        index++;
    }

    const answer = 0; // Calculate according to your puzzle
    return answer;
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
