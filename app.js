const btns = document.querySelectorAll('.btn');
const storeProducts = document.querySelectorAll('.store-product');
// const search = document.getElementById(search);

btns.forEach(function(button) {

    button.addEventListener('click', (e) => {
        e.preventDefault()
        
        const filter = e.target.dataset.filter;
        console.log(filter);
        
        storeProducts.forEach((product)=> {
            if (filter === 'all'){
                product.style.display = 'block'
            } else {
                if (product.classList.contains(filter)){
                    product.style.display = 'block'
                } else {
                    product.style.display = 'none'
                }
            }
        });
    });
});

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



    // This loop not compatible with IE

    // productName.forEach(function(product) {
    //     const item = product.firstChild.textContent;
    //     if (item.toLowerCase().indexOf(text) != -1) {
    //         product.parentElement.parentElement.style.display = "block"
    //     } else {
    //         product.parentElement.parentElement.style.display = "none"
    //     }
    // })


}


