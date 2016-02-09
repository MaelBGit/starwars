'use strict';

var quotes = [{
  'author': '- Yoda',
  'quote': 'When 900 years old, you reach… Look as good, you will not.'
}, {
  'author': '- Senator palpatine',
  'quote': 'The Dark Side of the Force is the pathway to many abilities some consider to be.. Unnatural.'
}, {
  'author': '- Count Dooku',
  'quote': 'I sense great fear in you, Skywalker. You have hate… you have anger… but you don’t use them.'
}, {
  'author': '- Darth vader',
  'quote': 'Luke, you can destroy the Emperor. He has foreseen this. It is your destiny. Join me, and together we can rule the galaxy as father and son.'
}, {
  'author': '- Princess leila',
  'quote': 'Aren\'t you a little short for a storm trooper?'
}, {
  'author': '- Yoda',
  'quote': 'Mmm. Lost a planet, Master Obi-Wan has. How embarrassing.'
}, {
  'author': '- Qui-Gon Jinn',
  'quote': 'Your focus determines your reality'
}, {
  'author': '- Yoda',
  'quote': 'Do. Or do not. There is no try.'
}, {
  'author': '- Obi-Wan-Kenobi',
  'quote': 'In my experience there is no such thing as luck.'
}, {
  'author': '- Yoda',
  'quote': 'If once you start down the dark side, forever will it dominate your destiney, consume you it will, as it did Obi-Wan\'s apprentice'
}, {
  'author': '- Darth Vader',
  'quote': 'The Force is strong with this one.'
}];

function randomQuote()
{
  var random = Math.random();
  var index = Math.floor(random*quotes.length);
  var quote = quotes[index];
  console.log("Author: " + quote.author);
  console.log("Quote: " + quote.quote);
}
randomQuote();



function authorOfQuote(theQuote)
{
  for(var i =0; i<quotes.length; i++)
  {
    var reg = quotes[i].quote.search(theQuote);
    if(reg != -1)
    {
      console.log("is the author of the quote: " + quotes[i].author);
    }
  }
}
authorOfQuote("The Force");


function randomQuoteFromCharacter(author) {
    var quotes_author = [];
    var auteur = '';
    for(var i=0; i<quotes.length; i++) {
      var reg = quotes[i].author.search(author);
      if(reg != -1) {
        quotes_author.push(quotes[i].quote);
        auteur = quotes[i].author;
      }
    }
    var random = Math.random();
    var index = Math.floor(random*quotes_author.length);
    var quotation = quotes_author[index];
    console.log(auteur+' said : '+quotation);
}

randomQuoteFromCharacter("Yoda");
