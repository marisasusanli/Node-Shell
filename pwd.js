module.exports = function () {
  const printPwd = process.cwd();

  process.stdout.write(printPwd);
  process.stdout.write('\nprompt > ');
};
