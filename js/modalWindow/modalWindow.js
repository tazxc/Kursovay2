let modal = document.querySelector('.modal')
let btn = document.querySelector('.butt')
let span = document.querySelector('.close_modal')


btn.addEventListener('click', function(){
    modal.style.display = "block"
})

span.addEventListener("click", function(){
    modal.style.display = "none"
})

window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none"
    }
}