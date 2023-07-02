let count = 0
let counter = document.getElementById("counter-el")
function increment(){
    count = count + 1 
    counter.innerText = count
}

function save(){
    console.log(count)
    count = 0
    counter.innerText = count
}

function decrement(){
    count = count - 1
    counter.innerText = count
}



