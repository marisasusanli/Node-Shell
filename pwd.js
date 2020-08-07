process.stdout.write('prompt > ');

module.exports = process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();

    if (cmd === 'pwd') {
        const printPwd = process.cwd();

        process.stdout.write(printPwd)
        process.stdout.write('\nprompt > ');
    }
})

