let productsdata = JSON.parse(localStorage.getItem("product"));
let length = productsdata.length;
counter = document.querySelector("#counter");
counter.innerText = `There are  ${length} items in this products:-`;
counter.style.marginBottom = "20px";
counter.style.marginTop = "20px";
counter.style.color = "red";

// console.log(productsdata);
productsdata.map(function (elem, i) {
  let div = document.createElement("div");
  let img = document.createElement("img");
  img.src = elem.image;
  img.style.marginBottom = "-10px";
  let ca = document.createElement("p");
  ca.innerText = elem.category;
  ca.style.marginBottom = "-10px";
  let name = document.createElement("h3");
  name.innerText = elem.name;
  name.style.marginBottom = "-10px";
  let price = document.createElement("p");
  price.innerText = elem.price;
  price.style.marginBottom = "-1px";
  let sld = document.createElement("button");
  sld.innerText = "Sold";
  sld.style.color = "white";
  sld.style.padding = "4px 20px";
  sld.style.margin = "auto";
  sld.style.marginBottom = "5px";
  sld.style.borderRadius = "5px";
  sld.setAttribute("id", "sold");

  if (elem.sold == elem.price) {
    sld.style.backgroundColor = "Red";
  } else {
    sld.style.backgroundColor = "Green";
  }
  let remove = document.createElement("button");
  remove.innerText = "Remove";
  remove.style.color = "white";
  remove.style.padding = "4px 13px";
  remove.style.margin = "auto";
  remove.style.backgroundColor = "blue";
  remove.style.borderRadius = "5px";

  remove.addEventListener("click", function () {
    addproducts(elem, i);
  });
  div.append(img, ca, name, price, sld, remove);
  document.querySelector("#cont").append(div);
});
function addproducts(elem, i) {
  productsdata.splice(i, 1);
  localStorage.setItem("product", JSON.stringify(productsdata));
  window.location.reload();
}
