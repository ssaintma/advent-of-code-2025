# Advent of Code - Node.js Template

## Installation

1. Make sure you have Node.js installed:
```bash
node --version
```

2. No need to install dependencies, the script only uses the `fs` module (built into Node.js)

## Usage

1. Copy your input from the Advent of Code website into the `input.txt` file

2. Edit the `solution.js` file:
   - Modify the `solvePart1()` function to solve part 1
   - Modify the `solvePart2()` function to solve part 2

3. Run the script:
```bash
node solution.js
```

## JavaScript Concepts Covered

### Variables
```javascript
const constant = 10;      // Constant variable (cannot be reassigned)
let variable = 20;        // Mutable variable
var oldStyle = 30;        // Old style (avoid, prefer let/const)
```

### Arrays
```javascript
const array = [1, 2, 3, 4, 5];

// Access
const first = array[0];

// Length
const size = array.length;

// Add an element
array.push(6);

// Iterate
for (const element of array) {
    console.log(element);
}

// Transform (map)
const doubles = array.map(x => x * 2);

// Filter
const evens = array.filter(x => x % 2 === 0);

// Reduce
const sum = array.reduce((acc, x) => acc + x, 0);
```

### Strings
```javascript
const text = "Hello World";

// Length
text.length

// Split
text.split(' ')  // ['Hello', 'World']

// Check start/end
text.startsWith('Hello')  // true
text.endsWith('World')    // true

// Replace
text.replace('World', 'JS')

// Extract a part
text.substring(0, 5)  // 'Hello'

// Remove spaces
text.trim()
```

### Conditions
```javascript
if (condition) {
    // If true
} else if (otherCondition) {
    // Else if
} else {
    // Else
}

// Ternary operator
const result = condition ? valueIfTrue : valueIfFalse;
```

### Loops
```javascript
// Classic for
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// For...of (iterate over an array)
for (const element of array) {
    console.log(element);
}

// For...in (iterate over object keys)
for (const key in object) {
    console.log(key, object[key]);
}

// While
while (condition) {
    // Code
}
```

### Functions
```javascript
// Classic declaration
function myFunction(param1, param2) {
    return param1 + param2;
}

// Arrow function
const myFunction2 = (param1, param2) => {
    return param1 + param2;
};

// Short arrow function (implicit return)
const myFunction3 = (param1, param2) => param1 + param2;
```

### Objects
```javascript
// Creation
const object = {
    key1: 'value1',
    key2: 42,
    key3: [1, 2, 3]
};

// Access
object.key1          // 'value1'
object['key2']       // 42

// Add/Modify
object.newKey = 'new value';

// Check if key exists
if ('key1' in object) { }
if (object.key1 !== undefined) { }
```

### Useful Operators
```javascript
// Spread operator (...)
const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5];  // [1, 2, 3, 4, 5]

// Destructuring
const [a, b, c] = [1, 2, 3];  // a=1, b=2, c=3
const {name, age} = {name: 'John', age: 30};

// Nullish operator (??)
const value = variable ?? 'default';  // If variable is null/undefined

// Optional chaining (?.)
const value2 = object?.property?.subProperty;
```

## Tips for Advent of Code

### Parsing Numbers
```javascript
parseInt('123', 10)      // 123
parseFloat('12.34')      // 12.34
Number('123')            // 123
```

### Working with Grids/Matrices
```javascript
// Create a 2D grid
const grid = [];
for (let i = 0; i < height; i++) {
    grid[i] = [];
    for (let j = 0; j < width; j++) {
        grid[i][j] = 0;
    }
}

// Access
const value = grid[row][column];
```

### Using a Set
```javascript
const set = new Set();
set.add(1);
set.add(2);
set.add(1);  // Ignored, already present
console.log(set.size);  // 2
set.has(1);  // true
```

### Using a Map
```javascript
const map = new Map();
map.set('key', 'value');
map.get('key');  // 'value'
map.has('key');  // true
map.delete('key');
```

### Regular Expressions
```javascript
const regex = /\d+/g;  // All numbers
const text = 'abc123def456';
const matches = text.match(regex);  // ['123', '456']

// With capture groups
const regex2 = /(\w+)=(\d+)/;
const match = 'x=42'.match(regex2);  // ['x=42', 'x', '42']
```

## Important Differences with Java

1. **No static types**: JavaScript is dynamically typed
2. **== vs ===**: Always use `===` (strict equality)
3. **No function overloading**: One function per name
4. **First-class functions**: Functions are objects
5. **Asynchronous**: Promises and async/await (not usually needed for AoC)

Good luck with Advent of Code! 🎄
