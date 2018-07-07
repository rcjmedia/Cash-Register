var mainButtons = 0;

//Clear the Screen 
clear.addEventListener('click', clearFunction);

function clearFunction(){
	result.innerHTML = null;
}

//Deposit 
deposits.addEventListener('click', depositFunction);

function depositFunction(){
    mainButtons += parseInt(result.innerHTML);
    result.innerHTML = null;
    console.log(mainButtons);
}

//Withdraw
withdraws.addEventListener('click', withdrawFunc);

function withdrawFunc(){
    mainButtons -= parseInt(result.innerHTML);
    result.innerHTML = null;
    console.log(mainButtons);
}
//View Balance 
balances.addEventListener('click', balanceFunc);

function balanceFunc(){
    return result.innerHTML = mainButtons;
}
console.log(mainButtons);