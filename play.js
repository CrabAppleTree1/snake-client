
const connect = require("./client")

// setup interface to handle user input from stdin
const handleUserInput = function (key) {
    if (key === '\u0003') {
      console.log('here')
    process.exit();
  }
};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

console.log("Connecting ...");
connect();
