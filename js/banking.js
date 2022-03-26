function getTotalInputText(inputId) {
    const inputTotal = document.getElementById(inputId);
    const inputTotalText = inputTotal.innerText;
    const value = parseFloat(inputTotalText);

    return value;
}; 

function getInputValue(inputId){
    const totalInput = document.getElementById(inputId);
    const totalInputText = totalInput.value;
    const inputAmount = parseFloat(totalInputText);
    totalInput.value = '';

    return inputAmount;
};

function getTotalField(inputId, amount){
    const previusTotal = getTotalInputText(inputId);
    document.getElementById(inputId).innerText = previusTotal + amount;
};


function getTotalAmount(amount, isAdd){
    const previusTotalBalance = getTotalInputText('blance-total')

    if(isAdd == true){
        document.getElementById('blance-total').innerText = previusTotalBalance + amount;
    }
    else{
        document.getElementById('blance-total').innerText = previusTotalBalance - amount;
    }
};

document.getElementById('deposit-button').addEventListener('click', function(){
    const depositAmount = getInputValue('deposit-input');
    if(depositAmount > 0){
        getTotalField('deposit-total', depositAmount);
        getTotalAmount(depositAmount, true)
    }
});

document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getTotalInputText('blance-total');
    if(withdrawAmount > 0 && currentBalance >= withdrawAmount){
        getTotalField('withdraw-total', withdrawAmount);
        getTotalAmount(withdrawAmount, false)
    }
});