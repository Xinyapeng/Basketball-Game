let Count1EL = document.getElementById("Num1")
let Count2EL = document.getElementById("Num2")
let count1 = 0
let count2 = 0

function increment11(){
    count1 += 1
    Count1EL.textContent = count1
}

function increment12(){
    count1 += 2
    Count1EL.textContent = count1
}

function increment13(){
    count1 += 3
    Count1EL.textContent = count1
}

function increment21(){
    count2 += 1
    Count2EL.textContent = count2
}

function increment22(){
    count2 += 2
    Count2EL.textContent = count2
}

function increment23(){
    count2 += 3
    Count2EL.textContent = count2
}

function Newgame(){
    Count1EL.textContent = 0
    Count2EL.textContent = 0
}
