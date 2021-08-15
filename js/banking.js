// < !--deposit, Windraw and Balance-- >

//deposit
document.getElementById('deposit-button').addEventListener('click', function () {
    // get deposit amount
    const depositField = document.getElementById('deposit-input');

    //parsefloaat string to number
    const newdepositamountText = depositField.value;
    const newdepositamount = parseFloat(newdepositamountText);

    // amount add in deposit cart
    const deposittotal = document.getElementById('current-deposit');

    //parsefloaat string to number
    const previousDepositText = deposittotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);


    const newDepositTotal = previousDepositAmount + newdepositamount;
    deposittotal.innerText = newDepositTotal;
    // clear deposit input field
    depositField.value = '';


    // update Account balance
    const totalBalance = document.getElementById('total-balance');

    //parsefloaat string to number 
    const totalBalanceText = totalBalance.innerText;
    const previousTotalBalance = parseFloat(totalBalanceText);


    const newBalancetotal = previousTotalBalance + newdepositamount;

    totalBalance.innerText = newBalancetotal;

    // Deposit ammount from total balance



});

document.getElementById('withdraw-button').addEventListener('click', function () {

    const withdrawinput = document.getElementById('withdraw-input');

    const withdrawinputText = withdrawinput.value;
    const newWithdrawinput = parseFloat(withdrawinputText);


    const currentWithdraw = document.getElementById('current-withdraw');

    const currentWithdrawText = currentWithdraw.innerText;
    const previousWithdrawAmount = parseFloat(currentWithdrawText);


    const newPreviousWithdrawAmount = previousWithdrawAmount + newWithdrawinput;

    currentWithdraw.innerText = newPreviousWithdrawAmount;

    withdrawinput.value = '';

    // total-withdraw

    const previousBalance = document.getElementById('total-balance');

    const previousBalanceText = previousBalance.innerText;
    const newPreviousBalance = parseFloat(previousBalanceText);

    const newPreviousBalanceTotal = newPreviousBalance - newWithdrawinput;

    previousBalance.innerText = newPreviousBalanceTotal;


});