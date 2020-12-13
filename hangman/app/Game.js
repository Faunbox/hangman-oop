import { Quote } from "./Quote.js";

class Game {
  constructor({ outputWrapper, wordWrapper, categoryWrapper, lettersWrapper }) {
    this.outputWrapper = outputWrapper;
    this.wordWrapper = wordWrapper;
    this.categoryWrapper = categoryWrapper;
    this.lettersWrapper = lettersWrapper;
    const { text, category } = this.quotes[
      Math.floor(Math.random() * this.quotes.length)
    ];
    this.categoryWrapper.innerHTML = category;
    this.quote = new Quote(text);
  }

  quotes = [
    {
      text: "pan tadeusz",
      category: "utwór literacki",
    },
    {
      text: "dzieci z bulerbyn",
      category: "utwór literacki",
    },
    {
      text: "matrix",
      category: "film",
    },
    {
      text: "koko pan koko",
      category: "imie zwierzecia",
    },
  ];

  letters(letter) {
    console.table(letter);
  }

  buildLetters() {
    for (let i = 0; i < 26; i++) {
      const label = (i + 10).toString(36);
      const button = document.createElement("button");
      button.innerHTML = label;
      button.addEventListener("click", () => {
        this.letters(label);
        // console.log(button.innerHTML);
      });
      this.lettersWrapper.appendChild(button);
    }
  }

  start() {
    this.buildLetters();
  }
}

const game = new Game({
  outputWrapper: document.getElementById("output"),
  wordWrapper: document.getElementById("word"),
  categoryWrapper: document.getElementById("category"),
  lettersWrapper: document.getElementById("letters"),
});
game.start();
