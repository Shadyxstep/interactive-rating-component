const submit =  document.querySelector('.btn');
const card_one = document.querySelector('.card-1');
const card_two = document.querySelector('.card-2');
const rating = document.querySelectorAll('.rating_button');
const result = document.getElementById('rating');
const r_result = document.getElementById('r_result');

document.getElementById('1').onclick = function(){
    result.innerHTML = "1";
}

document.getElementById('2').onclick = function(){
    result.innerHTML = "2";
}

document.getElementById('3').onclick = function(){
    result.innerHTML = "3";
}

document.getElementById('4').onclick = function(){
    result.innerHTML = "4";
}

document.getElementById('5').onclick = function(){
    result.innerHTML = "5";
}

submit.addEventListener('click', function(){
    console.log('Hello!');

    if(result.textContent.length === 0){
        alert('Please select a rating below.');
    } else {
        if(card_two.classList.contains('hide')){
            card_one.classList.add('hide');
            card_two.classList.remove('hide');
        }
    }
});