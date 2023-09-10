let counter = document.querySelector(".counter");
let btns = document.querySelectorAll(".btn");
let counterValue = parseInt(counter.textContent) ;

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        if( btn.className === "btn dec"){
            counterValue-- ;
        }else if(btn.className === "btn inc"){
            counterValue++ ;
        }else {
            counterValue = 0 ;
        }
        counter.textContent = counterValue ;
        if (counterValue > 0){
            counter.style.color = `lime`;
        }else if (counterValue === 0){
            counter.style.color = `white`;
        }else {
            counter.style.color = `#ff3939`;
        }
    })
});
