const quotes = [
  {
    quote: "We make a living by what we get, we make a life by what we give.",
    author: "Winston Churchill",
  },
  {
    quote: "Do not turn back when you are just at the goal.",
    author: "Publilus Syrus",
  },
  {
    quote: "Kites rise highest against the wind - not with it.",
    author: "Winston Churchill",
  },
  {
    quote: "You may delay, but time will not.",
    author: "Benjamin Franklin",
  },
  {
    quote: "The busy bee has no time for sorrow.",
    author: "William Blake",
  },
  {
    quote: "Whether you think you can, or you think you can't - you're right.",
    author: "Henry Ford",
  },
  {
    quote: "Act as if it were impossible to fail.",
    author: "Dorothea Brande",
  },
  {
    quote: "Keep your face to the sunshine and you cannot see the shadow.",
    author: "Helen Keller",
  },
  {
    quote: "Sincerity is the way of Heaven.",
    author: "Mencius",
  },
  {
    quote: "Nature gives you the face you have at twenty; it is up to you to merit the face you have at fifty.",
    author: "Gabriel Coco Chanel",
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;