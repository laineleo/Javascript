//Task 1

let item1= 2;
let item2= 30;
let item3= 28;
let totalCost= item1 + item2 + item3;

console.log("The total cost of the items is: ₱",totalCost);

//Task 2

let item1= 2;
let item2= 30;
let item3= 28;
let totalCost= (item1 + item2 + item3)/3;

console.log("The average is:", totalCost);

//Task 3

let num= 9;
if(num % 2===0){
    console.log(num, "is an even number");
}else{
    console.log(num, "is an odd number")
}

//Task 4
let price= 100;
let discount= 20;
let discountAmount= (price*discount)/100;
let discountedPrice= price-discountAmount;

console.log("The discounted price is:", discountedPrice);

//Bonus Task
let finalPrice= 80;
let discount= 20;
let originalPrice= finalPrice/(1-discount/100);

console.log("The original price before the discount was:", originalPrice);