const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  `What is your adventuring name?  `, //Iskra
  `What is your race?  `, //drow
  `Where do you hail from?  `,  //the Underdark
  `What is your stance on necromancy?  `, //neutral
  `What is your weapon of choice?  `, //dagger
  `What are your particular set of skills (What's your class)?  `, //assassin
  `Do you prefer Dungeons or Dragons?  ` //dragons
];

rl.question(`${questions[0]}`, (answer) => {
  const name = answer;
  rl.question(`${questions[1]}`, (answer) => {
    const race = answer;
    rl.question(`${questions[2]}`, (answer) => {
      const origin = answer;
      rl.question(`${questions[3]}`, (answer) => {
        const alignment = answer;
        rl.question(`${questions[4]}`, (answer) => {
          const weapon = answer;
          rl.question(`${questions[5]}`, (answer) => {
            const dndClass = answer;
            rl.question(`${questions[6]}`, (answer) => {
              const haha = answer;
              console.log(`\nThe receptionist at the guild counter looks at you with a raised brow. "Alright, ${name}, so just to confirm: you are a ${race} ${dndClass}, proficient in weilding a ${weapon}. You come from ${origin} to seek out ${haha}, and your overall stance on the necromancy crisis is... ${alignment}." They look at you incredulously. "Right, this application is going into the trash. Have a nice day."`);
              rl.close();
            });
          });
        });
      });
    });
  });
});
