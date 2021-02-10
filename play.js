const { connect } = require('./client');
console.log('Connecting ...');
connect();

const setupInput = () => {
  const handleUserInput = (data) => {
    if (data === '\u0003') {
      process.exit();
    }
  };
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
}