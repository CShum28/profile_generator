const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name? ", (name) => {
  rl.question(`What's an activity you like doing? `, (activity) => {
    rl.question("What do you listen to while doing that? ", (listen) => {
      rl.question("Which meal is your favourite? ", (meal) => {
        rl.question(`What's your fav meal at ${meal}? `, (eat) => {
          rl.question("Which sport is your absolute favourite? ", (sport) => {
            rl.question("What is your super power? ", (power) => {
              console.log(
                `My name is ${name}, my favourite activity is ${activity},` +
                  ` and I like to listen to ${listen} when I do it. My favourite meal` +
                  ` is ${meal} and my favourite meal to eat during ${meal} is ${eat}. My` +
                  ` favourite sport to watch is ${sport} and my super power is to ${power}.`
              );
              rl.close();
            });
          });
        });
      });
    });
  });
});
