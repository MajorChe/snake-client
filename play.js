const net = require("net");
const PORT = 9898;

const configObj = {
  port: 50541,
  host: '165.227.47.243'
};

const client = net.createConnection(configObj);

client.setEncoding('utf8');

// const onTyping = function(message){
//   //  try {
//   client.write(message);
//   // } catch (err){
//   //   console.log('cannot write to an ended connection');
//   // }
// }

// this fires when stuff is typed into the terminal that launched this 'process'
//  process.stdin.on('data', onTyping); 

client.on("connect", function () {
  console.log("client is connected to the server.");
});

client.on("end", function(){
  console.log('client disconnected from server.');
});



// const net = require("net");

// // establishes a connection with the game server
// const connect = function () {
//   const conn = net.createConnection({
//     host: '165.227.47.243',// IP address here,
//     port: 50541// PORT number here,
//   });

//   // interpret incoming data as text
//   conn.setEncoding("utf8");

//   return conn;
// };

// console.log("Connecting ...");
// connect();

