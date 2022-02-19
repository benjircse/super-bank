document.getElementById('submit-btn').addEventListener('click', function() {
    const foodAmount = document.getElementById('food-input')
    const foodNumber = parseFloat(foodAmount.value)
    const rentAmount = document.getElementById('Rent-input')
    const rentNumber = parseFloat(rentAmount.value)
    const clotherAmount = document.getElementById('clother-input')
    const clotherNumber = parseFloat(clotherAmount.value)
    const totalAmount = foodNumber + rentNumber + clotherNumber;
    // Display total balance
    const balanceTotal = document.getElementById('total-Expenses');
    balanceTotal.innerText = totalAmount
    foodAmount.value = ''
    rentAmount.value = ''
    clotherAmount.value = ''
        // input balance
    const addIncome = document.getElementById('income-input')
    const addTotalAmount = parseFloat(addIncome.value)
    const saveBalance = addTotalAmount - totalAmount;
    addIncome.value = ''
        // save Balance
    const subBalance = document.getElementById('sub=balance');
    subBalance.innerText = saveBalance;
    const notifyFail = document.getElementById('notify-fail')
    if (isNaN(foodNumber) || isNaN(rentNumber) || isNaN(clotherNumber) || isNaN(addTotalAmount)) {
        notifyFail.style.display = 'block'
    } else {
        notifyFail.style.display = "none"
    }


})