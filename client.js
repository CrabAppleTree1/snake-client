// establishes a connection with the game server
const net = require("net");
const stdin = process.stdin;
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    conn.write("Successfully connected to game server");
    setTimeout(function(){ conn.write("Move: up"); }, 50);
    setInterval(function(){ conn.write("Move: right"); }, 50);
    
   
  });

  return conn;
};

module.exports = connect;