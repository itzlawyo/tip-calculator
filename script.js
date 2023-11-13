/*----- constants -----*/
const billAmount = document.querySelector('#billAmount');
const tipKey = document.querySelector('.tip_keys');
const amountOfPeople = document.querySelector('.numPeopleSlider');
const customTip = document.querySelector('.tip_key--custom');
let output = document.querySelector('.amountPerPerson_output');
/*----- app's state (variables) -----*/
let tipAmount = 0;
/*----- cached element references -----*/
/*----- event listeners -----*/
tipKey.addEventListener('click', function(e) {
    tipAmount = e.target.id;
    calculateAmtPerPerson();
});

customTip.addEventListener('click', function(e) {
    console.log(e);
});

amountOfPeople.addEventListener('mouseup', function(e) {
    calculateAmtPerPerson();
});

/*----- functions -----*/
function calculateAmtPerPerson() {
    let totalAfterTip = (parseFloat(tipAmount) + 1) * parseFloat(billAmount.value);
    let amtPerPerson = totalAfterTip / parseFloat(amountOfPeople.value);
    output.innerText = `${amtPerPerson.toFixed(2)} / person`;
}

