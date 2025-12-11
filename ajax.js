let xhr = new XMLHttpRequest();
xhr.open("GET", "https://dummyjson.com/products");
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    let user = JSON.parse(xhr.response);
    let pro = user.products;
    console.log(JSON.parse(xhr.response));
    let card = document.getElementById("products");

    card.innerHTML = pro.map(car => {
      return `<div class="card">
    <div class="heart-icon"></div>
    <div class="Product-image" ><img src="${car.thumbnail}" alt=""></div>
    <p class="Product-title">${car.title}</p>
    <div class="rive">
        <div class="Rating-stars">${car.rating.toFixed(1)}★</div>
        <p class="review-count">(${car.reviews.length})</p>
    </div>
    <div class="price">
        <div class="amount">₹
${car.price}</div>
    
        <div class="offer">${car.discountPercentage}%off</div>
    </div>
</div>`;
    }).join("")
  }
};
xhr.send();
