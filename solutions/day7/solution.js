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
    for (let i = 0; i < lines.length - 1; i++) {
        let line = lines[i].trim();
        console.log(line);
        for(let j = 0; j < line.length; j++) {
            let char = line[j];
            if(char === 'S' || char === '|') {
                let nextLineChar = lines[i + 1].trim()[j];
                if(nextLineChar === '^') {
                    sum++;
                    lines[i + 1] = lines[i + 1].substring(0, j - 1) + '|' + lines[i + 1].substring(j, j + 1) + '|' + lines[i + 1].substring(j + 2);
                } else {
                    lines[i + 1] = lines[i + 1].substring(0, j) + '|' + lines[i + 1].substring(j + 1);
                }
            }
        }
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
    let blocks = [];
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i].trim();
        for(let j = 0; j < line.length; j++) {
            let char = line[j];
            if(char === 'S') { // start block
                //console.log('Found start at', j, i);
                blocks.push({x: j, y: i, weight:1});
            }
            if(char === '^') {
                // exist block above ?
                let block = blocks.find(b => b.x === j && b.y === i - 1);
                if(block) {
                    //console.log('Found block above at', j, i-1);
                    // create two new blocks to the left and right
                    // left block
                    let newBlockLeft = {x: j-1, y: i, weight: block.weight};
                    // before to push, check if exists
                    let blockLeft = blocks.find(b => b.x === j-1 && b.y === i);
                    if(blockLeft) {
                        blockLeft.weight += newBlockLeft.weight;
                    } else {
                        //newBlockLeft.weight++;
                        blocks.push(newBlockLeft);
                    }
                    // right block
                    let newBlockRight = {x: j+1, y: i, weight: block.weight};
                    // before to push, check if exists
                    let blockRight = blocks.find(b => b.x === j+1 && b.y === i);
                    if(blockRight) {
                        blockRight.weight += newBlockRight.weight;
                    } else {
                        //newBlockRight.weight++;
                        blocks.push(newBlockRight);
                    }
                    // remove the block above
                    blocks = blocks.filter(b => b !== block);
                }
            }
            // Merge blocks at the same position and remove duplicates
            const merged = {};
            for (const block of blocks) {
                const key = `${block.x},${block.y}`; // generate a unique key for each position
                if (merged[key]) { // if block already exists at this position, sum weights
                    merged[key].weight += block.weight;
                } else { // otherwise, add the block
                    merged[key] = { ...block };
                }
            }
            blocks = Object.values(merged);
            // all blocks falling down
            for(let b of blocks) {
                if(b.y < i && b.x === j) {
                    b.y = i;
                }
            }
        }
        // order blocks by x
        blocks.sort((a, b) => a.x - b.x);
        //console.log('After line', i, 'blocks:', blocks);
    }
    sum = blocks.reduce((acc, b) => acc + b.weight, 0);
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