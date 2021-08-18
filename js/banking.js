//handel Deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {
    // get the amount deposited
    const depositInput = document.getElementById('deposit-input');

    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);

    // update deposit total

    const depositTotal = document.getElementById('deposit-total');
    const previoudDepositText = depositTotal.innerText;
    const previoudDepositAmmount = parseFloat(previoudDepositText)
    const newDepositTotal = previoudDepositAmmount + newDepositAmount;



    depositTotal.innerText = newDepositTotal;


    // update accunt ballance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

    // clear the deposit input field
    depositInput.value = '';
});


//handel withdrow event handelar
document.getElementById('withdrow-button').addEventListener('click', function () {
    const withdrowInput = document.getElementById('withdrow-input');
    const withdrowAmountText = withdrowInput.value;
    const newWithdrowAmount = parseFloat(withdrowAmountText);
    console.log(newWithdrowAmount);

    // set withdrow total
    const withdrowTotal = document.getElementById('Withdrow-total');
    const previusWithdrowText = withdrowTotal.innerText;

    const previusWithdrowTotal = parseFloat(previusWithdrowText);
    const newWithdrowTotal = previusWithdrowTotal + newWithdrowAmount;
    withdrowTotal.innerText = newWithdrowTotal;


    // set new balance

    const balanceTotal =document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal-newWithdrowAmount;
    balanceTotal.innerText=newBalanceTotal;

    // clear 
    withdrowInput.value='';

});
