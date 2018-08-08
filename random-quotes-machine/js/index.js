$(document).ready(function () {
  var quote, author;
  var afi_quotes = [
  { quote: "Frankly, my dear, I don't give a damn.",
    movie: "Gone with the Wind" },
  { quote: "I'm gonna make him an offer he can't refuse.",
    movie: "The Godfather" },
  { quote: "You don't understand! I coulda had class. I coulda been a contender. I could've been somebody, instead of a bum, which is what I am.",
    movie: "On the Waterfront" },
  { quote: "Toto, I've a feeling we're not in Kansas anymore",
    movie: "The Wizard of Oz" },
  { quote: "Here's looking at you, kid.",
    movie: "Casablanca" },
  { quote: "Go ahead, make my day.",
    movie: "Sudden Impact" },
  { quote: "All right, Mr. DeMille, I'm ready for my close-up.",
    movie: "Sunset Boulevard" },
  { quote: "May the Force be with you.",
    movie: "Star Wars" },
  { quote: "Fasten your seatbelts. It's going to be a bumpy night.",
    movie: "All About Eve" },
  { quote: "You talkin' to me?",
    movie: "Taxi Driver" },
  { quote: "I love the smell of napalm in the morning.",
    movie: "Apocalypse Now" },
  { quote: "What we've got here is failure to communicate.",
    movie: "Cool Hand Luke" },
  { quote: "Love means never having to say you're sorry.",
    movie: "Love Story" },
  { quote: "The stuff that dreams are made of.",
    movie: "The Maltese Falcon" },
  { quote: "E.T. phone home.",
    movie: "E.T. the Extra-Terrestrial" },
  { quote: "They call me Mister Tibbs!",
    movie: "In the Heat of the Night" },
  { quote: "Rosebud.",
    movie: "Citizen Kane" },
  { quote: "Made it, Ma! Top of the world!",
    movie: "White Heat" },
  { quote: "I'm as mad as hell, and I'm not going to take this anymore!",
    movie: "Network" },
  { quote: "Louis, I think this is the beginning of a beautiful friendship.",
    movie: "Casablanca" },
  { quote: "A census taker once tried to test me. I ate his liver with some fava beans and a nice Chianti.",
    movie: "The Silence of the Lambs" },
  { quote: "Bond. James Bond.",
    movie: "Dr. No" },
  { quote: "There's no place like home.",
    movie: "The Wizard of Oz" },
  { quote: "I am big! It's the pictures that got small.",
    movie: "Sunset Boulevard" }
   ];


  window.onload = function () {
    getNewQuote();
  };

  function getNewQuote() {
    var index = Math.floor(Math.random() * (afi_quotes.length - 1));
    var quote = afi_quotes[index];
    $('#text').text('"' + quote.quote + '"');
    $('#author').text("Movie: " + quote.movie);
  }

  $('#new-quote').on('click', function (event) {
    getNewQuote();
  });


});