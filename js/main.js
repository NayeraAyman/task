var quoteList = [
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    quote: "So many books, so little time.",
    author: "Frank Zappa",
  },
  {
    quote: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    quote: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost",
  },
  {
    quote: "If you tell the truth, you don't have to remember anything.",
    author: "Mark Twain",
  },
  {
    quote: "A friend is someone who knows all about you and still loves you.",
    author: "Elbert Hubbard",
  },
  {
    quote: "Always forgive your enemies; nothing annoys them so much.",
    author: "Oscar Wilde",
  },
  {
    quote:
      "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author: "Mahatma Gandhi",
  }
];


function getRandomQuote(){
    var randomQuote =Number( Math.floor(Math.random()*quoteList.length ))
    document.getElementById("quote").innerHTML = `"${quoteList[randomQuote].quote}"`
    document.getElementById("author").innerHTML = `--${quoteList[randomQuote].author}`
    // console.log( (document.getElementById("quote").innerHTML = `"${quoteList[randomQuote].quote}"`));
    // console.log( (document.getElementById("author").innerHTML = `--${quoteList[randomQuote].author}`));  
}
