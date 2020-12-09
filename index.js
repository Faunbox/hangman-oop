const btn = document.querySelector("button");

const Animal = function (name, spieces) {
  this.name = name;
  this.spieces = spieces;
};

const cat = new Animal("Koko", "Kotek Brytyjski");

const click = () => {
  console.table(cat);
};

btn.addEventListener("click", click);
