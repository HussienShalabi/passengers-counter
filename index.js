let count = 0
let counter = document.getElementById("counter-el")
let savings = document.getElementById('savings-el')
function increment(){
    count +=  1 
    counter.textContent = count
}

function save(){
    
    let saveCount = count + ' , '
    savings.textContent += saveCount
    count = 0
    counter.textContent = count
    

}

function clean(){
    count =  0
    counter.textContent = count
    savings.textContent = 'previous entries: '
}





