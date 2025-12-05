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
    let freshIngredients = new Map()
    let ingredient = false;
    let count = 0;
    let sum = 0;
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i].trim();
        if(line === '') {
            ingredient = true;
            console.log('Step 2: Ingredients list starts');
        }
        if(ingredient) {
            let ingredientId = parseInt(line.trim());
            // sum if the ingredientId is in the freshIngredients array
            if(isFresh(ingredientId, freshIngredients)) {
                sum++;
            }
        } else {
            // put the range of ingredients in the freshIngredients array
            let from = line.substring(0, line.indexOf('-')).trim();
            let to = line.substring(line.indexOf('-') + 1).trim();
            freshIngredients.set({ from: parseInt(from), to: parseInt(to) });
        }
    }
    return {sum, count};
}

function isFresh(ingredientId, freshIngredients) {
    for(const freshIngredient of freshIngredients.keys()) {
        let from = parseInt(freshIngredient.from);
        let to = parseInt(freshIngredient.to);
        if(ingredientId >= from && ingredientId <= to) {
            return true;
        }
    }
    return false;
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
    let freshIngredients = new Map()
    let count = 0;

    // create a map of fresh ingredients ranges
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i].trim();
        if(line === '') {
            console.log('Stopping ingredient processing');
            break;
        }
        // put the range of ingredients in the freshIngredients array
        let from = parseInt(line.substring(0, line.indexOf('-')).trim());
        let to = parseInt(line.substring(line.indexOf('-') + 1).trim());
        if(freshIngredients.has(from) && freshIngredients.get(from) < to) {
            freshIngredients.set(from, to);
        } else if(!freshIngredients.has(from)){
            freshIngredients.set(from, to);
        }
    }
    // remove overlapping ranges
    let sortedKeys = Array.from(freshIngredients.keys()).sort((a, b) => a - b);
    let mergedRanges = new Map();
    let currentFrom = sortedKeys[0];
    let currentTo = freshIngredients.get(currentFrom);
    for (let i = 1; i < sortedKeys.length; i++) {
        let from = sortedKeys[i];
        let to = freshIngredients.get(from);
        if (from <= currentTo) {
            currentTo = Math.max(currentTo, to);
        } else {
            mergedRanges.set(currentFrom, currentTo);
            currentFrom = from;
            currentTo = to;
        }
    }
    mergedRanges.set(currentFrom, currentTo);
    // count all ingredients in mergedRanges
    for(const [from, to] of mergedRanges.entries()) {
        count += (to - from + 1);
    }
    return count;
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
    console.log('Answer part 1:', result.sum);
    const result2 = solvePart2(lines);
    console.log('Answer part 2:', result2);
}

// Run the program
main();