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

function findInvalidIds(from, to) {
    const invalidIds = [];
    for (let i = parseInt(from, 10); i <= parseInt(to, 10); i++) {
        if (isInvalidId(i)) {
            console.log('ID', i, 'is invalid');
            invalidIds.push(i);
        }
    }
    return invalidIds;
}
function isInvalidId(id) {
    let idStr = id.toString();
    let length = idStr.length;
    if(length % 2 === 0) {
        let halfLength = length / 2;
        let firstHalf = idStr.substring(0, halfLength);
        let secondHalf = idStr.substring(halfLength);
        if(firstHalf === secondHalf) {
            return true;
        }
    }
}

function findInvalidIdsPart2(from, to) {
    const invalidIds = [];
    for (let i = parseInt(from, 10); i <= parseInt(to, 10); i++) {
        if (isInvalidIdPart2(i)) {
            console.log('ID', i, 'is invalid');
            invalidIds.push(i);
        }
    }
    return invalidIds;
}

function isInvalidIdPart2(id) {
    let idStr = id.toString();
    let length = idStr.length;
    if(length % 2 === 0) {
        let halfLength = length / 2;
        let firstHalf = idStr.substring(0, halfLength);
        let secondHalf = idStr.substring(halfLength);
        if(firstHalf === secondHalf) {
            return true;
        } else if(length > 2) {
            let groups = cutSequence(idStr, 2);
            let firstGroup = groups[0];
            if(groups.length > 1 && isInvalidGroup(firstGroup, groups)) {
                return true;
            }
        }
    } else {
        let groups = cutSequence(idStr, 1);
        let firstGroup = groups[0];
        if(groups.length > 1 && isInvalidGroup(firstGroup, groups)) {
            return true;
        } else if(length > 3) {
            let groups = cutSequence(idStr, 3);
            let firstGroup = groups[0];
            if(groups.length > 1 && isInvalidGroup(firstGroup, groups)) {
                return true;
            } else if(length > 5) {
                groups = cutSequence(idStr, 5);
                firstGroup = groups[0];
                if(groups.length > 1 && isInvalidGroup(firstGroup, groups)) {
                    return true;
                }
            }
        }
    }
}

function cutSequence(sequence, size) {
    const groups = [];
    for (let i = 0; i < sequence.length; i += size) {
        let group = sequence.substring(i, i + size);
        groups.push(group);
    }
    return groups;
}

function isInvalidGroup(firstGroup, groups) {
    for(const group of groups) {
        if(group !== firstGroup) {
            console.log('Group', group, 'is different from', firstGroup);
            return false;
        }
    }
    console.log('All groups are equal to', firstGroup, groups);
    return true;
}


// ========== PART 1 OF THE PUZZLE ==========

function solvePart1(lines) {
    console.log('\n=== Part 1 ===');

    // EXAMPLE: Iterate and analyze each line
    const line = lines[0];
    const sequences = line.split(',');
    let sum = 0;
    // FOR...OF loop (more modern, equivalent to for-each in Java)
    for (const sequence of sequences) {
        // Decode the line, L is minus, R is plus
        let from = sequence.split('-')[0];
        let to = sequence.split('-')[1];
        let invalidIds = findInvalidIds(from, to);
        for(const invalidId of invalidIds) {
            sum += invalidId;
        }
        console.log(sequence, 'has invalid IDs', invalidIds);
    }
    console.log('Adding up all the invalid IDs in this example produces', sum);
    const answer = sum;
    return answer;
}

// ========== PART 2 OF THE PUZZLE ==========

function solvePart2(lines) {
    console.log('\n=== Part 2 ===');

    // EXAMPLE: Iterate and analyze each line
    const line = lines[0];
    const sequences = line.split(',');
    let sum = 0;
    // FOR...OF loop (more modern, equivalent to for-each in Java)
    for (const sequence of sequences) {
        // Decode the line, L is minus, R is plus
        let from = sequence.split('-')[0];
        let to = sequence.split('-')[1];
        let invalidIds = findInvalidIdsPart2(from, to);
        for(const invalidId of invalidIds) {
            sum += invalidId;
        }
        console.log(sequence, 'has invalid IDs', invalidIds);
    }
    console.log('Adding up all the invalid IDs in this example produces', sum);
    const answer = sum;
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
