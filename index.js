let count = 0
let counter = document.getElementById("counter-el")
let savings = document.getElementById('savings-el')
function increment(){
    count +=  1 
    counter.innerText = count
}

function save(){
    console.log(count)
    let saveCount = count + ','
    savings.innerText += saveCount
    count = 0
    counter.innerText = count
    

}

function clean(){
    count =  0
    counter.innerText = count
    savings.innerText = 'previous entries:'
}





