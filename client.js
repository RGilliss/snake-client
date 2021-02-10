const net = require('net');
const { IP, PORT } = require('./constants');
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT,
    
  });
  conn.on("connect", () => {
    console.log("Successfully connected to the game server");
    conn.write('Name: RYE'); //Labels snake with name
;  })
  conn.on('data', (message) => {
    //Message when client dies due to idle
    console.log(message)
  });
  

  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  return conn;;
}

console.log('Connecting ...');


module.exports = { connect }