(function () {
    let priceItemHeader=document.querySelectorAll('.price__item-name-container');
    let priceItem=document.querySelectorAll('.price__item');
    for (let index = 0; index < priceItemHeader.length; index++) 
    {

        priceItemHeader[index].addEventListener('click', ()=>
        {
            priceItem[index].classList.toggle('price__item-active');
            
        })
    }   
}());

(function () {
    let questionItemHeader=document.querySelectorAll('.question__item-header');
    let questionItem=document.querySelectorAll('.question__item'); 
    for (let index = 0; index < questionItemHeader.length; index++) 
    {

        questionItemHeader[index].addEventListener('click', ()=>
        {
            questionItem[index].classList.toggle('question__item-active');
            
        })
    }   
}());
(function (){
    let btn=document.querySelector('.burger__btn');
    btn.addEventListener('click',()=>{
        let burger=document.querySelector('.header__burger');
        let body=document.querySelector('body');
        burger.classList.remove('header__burger_active');
        body.classList.remove('body_no-scroll')
        console.log('close burger');
    }
    );
}());
(function (){
    let burgerMenu=document.querySelector('.burger__menu');
    let burger=document.querySelector('.header__burger');
    document.onmousemove = function (event) {
         console.log(event);
        if (event.clientY > 500 && burger.classList.contains('header__burger_active')) {
            burgerMenu.addEventListener('click',()=>{
                
                let body=document.querySelector('body');
                burger.classList.remove('header__burger_active');
                body.classList.remove('body_no-scroll')
                console.log('WHY');
            } 
            );
        }
    }
}());

(function (){
    let burgerImg=document.querySelector('.burger__img');
    let burger=document.querySelector('.header__burger');
    let body=document.querySelector('body');
    burgerImg.addEventListener('click',()=>{
        burger.classList.add('header__burger_active');
        body.classList.add('body_no-scroll')
        console.log('open burger');
    }
    );
}());

