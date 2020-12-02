const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.emitKeypressEvents(process.stdin);
process.stdin.on("keypress", (key) => {
  if (key === "b") {
    process.stdout.write ("\x07");
    rl.clearLine()
  }
});
rl.on("line", (input) => {
  if (!isNaN(input) && 0 < input && 10 > input) {
    setTimeout(() => {
      process.stdout.write("\x07");
    }, input * 1000);
  }
});
rl.on("close",() => {
  console.log ("Thanks for using me, ciao!")
})
