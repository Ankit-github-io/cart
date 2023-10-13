const decreaseNumber = (incdec, itemPrice) => {
  let itemval = document.getElementById(incdec);
  let price = document.getElementById(itemPrice);
  let totalAmount = document.getElementById("productAmount");
  let shipCharges = document.getElementById("shipCharges");
  let totalCartAmt = document.getElementById("total-cart-amt");
  if (itemval.value > 1) {
    itemval.value = parseInt(itemval.value) - 1;
    itemval.style.background = "white";
    itemval.style.color = "black";

    price.innerHTML = parseInt(price.innerHTML) - 15;
    totalAmount.innerHTML = parseInt(totalAmount.innerHTML) - 15;
    totalCartAmt.innerHTML = parseInt(totalCartAmt.innerHTML) - 15;
  }
};


const increaseNumber = (incdec, itemPrice) => {
  let itemval = document.getElementById(incdec);
  let price = document.getElementById(itemPrice);
  let totalAmount = document.getElementById("productAmount");
  let shipCharges = document.getElementById("shipCharges");
  let totalCartAmt = document.getElementById("total-cart-amt");
  if (itemval.value < 5) {
    itemval.value++;
    a = price.innerHTML;
    price.innerHTML = parseInt(price.innerHTML) + 15;
    totalAmount.innerHTML = parseInt(totalAmount.innerHTML) + 15;

    totalCartAmt.innerHTML = parseInt(totalCartAmt.innerHTML) + 15;
  } else {
    itemval.style.background = "red";
    itemval.style.color = "white";
    alert("Sorry! you can buy only 5 peice  ");
  }
};


const discount_code = () => {
  let discount = document.getElementById("discount_code");
  let totalCartAmt = document.getElementById("total-cart-amt");
  let error = document.getElementById("error-trw");
  let btn = document.getElementById("tryagain");
  console.log(btn);
  if (discount.value === "DISCOUNT25") {
    totalCartAmt.innerHTML = parseInt(totalCartAmt.innerHTML) - 25;
    error.innerHTML = "Coupon Code Is Applied";
  } else {
    error.innerHTML = "Invalid Code";
    btn.innerHTML;
  }
};
