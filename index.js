let array = JSON.parse(localStorage.getItem("product")) || [];

function products(prodn, cato, price, img, gen, sold) {
  this.name = prodn;
  this.category = cato;
  this.price = price;
  this.image = img;
  this.gender = gen;
  this.sold = sold;
}

function addproducts(e) {
  e.preventDefault();
  // console.log("inside")

  let form = document.querySelector("#add");
  let prodn = document.querySelector("#name").value;
  let cato = document.querySelector("#catog").value;
  let img = document.querySelector("#image").value;
  let price = document.querySelector("#price").value;
  let gen = document.querySelector("#gender").value;
  let sold = document.querySelector("#sold").value;
  var prod = new products(prodn, cato, price, img, gen, sold);
  array.push(prod);
  localStorage.setItem("product", JSON.stringify(array));
}
