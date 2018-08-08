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
    movie: "Taxi Driver" }];



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