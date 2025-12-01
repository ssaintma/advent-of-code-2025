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
    let current = 50;
    let code = 0;
    console.log('The dial starts by pointing at', current);
    // FOR...OF loop (more modern, equivalent to for-each in Java)
    for (const line of lines) {
        // Decode the line, L is minus, R is plus
        let number = line.substring(1); // get the number part
        number = parseInt(number, 10); // convert to integer
        number = number % 100; // keep it within 0-99
        if(line.startsWith('L')) {
            // it's a minus
            current -= number;
            if(current === 0) {
                code++;
            }
            if(current < 0) {
                current = current % 100;
                current = current * -1;
                current = 100 - current;
            }
        } else {
            // it's a plus
            current += number;
            current = current % 100;
            if(current === 0) {
                code++;
            }
        }
        console.log('The dial is rotated', line, 'to point at', current);
    }

    const answer = code;
    return answer;
}

// ========== PART 2 OF THE PUZZLE ==========

function solvePart2(lines) {
    console.log('\n=== Part 2 ===');

    // EXAMPLE: Iterate and analyze each line
    let current = 50;
    let code = 0;
    console.log('The dial starts by pointing at', current);
    // FOR...OF loop (more modern, equivalent to for-each in Java)
    for (const line of lines) {
        // Decode the line, L is minus, R is plus
        let number = line.substring(1); // get the number part
        number = parseInt(number, 10); // convert to integer
        code += parseInt(number/100, 10); // add full rotations to code
        number = number % 100; // keep it within 0-99
        let passedZeroThisRotation = false;
        if(line.startsWith('L')) {
            // it's a minus
            if((current != 0 || number > 100) && number >= current &&(current - number) <= 0) {
                passedZeroThisRotation = true;
                code++;
            }
            current -= number;
            if(current < 0) {
                current = current % 100;
                current = current * -1;
                current = 100 - current;
            }
        } else {
            // it's a plus
            current += number;
            if(current >= 100) {
                passedZeroThisRotation = true;
                code++;
            }
            current = current % 100;
        }
        console.log('The dial is rotated', line, 'to point at', current, 'passed zero', passedZeroThisRotation);
    }

    const answer = code; // Calculate according to your puzzle
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
