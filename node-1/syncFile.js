const fs = require("fs");

fs.writeFileSync("./file/ajeet.txt", "hello world !!", "utf-8", (err, data) => {
  if (err) {
    console.log(chalk.yellow(err));
  } else {
    console.log(chalk.yellow(data));
  }
});

fs.appendFileSync(
  "./file/ajeet.txt",
  "hello world !!!!!",
  "utf-8",
  (err, data) => {
    if (err) {
      console.log(chalk.yellow(err));
    } else {
      console.log(chalk.yellow(data));
    }
  }
);

fs.readFileSync("./file/ajeet.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(chalk.yellow(err));
  } else {
    console.log(chalk.yellow(data));
  }
});

fs.renameSync("./file/ajeet.txt", "./file/asish.txt", (err, data) => {
  if (err) {
    console.log(chalk.yellow(err));
  } else {
    console.log(chalk.yellow(data));
  }
});

fs.unlinkSync("./file/ajeet.txt", (err, data) => {
  if (err) {
    console.log(chalk.yellow(err));
  } else {
    console.log(chalk.yellow(data));
  }
});
fs.truncateSync("./file/srishti.txt", (err, data) => {
  if (err) {
    console.log(chalk.yellow(err));
  } else {
    console.log(chalk.yellow(data));
  }
});




