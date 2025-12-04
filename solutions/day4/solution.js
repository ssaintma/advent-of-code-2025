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

    // EXAMPLE: Count the number of lines
    let counter = 0;

    // Classic FOR loop
    for (let i = 0; i < lines.length; i++) {
        counter++;
    }

    console.log('Number of lines:', counter);
    let sum = 0;
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        for(let j = 0; j < line.length; j++) {
            const char = line.charAt(j);
            if(char === '@') {
                let adjacent = calculateAdjacent(i, j, lines);
                if((adjacent < 4)) {
                    sum++;
                }
            }
        }
    }
    const answer = sum;
    return answer;
}

function calculateAdjacent(i, j, lines) {
    iBefore = i - 1;
    iAfter = i + 1;
    jBefore = j - 1;
    jAfter = j + 1;
    let count = 0;
    //Chelk all 8 directions
    if(iAfter < lines.length) {
        if(jAfter < lines[iAfter].length) {
            // Bottom-right
            if(lines[iAfter].charAt(jAfter) === '@') {
                count++;
            }
        }
    }
    if(iAfter < lines.length) {
        // Bottom
        if(lines[iAfter].charAt(j) === '@') {
            count++;
        }
    }
    if(iAfter < lines.length) {
        if(jBefore >= 0) {
            // Bottom-left
            if(lines[iAfter].charAt(jBefore) === '@') {
                count++;
            }
        }
    }
    if(jAfter < lines[i].length) {
        // Right
        if(lines[i].charAt(jAfter) === '@') {
            count++;
        }
    }
    if(jBefore >= 0) {
        // Left
        if(lines[i].charAt(jBefore) === '@') {
            count++;
        }
    }
    if(iBefore >= 0) {
        if(jAfter < lines[iBefore].length) {
            // Top-right
            if(lines[iBefore].charAt(jAfter) === '@') {
                count++;
            }
        }
    }
    if(iBefore >= 0) {
        // Top
        if(lines[iBefore].charAt(j) === '@') {
            count++;
        }
    }           
    if(iBefore >= 0) {
        if(jBefore >= 0) {
            // Top-left
            if(lines[iBefore].charAt(jBefore) === '@') {
                count++;
            }
        }
    }
    return count;
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

    console.log('Initial state:\n', lines);
    let tmpSum = checkMap(lines);
    let sum = tmpSum
    console.log('Remove', tmpSum, 'rolls of paper:\n', lines);
    while(tmpSum > 0) {
        tmpSum = checkMap(lines);
        sum += tmpSum;
        console.log('Remove', tmpSum, 'rolls of paper:\n', lines);
    }
    const answer = sum;
    return answer;
}

function checkMap(lines) {
    let sum = 0;
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        for(let j = 0; j < line.length; j++) {
            const char = line.charAt(j);
            if(char === '@') {
                let adjacent = calculateAdjacent(i, j, lines);
                if((adjacent < 4)) {
                    sum++;
                    // set the char to .
                    line = line.substring(0, j) + '.' + line.substring(j + 1);
                    lines[i] = line;
                }
            }
        }
    }
    return sum;
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
