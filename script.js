let product = document.querySelector('#product');
let btn = document.querySelector('#btn');
let btnReset = document.querySelector('#btn-reset');
let list = document.querySelector('ul');


btn.addEventListener('click', () => {   
    item  = '<li>' + product.value + '</li>';
    list.innerHTML +=item;
    product.value = '';
    product.focus();
    btnReset.addEventListener('click', () =>{

    });
});



