const colors = require('colors');
const ansi = require('ansi');
const cursor = ansi(process.stdout);

function beepColorText(text, beep) {
  console.log(text.yellow.underline);

  if (beep) {
    cursor.beep();
  }
}

module.exports.go = beepColorText;