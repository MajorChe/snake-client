const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
    });
    conn.on('connect', () => {
      console.log("Successfully connected to the game server. connectHandlerCallback");
      conn.write('Name: MAJ');  // name is assigned to the snake
      //conn.write("Move: up");
    });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};
module.exports = connect;