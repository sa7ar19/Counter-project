let counter = document.querySelector(".counter");
let increase = document.querySelector(".inc");
let reset = document.querySelector(".res");
let decrease = document.querySelector(".dec");
let counterValue = parseInt(counter.textContent) ;


increase.addEventListener("click" , function(){
    counterValue += 1 ;
    counter.textContent = counterValue ;
});

reset.addEventListener("click" , function(){
    counterValue = 0 ;
    counter.textContent = counterValue ;
});

decrease.addEventListener("click" , function(){
    counterValue -= 1 ;
    counter.textContent = counterValue ;
});