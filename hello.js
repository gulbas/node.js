const ansi = require('ansi');
const cursor = ansi(process.stdout);

cursor.red().bg.grey().write('Hello world').bg.reset().write('\n').reset();

// console.log('Hello world');