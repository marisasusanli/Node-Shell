// process.stdout.write('prompt > ');

// process.stdin.on('data', (data) => {
//     const cmd = data.toString().trim(); //data should be pwd

//     process.stdout.write('You typed: ' + cmd)
//     process.stdout.write('\nprompt > ');
// })


// process.stdout.write('prompt > ');

// process.stdin.on('data', (data) => {
//     const cmd = data.toString().trim();

//     if (cmd === 'pwd') {
//         const printPwd = process.cwd();

//         process.stdout.write(printPwd)
//         process.stdout.write('\nprompt > ');
//     }
// })

const pwd = require('./pwd.js')

const ls = require('./ls.js')
