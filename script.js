/*----- constants -----*/
const tipKey = document.querySelectorAll(".tip_key");
const customTip = document.querySelector("#customTipValue");
const amountOfPeople = document.querySelector(".numPeopleSlider");
const resetBtn = document.querySelector(".resetBtn");
let billAmount = document.querySelector("#billAmount");
let tipAmt = document.querySelector('#tip-amount');
let totalAmt = document.querySelector("#total-amount");
let output = document.querySelector(".amountPerPerson_output");
let numPeopleAmt = document.querySelector("#split-num");
/*----- app's state (variables) -----*/
let tipAmount = 0;

/*----- event listeners -----*/
// add an event listener for every tip key
tipKey.forEach(key => {
    key.addEventListener('click', (evt) => {
        handleKeyClick(evt);
    })
})

// add event listener on the custom tip amount
customTip.addEventListener('change', function(e) {
    tipAmount = (customTip.value/100);
    calculateAmtPerPerson();
    console.log(tipAmount);
});

// add event listener to detect a change in the number of people
amountOfPeople.addEventListener('mouseup', function(e) {
    calculateAmtPerPerson();
});

// add event listener to the reset button
resetBtn.addEventListener('click', function(e) {
    tipAmount = 0;
    billAmount.value = 0;
    numPeopleAmt.value = 0;
    calculateAmtPerPerson();
});

/*----- functions -----*/
function handleKeyClick(e) {
    tipAmount = e.target.id;
    calculateAmtPerPerson();
}

function calculateAmtPerPerson() {
    let bill = parseFloat(billAmount.value);
    let tipPercent = parseFloat(tipAmount);
    let numPeople = parseFloat(amountOfPeople.value);
    let totalTip = bill * tipPercent;
    let totalAfterTip = (tipPercent + 1) * bill;
    let amtPerPerson = totalAfterTip / numPeople;
    
    output.textContent = `$${amtPerPerson.toFixed(2)}`;
    tipAmt.textContent = `$${totalTip}`;
    totalAmt.textContent = `$${totalAfterTip}`;
    numPeopleAmt.textContent = `${numPeople}`;
}

