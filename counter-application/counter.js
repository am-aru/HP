let spanNumEl = document.getElementById('number');

let incrementEl = document.getElementById('increment');

let addBtnEl = document.getElementById('add');

let subBtnEl = document.getElementById('subtract');

let resetBtnEl = document.getElementById('reset');



//console.log(incrementEl.value)

addBtnEl.addEventListener('click',function(event){
    //e.preventDefault();
    let getIncrementValue = parseInt(incrementEl.value);
    if(incrementEl.value > 10) {
        alert("value must be less than or equal to 10");
        return false;
    }
    let getSpanElValue = parseInt(spanNumEl.textContent);
    spanNumEl.textContent = getSpanElValue + getIncrementValue;
});

subBtnEl.addEventListener('click',function(event) {
    let getDecrementValue = parseInt(incrementEl.value);
    if(incrementEl.value > 10) {
        alert("value must be less than or equal to 10");
        return;
    }
    let getSpanElValue = parseInt(spanNumEl.textContent);
    spanNumEl.textContent = getSpanElValue - getDecrementValue;
});

resetBtnEl.addEventListener('click',function(event) {
    spanNumEl.textContent = 0;
    incrementEl.value = 1;
})