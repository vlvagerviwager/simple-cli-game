const prompt = require('prompt');

// Customise the prompt.
prompt.message = '';
prompt.delimiter = '';

prompt.start();

const promptNameAndTopping = new Promise((resolve, reject) => {
  prompt.get({
    properties: {
      name: {
        description: 'What is your name?',
      },
      topping: {
        description: 'What a nice name! What is your favourite vegetable?',
      },
    }
  }, (err, result) => {
    if (!err) {
      resolve(`Hello ${result.name}. I hope your day is as happy as your tummy when it's full of pizza with ${result.topping.toLowerCase()}!`);
    }
    else {
      reject(Error(err.message));
    }
  });
});

const promptAsciiArt = () => {
  prompt.get({
    properties: {
      wantsAsciiArt: {
        description: 'Do you want me to show you something cool?',
      },
    }
  }, (err, result) => {
    if (result.wantsAsciiArt.toLowerCase() === 'yes'){
      console.log('       ___\r\n     o|* *|o\r\n     o|* *|o\r\n     o|* *|o\r\n      \\===\/\r\n       |||\r\n       |||\r\n       |||\r\n       |||\r\n    ___|||___\r\n   \/   |||   \\\r\n  \/    |||    \\\r\n |     |||     |\r\n  \\   (|||)   \/\r\n   |   |||   |\r\n  \/    |||    \\\r\n \/     |||     \\\r\n\/      |||      \\\r\n|     [===]     |\r\n \\             \/\r\n  \'.         .\'\r\n    \'-------\'');
    } else {
      console.log('I NEed to GO to tHE bathRoOM!! ( *_*)');
    }
  });
}

promptNameAndTopping.then(val => {
  console.log(val);
  promptAsciiArt()
});
