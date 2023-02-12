var productData = {
  id: "1",
  name: "Men Navy Blue Solid Sweatshirt",
  preview:
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
  photos: [
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg",
  ],
  description:
    "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
  size: [1, 1, 0, 1, 0],
  isAccessory: false,
  brand: "United Colors of Benetton",
  price: 2599,
};

/**************************
 *
 * LFET SECTION
 */

const leftEl = document.getElementById("left");
const previewImg = document.createElement("img");
leftEl.appendChild(previewImg);

function setAttributes(el, attrs) {
  for (var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}
setAttributes(previewImg, {
  src: `${productData.preview}`,
  alt: "preview-image",
});

/*****************************
 *
 * RIGHT SECTION
 */

const h1 = document.querySelector(".name");
const h4 = document.querySelector("#brand");
const price = document.querySelector("#price");
const descEl = document.querySelector("#description");

h1.innerHTML = productData["name"];
h1.style.fontWeight = "400";
h4.innerHTML = productData["brand"];
price.innerHTML = productData["price"];
price.style.color = "#46C2CB";
price.style.fontWeight = "500";
descEl.innerHTML = productData["description"];

const imgEl = document.querySelectorAll(".setImg");

imgEl.forEach((elem, i) => {
  document
    .querySelectorAll(".setImg")
    [i].setAttribute("src", productData["photos"][i]);

  elem.addEventListener("click", function () {
    previewImg.setAttribute("src", productData["photos"][i]);
    imgEl.forEach((elems) => elems.classList.remove("active"));
    this.classList.add("active");
  });
});
