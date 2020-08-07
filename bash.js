const pwd = require('./pwd.js');

const ls = require('./ls.js');

const cat = require('./cat.js');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const input = data.toString().trim();
  const inputArr = input.split(' ');
  const command = inputArr[0];
  const fileName = inputArr[1];

  if (command === 'cat') {
    cat(fileName);
  } else if (command === 'ls') {
    ls();
  } else if (command === 'pwd') {
    pwd();
  }
});
