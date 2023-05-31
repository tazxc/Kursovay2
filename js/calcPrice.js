function calcPrice(){
   const cartProduct = document.querySelectorAll('.cardProductBasket')
   const totalPriceEl = document.querySelector('.total-price')

   let totalPrice = 0


   cartProduct.forEach(function(item){
        const quantityEl = item.querySelector('[data-counter]')
        const priceEl = item.querySelector('.productPriceBas')
        const currentPrice = parseInt(quantityEl.innerText) * parseInt(priceEl.innerText)
        totalPrice += currentPrice

   })
   totalPriceEl.innerText = totalPrice
}

