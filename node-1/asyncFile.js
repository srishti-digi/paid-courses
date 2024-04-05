const chalk = require("chalk");
const fs = require("fs");

fs.writeFile("./file/sai.txt", "hello world !!", "utf-8", (err, data) => {
  if (err) {
    console.log(chalk.yellow(err));
  } else {
    console.log(chalk.yellow(data));
  }
});

fs.appendFile(
  "./file/sai.txt",
  "\thello world !!!!!!!",
  "utf-8",
  (err, data) => {
    if (err) {
      console.log(chalk.yellow(err));
    } else {
      console.log(chalk.yellow(data));
    }
  }
);

fs.readFile("./file/sai.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(chalk.yellow(err));
  } else {
    console.log(chalk.yellow(data));
  }
});

fs.rename("./file/sai.txt", "./file/srishti.txt", (err, data) => {
  if (err) {
    console.log(chalk.yellow(err));
  } else {
    console.log(chalk.yellow(data));
  }
});

fs.unlink("./file/srishti.txt", (err, data) => {
  if (err) {
    console.log(chalk.yellow(err));
  } else {
    console.log(chalk.yellow(data));
  }
});

fs.readFile(
  "./input1.txt",
  { encoding: "utf8", flag: "r" },
  function (err, data) {
    if (err) console.log(err);
    else console.log(data);
  }
);
