let quotes = [
  {
    name: "Author1",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum sit amet justo donec enim diam vulputate ut. ",
  },
  {
    name: "Author2",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum sit amet justo donec enim diam vulputate ut. ",
  },
  {
    name: "JAuthor3",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum sit amet justo donec enim diam vulputate ut. ",
  },
  {
    name: "Author4",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum sit amet justo donec enim diam vulputate ut. ",
  },
  {
    name: "Author5",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum sit amet justo donec enim diam vulputate ut. ",
  },
];

const qouteBtn = document.querySelector("#qouteBtn");
const quoteAuthor = document.querySelector("#quoteAuthor");
const quote = document.querySelector("#quote");

quoteBtn.addEventListener("click", displayQoute);

function displayQoute() {
  const number = Math.floor(Math.random() * quotes.length);
  const newNumber = Math.floor(Math.random() * quotes.length);

  if (
    quoteAuthor.innerHTML === quotes[number].name &&
    quote.innerHTML === quotes[number].quote
  ) {
    quoteAuthor.innerHTML === quotes[newNumber].name;
    return;
  }
  quoteAuthor.innerHTML = quotes[number].name;
  quote.innerHTML = quotes[number].quote;
}
