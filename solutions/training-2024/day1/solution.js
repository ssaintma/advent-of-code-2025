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

    // order the lines
    let left = new Array();
    let right = new Array();

    // FOR...OF loop (more modern, equivalent to for-each in Java)
    for (const line of lines) {
        // Check if the line contains something
        if (line.length > 0) {
            // Example processing
            // Adapt according to your puzzle
            const locations = line.split('   ');
            left.push(parseInt(locations[0], 10));
            right.push(parseInt(locations[1], 10));
        }
    }

    // orders the left and right arrays
    left.sort((a, b) => a - b);
    right.sort((a, b) => a - b);
    //console.log('left : '+left)
    //console.log('right : '+right)

    // iterate and calcul the distance
    for (let i=0; i<left.length; i++) {
        // Check if the line contains something
        let distance = left[i]-right[i];
        if (distance < 0) {
            distance = distance * -1;
        }
        sum += distance;
        //console.log(`Distance between ${left[i]} and ${right[i]} is ${left[i]-right[i]}`)
    }

    const answer = sum; // Calculate according to your puzzle
    return answer;
}

// ========== PART 2 OF THE PUZZLE ==========

function solvePart2(lines) {
    console.log('\n=== Part 2 ===');
    // EXAMPLE: Count the number of lines
    let counter = 0;

    // Classic FOR loop
    for (let i = 0; i < lines.length; i++) {
        counter++;
    }

    console.log('Number of lines:', counter);

    // EXAMPLE: Iterate and analyze each line
    let sum = 0;

    // order the lines
    let left = new Array();
    let right = new Array();

    // FOR...OF loop (more modern, equivalent to for-each in Java)
    for (const line of lines) {
        // Check if the line contains something
        if (line.length > 0) {
            // Example processing
            // Adapt according to your puzzle
            const locations = line.split('   ');
            left.push(parseInt(locations[0], 10));
            right.push(parseInt(locations[1], 10));
        }
    }

    // orders the left and right arrays
    left.sort((a, b) => a - b);
    right.sort((a, b) => a - b);
    //console.log('left : '+left)
    //console.log('right : '+right)

    // iterate and calcul the distance
    for (let i=0; i<left.length; i++) {
        // Check if the line contains something
        let number = left[i];
        let occurence = right.filter(item => item === number).length;
        sum += number * occurence;
        //console.log(`${occurence} times ${left[i]} in the right list`)
    }

    const answer = sum; // Calculate according to your puzzle
    return answer;
}

// ========== MAIN FUNCTION ==========

function main() {
    console.log('🎄 Advent of Code 2024 🎄');

    // Read the input file
    const filename = 'input.txt';
    const content = readFile(filename);

    // Convert to lines
    const lines = getLines(content);

    console.log(`File loaded: ${lines.length} lines`);

    // Solve both parts
    const result1 = solvePart1(lines);
    console.log('Answer Part1:', result1);

    const result2 = solvePart2(lines);
    console.log('Answer Part2:', result2);
}

// Run the program
main();
