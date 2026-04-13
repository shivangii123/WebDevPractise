const jokes = require('give-me-a-joke');//random Jokes
const figlet = require('figlet');//style the text
const colors = require('colors');//cololrs

// // To get a random dad joke
// jokes.getRandomDadJoke (function(joke) {
//     console.log(joke);
// });


figlet("Shivangii", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data.rainbow);
});