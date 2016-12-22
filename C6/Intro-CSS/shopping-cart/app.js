/*jslint plusplus: true, sloppy: true, vars: true*/
//global variables

var manuelCart = "off"; //manually change 

//FUNCTIONS//
function addToCart(clicked) {
    //add items to shopping cart


    //create div for new item based on storefront div
    var divInCart = document.createElement('div');
    divInCart.innerHTML = clicked.parentElement.innerHTML;
    //change new divs class name
    divInCart.className = "incart";

    //remove line breaks and buy now button for new div
    var button = divInCart.querySelector("button");
    divInCart.removeChild(button);
    var breaks = divInCart.querySelectorAll("br");
    var i; //loop variable
    for (i = 0; i < breaks.length; i++) {
        divInCart.removeChild(breaks[i]);
    }

    //set class names for input when in shopping cart
    divInCart.querySelector("input").className = "countBox";

    //transfer user selected input value
    divInCart.lastElementChild.value = clicked.nextElementSibling.value;

    //append div to shopping cart
    shoppingCart.appendChild(divInCart);

    //updateTotals
    updateTotals(shoppingCart);
}

function updateTotals() {
    var inCarts = shoppingCart.querySelectorAll('.incart');

    var itemsCount = 0; //count number of items in cart
    var finalPrice = 0;
    var i; //loop variable
    for (i = 0; i < inCarts.length; i++) {
        var itemCount = parseInt(inCarts[i].querySelector('input').value, 10);
        itemsCount += itemCount;
        var priceTotal = inCarts[i].querySelector(".price").innerHTML;
        //console.log(priceTotal);
        priceTotal = parseFloat(priceTotal.replace("$", ""));
        priceTotal = priceTotal * itemCount;
        finalPrice += priceTotal;

        //remove item from cart if user chose "0"
        if (itemCount === 0) {
            shoppingCart.removeChild(inCarts[i]);
        }
    }

    var itemsNumber = document.querySelector("#itemsNumber");
    itemsNumber.innerHTML = "Items (" + itemsCount + ")";
    var totalCost = document.querySelector("#Total");
    finalPrice = addCoupon(finalPrice);
    totalCost.innerHTML = finalPrice.toFixed(2);
}

function addCoupon(finalPrice) {
    console.log(finalPrice);
    var coupon = document.querySelector("#coupon");
    if (coupon.value === "get15") {
        coupon.style.color = "green";
        finalPrice = (finalPrice * 0.85);
        return finalPrice;
    }
    
    if (coupon.value === "get10") {
        coupon.style.color = "green";
        finalPrice = (finalPrice * 0.90);
        return finalPrice;
    }
    
    if (coupon.value === "get25") {
        coupon.style.color = "green";
        finalPrice = (finalPrice * 0.75);
        return finalPrice;
    }
    
    if (coupon.value !== "Coupon Code") {
        coupon.style.color = "red";
        return finalPrice;
    }
    
    return finalPrice;
}

function cartDisplay() {
    var cart = document.querySelector("#Shopping-Cart");
    if (manuelCart !== false) {
        cart.style.display = "block";
        document.querySelector("#displayCart").style.right = "17vw";
        document.querySelector("#storefront").style.width = "83vw";
    } else {
        cart.style.display = "none";
        document.querySelector("#displayCart").style.right = "0";
        document.querySelector("#storefront").style.width = "100vw";
    }
}



//MAIN PROGRAM CODE

//grab storefront
var storefront = document.querySelector("#storefront");

//event listener for adding items to cart
storefront.addEventListener("click", function (event) {
    //grab clicked area
    var clicked = event.target;

    //grab display cart button
    var cartButton = document.querySelector("#displayCart");


    if (clicked.getAttribute('type') === "submit") {
        event.preventDefault();
        addToCart(clicked);
        cartDisplay();
        cartButton.style.display = "block";
    } else if (clicked === cartButton) {
        event.preventDefault();
        if (manuelCart === "off") {
            manuelCart = false;
            cartDisplay();
        } else {
            manuelCart = !manuelCart;
            cartDisplay();
        }
    }
});

//grab shopping Cart
var shoppingCart = document.querySelector("#Shopping-Cart");

//event listener for shopping cart
shoppingCart.addEventListener("click", function (event) {
    var clicked = event.target;
    if (clicked === document.querySelector("#updateCart")) {
        updateTotals();
    }
});
