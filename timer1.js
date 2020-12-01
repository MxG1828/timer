array = process.argv.slice(2).filter((x) => !isNaN(x) && x >= 0);
for (let time of array) {
  setTimeout(() => {
    process.stdout.write("\x07");
  }, time * 1000);
}
