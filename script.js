const item = document.querySelectorAll('.item');
const dot = document.querySelectorAll('.dot');
const numbers = document.querySelector('.numbers');
const list = document.querySelector('.list-items');
const prev_btn = document.getElementById('prev');
const next_btn = document.getElementById('next');

let ative = 0;
const total = item.length;
let timer;

function update(direction){

    document.querySelector('.item.ative').classList.remove('ative')
    document.querySelector('.dot.ative').classList.remove('ative')

    if(direction > 0){

        ative = ative + 1
        
        if(ative == total){
            ative = 0
        }

    } else if(direction < 0){
        ative = ative - 1

        if(ative < 0){
            ative = total - 1
        }

    }
    
    item[ative].classList.add('ative')
    dot[ative].classList.add('ative')

    numbers.textContent = String (ative + 1).padStart(2,'0')
}

clearInterval(timer)
timer = setInterval(() => {
    update(1)
}, 5000);
 
prev_btn.addEventListener("click",function(){
    
    update(-1)
});

next_btn.addEventListener("click",function(){
    
    update(1)
});