const checkBalanceButton = document.querySelector('.balance')
const withdrawalButton = document.querySelector('.withdrawal')
const depositButton = document.querySelector('.deposit')
const quickWithdrawlButton = document.querySelector('.quickWithdrawal')
const transferButton = document.querySelector('.transfer')
const resetButton = document.querySelector('.reset')

const screen = document.querySelector('.screen')
console.log(screen)

// console.log(checkBalanceButton)
// console.log(withdrawalButton)

// next ?

// function to display balance 
//arrow function syntax

let randomBalance = Math.floor(Math.random() * 5000) + 1;
let withdrawalNumber = Math.floor(Math.random() * 300) + 1;
let depositNumber = Math.floor(Math.random() * 10000) + 1;

console.log("withdrawal amount:",withdrawalNumber)
console.log("random balance:",randomBalance)
console.log("deposit:",depositNumber)


// let newBalance = randomBalance
// console.log(typeof newBalance)


// display balance on screen
const displayBalance = () => {
    // screen.innerHTML = randomBalance
    // screen.innerText = randomBalance
    screen.textContent = "Current Balance : $" + randomBalance
}

// subtract withdrawalNumber from balance

const withdrawalFromBalance = () => {

    let checkFirst = randomBalance - withdrawalNumber
    // randomBalance = randomBalance - withdrawalNumber
    // randomBalance -= withdrawalNumber
    // randomBalance = randomBalance - withdrawalNumber
    console.log("new balance after withdrawal: $",randomBalance)

    if(checkFirst >= 0){
        randomBalance = randomBalance - withdrawalNumber
        screen.innerText = `Current Balance : $${randomBalance} after withdrawal of $${withdrawalNumber}`
    } else {
        screen.innerText = "Insufficient Funds can't withdrawal $" + withdrawalNumber + " from balance of $" + randomBalance + "."
    }
}

//  add depositNumber to current balance
const addDeposit = () => {
    randomBalance = randomBalance + depositNumber
    console.log("new balance after deposit:",randomBalance)

    screen.innerText = `Current Balance is $${randomBalance}, after depositing $${depositNumber}`
}


// subtract quick withdrawal (500)

const quickWithdrawal = () => {
    randomBalance = randomBalance - 500
    console.log("after quick withdrawal",randomBalance)

    screen.innerText = randomBalance
}

// quickWithdrawal()


// reset screen
const reset = () => {
    // screen.textContent = "THIS IS THE SCREEN"
    // screen.innerText = "THIS IS THE SCREEN"
    screen.innerHTML = `<p>This is the <span style="color: red;">SCREEN</span></p>`

    screen.classList.add("bigFont")
    console.log(screen)
}