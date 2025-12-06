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
    let mathMatrix = [];
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i].trim();
        // split by white space
        let numbers = line.split(/\s+/).map(num => num.trim());
        mathMatrix.push(numbers);
    }
    //console.log('Math Matrix:', mathMatrix);
    let numberOfRows = mathMatrix.length;
    for(let i = 0; i < mathMatrix[0].length; i++) {
        let tmpResult = 0;
        for(let j = 0; j < numberOfRows - 1; j++) {
            let operator = mathMatrix[numberOfRows - 1][i];
            let value = parseInt(mathMatrix[j][i]);
            if(operator === '+') {
                tmpResult += value;
            } else if(operator === '*') {
                if(tmpResult === 0) {
                    tmpResult = 1;
                }
                tmpResult *= value;
            }
        }
        sum += tmpResult;
    }
    return sum;
}

function solvePart2(lines) {
    console.log('\n=== Part 2 ===');

    // EXAMPLE: Count the number of lines
    let counter = 0;

    // Classic FOR loop
    for (let i = 0; i < lines.length; i++) {
        counter++;
    }

    console.log('Number of lines:', counter);
    let sum = 0;
    let mathMatrix = [];
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        if(i === lines.length - 1) {
            line = line.trim().split(/\s+/).map(op => op.trim());
        }
        mathMatrix.push(line);
    }
    //console.log('Math Matrix:', mathMatrix);
    let numberOfRows = mathMatrix.length;
    let numberToAdd = [];
    let numberToMultiplyTmp = [];
    let operators = mathMatrix[numberOfRows - 1];
    let operatorIndex = 0;
    for(let j = 0; j < mathMatrix[0].length; j++) {
        for(let k = 0; k < mathMatrix[0][0].length; k++) {
            let operator = operators[operatorIndex];
            let numberStr = '';
            //console.log('Processing digit', k, j, 'with operator', operator);
            for(let i = 0; i < numberOfRows - 1; i++) {
                let number = mathMatrix[i][j][k];
                // concatenate the digits
                numberStr += number;
            }
            let number = parseInt(numberStr) || 0;
            if(number > 0) {
                console.log('Constructed number:', number, 'with operator', operator);
                if(operator === '+') {
                    numberToAdd.push(number);
                    console.log('Adding', number, 'to addition list', numberToAdd);
                } else if(operator === '*' && number > 0) {
                    numberToMultiplyTmp.push(number);
                }
            } else {
                // when number is 0, it indicates a separation between calculation groups
                operatorIndex++;
                let add = numberToMultiplyTmp.length > 0 ? numberToMultiplyTmp.reduce((a, b) => a * b, 1) : 0;
                if(add > 0) {
                    console.log('Multiplication numbers:', numberToMultiplyTmp);
                    numberToAdd.push(add);
                    console.log('Adding multiplication result:', add, 'to addition list', numberToAdd);
                }
                numberToMultiplyTmp = [];
            }
        }
    }
    // last group
    if(numberToMultiplyTmp.length > 0) {
        let add = numberToMultiplyTmp.reduce((a, b) => a * b, 1);
        console.log('Adding final multiplication result:', add, 'to addition list', numberToAdd);
        numberToAdd.push(add);
    }
    sum = numberToAdd.reduce((a, b) => a + b, 0);
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
    const result = solvePart1(lines);
    console.log('Answer part 1:', result);
    const result2 = solvePart2(lines);
    console.log('Answer part 2:', result2);
}

// Run the program
main();