const btn = document.querySelector("button");
const btn2 = document.querySelector(".second");

const Animal = function (name, spieces, age = "niewiadomo ile") {
  this.name = name;
  this.spieces = spieces;
  Animal.prototype.click = function () {
    console.log(
      `Zwierze ma na imie ${name}, ma ${age} lat i jest rasy ${spieces}`
    );
  };
};

class Animal2 extends Animal {
  constructor(name, age, spieces) {
    super(name, spieces, age);
    this.name = name;
    this.age = age;
    this.spieces = spieces;
  }
  click2() {
    return this.click();
  }
}

const cat = new Animal("Koko", "Kotek Brytyjski");
const dog = new Animal2("Puszek", "10", "mieszaniec");

btn.addEventListener("click", dog.click);
btn2.addEventListener("click", dog.click2);
