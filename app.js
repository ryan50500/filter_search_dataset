const btns = document.querySelectorAll('.btn');
const storeProducts = document.querySelectorAll('.store-product');
// const search = document.getElementById(search);


// BUTTONS TO FILTER PRODUCTS

// btns.forEach(function(button) {
//     button.addEventListener('click', (e) => {
//         e.preventDefault()
        
//         const filter = e.target.dataset.filter;
//         console.log(filter);
        
//         storeProducts.forEach((product)=> {
//             if (filter === 'all'){
//                 product.style.display = 'block'
//             } else {
//                 if (product.classList.contains(filter)){
//                     product.style.display = 'block'
//                 } else {
//                     product.style.display = 'none'
//                 }
//             }
//         });
//     });
// });



// BUTTONS TO FILTER PRODUCTS (old browsers)

// loop through all buttons
for (i=0; i<btns.length; i++) {
    // add click event to the button that is clicked
    btns[i].addEventListener('click', function(e){
        e.preventDefault();
        
        // get the value of the dataset 'filter' of the clicked button
        const filter = e.target.dataset.filter;
        // console log data-filter value
        console.log(filter);
        
        // loop through all products
        for (i=0; i<storeProducts.length; i++) {
            // if the clicked button attribute 'data-filter' has a value of 'all', then show all products
            if (filter === 'all'){
                storeProducts[i].style.display = 'block'
            } else {
                // 'classList.contains(filter)' checks if any product has a class the same as the 'data-filter' value of the clicked button
                if (storeProducts[i].classList.contains(filter)){
                    // whichever product(s) have the class, display them
                    storeProducts[i].style.display = 'block'
                } else {
                    // product(s) which don't have the class, hide them
                    storeProducts[i].style.display = 'none'
                }
            }
        };
    });
}



// SEARCH FILTER
const search = document.getElementById("search");
const productName = document.querySelectorAll(".product-details h2");



// A BETTER WAY TO FILTER THROUGH THE PRODUCTS
search.addEventListener("keyup", filterProducts);


function filterProducts(e) {
    searchresult = search.value;
    console.log(searchresult);

    const text = searchresult.toLowerCase();
    // console.log(productName[0]);


    // this loop works with IE
    for (i = 0; i < productName.length; i++) {
        const item = productName[i].firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            productName[i].parentElement.parentElement.style.display = "block"
        } else {
            productName[i].parentElement.parentElement.style.display = "none"
        }
    }


       // This loop not compatible with IE

    // productName.forEach(function(product) {
    //     const item = product.firstChild.textContent;
    //     if (item.toLowerCase().indexOf(text) != -1) {
    //         product.parentElement.parentElement.style.display = "block"
    //     } else {
    //         product.parentElement.parentElement.style.display = "none"
    //     }
    // })
    


      // use this for EXACT user search input (tests if user input matches classname of eacg h2)

    //   for (i = 0; i < productName.length; i++) {
    //     //   current iteration of loop
    //     const item = productName[i];
    //     if (item.classList.contains(text)) {
    //         productName[i].parentElement.parentElement.style.display = "block"
    //     } else {
    //         productName[i].parentElement.parentElement.style.display = "none"
    //     }
    // }



 


}



