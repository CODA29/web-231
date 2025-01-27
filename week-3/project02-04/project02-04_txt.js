/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Dagmawi Megra
      Date: 01/25/2025 

      Filename: project02-04.js
 */
 chicken_price = 10.95;
 halibut_price = 13.95;
 burger_price = 9.95;
 salmon_price = 18.95;
 salad_price = 7.95;
 sales_tax = 0.07;

 document.getElementById("chicken").addEventListener("click", calcTotal);
 document.getElementById("halibut").addEventListener("click", calcTotal);
 document.getElementById("burger").addEventListener("click", calcTotal);
 document.getElementById("salmon").addEventListener("click", calcTotal);
 document.getElementById("salad").addEventListener("click", calcTotal);
 
 function calcTotal(){
   
   cost = 0;
   
   const buyChicken = document.getElementById("chicken").checked;
   const buyHalibut = document.getElementById("halibut").checked;
   const buyBurger = document.getElementById("burger").checked;
   const buySalmon = document.getElementById("salmon").checked;
   const buySalad = document.getElementById("salad").checked;

   cost += buyChicken ? chicken_price : 0;
   cost += buyHalibut ? halibut_price : 0;
   cost += buyBurger ? burger_price : 0;
   cost += buySalmon ? salmon_price : 0;
   cost += buySalad ? salad_price : 0;

   document.getElementById("foodTotal").innerHTML = formatCurrency(cost);

   tax = cost * sales_tax;

   document.getElementById("foodTax").innerHTML = formatCurrency(tax);

   totalCost = cost + tax;

   document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);

 }


// Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }
