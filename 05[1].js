// get and set attributes  ----->get means value pana ,set means value set krna

// const link = document.querySelector("a");       //ye mjhe 1st attribute de dega link me anchor tag ka
// console.log(link);

// const link = document.querySelector("a"); 
// console.log(link.getAttribute("href"));   // used for set value
// console.log(link);

// const inputElement =document.querySelector(".form-todo input");        // mere ps ek form-todo he iska mjhe input dega
// console.log(inputElement);

//  const link = document.querySelector("a"); 
// console.log(link.getAttribute("href")); 

// const inputElement =document.querySelector(".form-todo input");       
// console.log(inputElement.getAttribute("type"));        //  ye mjhe form-todo k input ka type  dega

const link = document.querySelector("a"); 
console.log(link.getAttribute("href"));   // used for set value
link.setAttribute("href" ,"https://www.pepcoding.com/resources/online-java-foundation/linked-lists");   //for add this link at home
console.log(link.getAttribute("href")); 