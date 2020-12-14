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

  currentStep = 0;
  lastStep = 7;

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

  letters(letter, event) {
    event.target.disabled = true;
    if (this.quote.guess(letter)) {
      this.drawQuote();
    } else {
      this.currentStep++;
      document.getElementsByClassName("step")[
        this.currentStep
      ].style.opacity = 1;
      if (this.currentStep == this.lastStep) {
        this.loosing();
      }
    }
  }

  buildLetters() {
    for (let i = 0; i < 26; i++) {
      const label = (i + 10).toString(36);
      const button = document.createElement("button");
      button.innerHTML = label;
      button.addEventListener("click", (event) => {
        this.letters(label, event);
      });
      this.lettersWrapper.appendChild(button);
    }
  }

  drawQuote() {
    const content = this.quote.getContent();
    this.wordWrapper.innerHTML = content;
    if (!content.includes("_")) {
      this.winning();
    }
  }

  winning() {
    this.wordWrapper.innerHTML = "Gratulacje! wygrywasz!";
    this.lettersWrapper.innerHTML = "";
  }

  loosing() {
    this.wordWrapper.innerHTML = "Przegrywasz! Koniec gry!";
    this.lettersWrapper.innerHTML = "";
  }

  start() {
    document.getElementsByClassName("step")[this.currentStep].style.opacity = 1;
    this.buildLetters();
    this.drawQuote();
  }
}

const game = new Game({
  outputWrapper: document.getElementById("output"),
  wordWrapper: document.getElementById("word"),
  categoryWrapper: document.getElementById("category"),
  lettersWrapper: document.getElementById("letters"),
});
game.start();
