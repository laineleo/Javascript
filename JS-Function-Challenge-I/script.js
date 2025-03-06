function calculateDiscount(price, discountRate) {
    let discount = price * (discountRate / 100);
    console.log("The discount is: " + discount);
}

calculateDiscount(100, 20);  // Correct: 100 is price, 20 is discountRate
calculateDiscount(20, 100);  // Incorrect: 20 is treated as discountRate, 100 as price