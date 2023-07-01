function pickNumbers(){
    let numbers = [];
    while(numbers.length < 6){
        let randomNum = Math.floor(Math.random() * 45 ) + 1

        if(numbers.indexOf(randomNum) === -1){
            numbers.push(randomNum)
        }
    }
    // let numbersElement = document.querySelector('.num_wrap')
    // numbersElement.innerHTML = '추첨된 번호 : '
    // numbersElement.classList.remove('show')
    let i =0;
    let intervalId = setInterval(function(){
        if(i=== numbers.length){
            clearInterval(intervalId);
            return;
        }
        const numBall = document.querySelectorAll('.number')
        for(let i =0; i<numBall.length; i++){
            numBall[i].innerHTML = numbers[i]

        }
       
    numbers= [];
        
       
    },1000) 

}

const btn = document.querySelector('.click_btn')

btn.addEventListener('click',()=>{

    pickNumbers()


})