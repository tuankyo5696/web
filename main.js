'use-strict';

const addToCartButtonsDOM = document.querySelectorAll('[data-action="ADD_TO_CART"]');
addToCartButtonsDOM.forEach(addToCartButtonDOM =>{
    
    addToCartButtonDOM.addEventListener('click',()=>{
        const product= addToCartButtonDOM.parentNode;
        console.log(product.querySelector('.product__image'));
        console.log(product.querySelector('.product__name'));
        console.log(product.querySelector('.product__price'));
    });
    
    
});