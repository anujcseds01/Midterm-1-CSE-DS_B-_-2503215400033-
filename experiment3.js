const fs = require('fs');

// Create file
fs.writeFile('example.txt', 'Hello World', () => console.log('Created'));

// Sync create & read
fs.writeFileSync('example2.txt', 'Hello World 2');
console.log(fs.readFileSync('example2.txt', 'utf8'));

// Async read
fs.readFile('example.txt', 'utf8', (err, data) => console.log(data));

// Replace content
fs.readFile('example.txt', 'utf8', (err, data) => {
    fs.writeFile('example.txt', data.replace('World', 'Node.js'), () =>
        console.log('Replaced')
    );
});

// Append
fs.appendFile('example.txt', '\nAppended text', () =>
    console.log('Appended')
);

// Delete
fs.unlink('example2.txt', () => console.log('Deleted'));

// Modern Promise API
const fsPromises = require('fs').promises;