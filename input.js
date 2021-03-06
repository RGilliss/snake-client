let connection;

const handleUserInput = (input) => {
  if (input === '\u0003') { // ctrl + c
    process.exit();
  }
  if (input === "w") {
    connection.write('Move: up');
  } 
  if (input === 'a') {
    connection.write('Move: left');
  }
  if (input === 'd') {
    connection.write('Move: right');
  }
  if (input === 's') {
    connection.write('Move: down');
  }
  if (input === 'i') {
    connection.write('Say: Im not a');
  }
  if (input === 'o') {
    connection.write('Say: conspiracy theorist')
  }
  if (input === 'p') {
    connection.write('Say: but.......')
  }
};
const setupInput = function(conn) {
  const stdin = process.stdin;
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (data) => {
    handleUserInput(data);
  });
  return stdin;
}

module.exports = { setupInput }