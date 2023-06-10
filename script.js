let product = document.querySelector('#product');
let btn = document.querySelector('#btn');
let list = document.querySelector('ul');


btn.addEventListener('click', () => {   
    item  = '<li>' + product.value + '</li>';
    list.innerHTML +=item;
    product.value = '';
    product.focus();
});

let cleaning = document.querySelector('#cleaning');
let btn1 = document.querySelector('#btn1');
let listCleaning = document.querySelector('#listCleaning');

btn1.addEventListener('click', () => {   
    item  = '<li>' + cleaning.value + '</li>';
    bla.innerHTML +=item;
    cleaning.value = '';
    cleaning.focus();
});



