const btn = document.querySelector("button");
const btn2 = document.querySelector(".second");

const Animal = function (name, spieces) {
  this.name = name;
  this.spieces = spieces;
  Animal.prototype.click = function () {
    console.table(`${name}, ${spieces}`);
  };
};

class Animal2 {
  constructor(name, age, spieces) {
    this.name = name;
    this.age = age;
    this.spieces = spieces;
    this.click = function () {
      console.log(
        `Zwierze ma na imie ${name}, ma ${age} lat i jest rasy ${spieces}`
      );
    };
  }
}

const cat = new Animal("Koko", "Kotek Brytyjski");
const dog = new Animal2("Puszek", "10", "mieszaniec");

btn.addEventListener("click", cat.click);
btn2.addEventListener("click", dog.click);
