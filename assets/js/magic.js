let myQuote = {
  "isJSON": true,
  "apiUrl": "https://icanhazdadjoke.com/",
  "tweetUrl": "https://twitter.com/intent/tweet?text=",
  "quoteStored": {}
}

function getQuote() {
  /*
    TODO: Connect (create?) a random name API
  */
  let myArray = [
    "Geek",
    "Nerd",
    "Camper",
    "Coder",
    "Hacker"
  ];

  let randomName = myArray[Math.floor(Math.random() * myArray.length)];

  $.getJSON(myQuote.apiUrl, function (quote) {
    $("#text").text(quote.joke);
    $("#author").text("Anonymous " + randomName);
    quoteStored = quote.joke;
  });
}

function tweetThat() {
  var url = myQuote.tweetUrl + quoteStored;
  $("#tweet-quote").attr("href", url);
}

$(document).ready(function () {
  $.getJSON(myQuote.apiUrl, function (quote) {
    $("#text").text(quote.joke);
    $("#author").text("Anonymous Geek");
    quoteStored = quote.joke;
  });

  $("#new-quote").click(getQuote);
  $("#tweet-quote").click(tweetThat);
});