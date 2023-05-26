let late = document.querySelector('#butten_latte')
localStorage.setItem('latte', '240')
let coffe = localStorage.getItem('latte')
let price = 0
let count = 0

late.addEventListener("click", function(){      
    price = Number(coffe)
    count += Number(price)
    console.log(count)
})


