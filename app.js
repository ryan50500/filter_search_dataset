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

    const text = e.target.value.toLowerCase();
    // console.log(productName[0]);




    // this loop works with IE
    for(i = 0; i < productName.length; i++) {
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


}



// This code has been replaced by the function(filterProducts) above which does a better job

// search.addEventListener("keyup", (e) => {
//     e.preventDefault();
//     const searchValue = search.value.toLowerCase().trim();
//     // alert(search.value);

    
//     for (i = 0; i < storeProducts.length; i++) {
//         if (storeProducts[i].classList.contains(searchValue)) {
//             storeProducts[i].style.display = 'block';
//         } else if (searchValue == "") {
//             storeProducts[i].style.display = 'block';
//         } else {
//             storeProducts[i].style.display = 'none';    
//         }

//     //    if (searchValue == "") {
//     //     storeProducts[i].style.display = 'block';
//     //    }
        
//     }

// })
