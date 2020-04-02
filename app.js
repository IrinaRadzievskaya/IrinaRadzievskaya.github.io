const productsCountEl = document.getElementById("products-count")
console.log(productsCountEl)

const addToCartButtons = document.querySelectorAll(".add-to-cart");
console.log(addToCartButtons)

// addToCartButtons.onclick = function() {
// 	alert("Hello")
// }

// addToCartButtons.addEventListener('click', function() {
// 	alert ("Hello")
// })

// addToCartButtons.addEventListener('click', function() {
// 	alert ("Bye")
// })

// for(let i = 0; i < addToCartButtons.length;i++) {
// 	addToCartButtons[i].addEventListener("click", function () {
// 		console.log("clicked")
// 	})
// }

for(let i = 0; i < addToCartButtons.length; i++) {
	addToCartButtons[i].addEventListener("click", function () {
		// let prevProductsCount = +productsCountEl.textContent;
		productsCountEl.textContent = +productsCountEl.textContent + 1;
	})
}

const likeButtons = document.querySelectorAll(".product__control_like");

for(let i = 0; i < likeButtons.length; i++) {
	likeButtons[i].addEventListener("click", function () {
		likeButtons[i].classList.toggle('product__control_like-active')
	})
}

$('.slider-block').slick({
	dots:true,
})

// change quantity
let productQuantity = document.querySelectorAll('.product__quantity')

for (let i = 0; i < productQuantity.length; i++) {
	let quantityInput = productQuantity[i].querySelector('.product__quantity input')
	let incrementBtn = productQuantity[i].querySelector('.button_increment')
	let decrementBtn = productQuantity[i].querySelector('.button_decrement')
	incrementBtn.addEventListener("click",function() {
		quantityInput.value = Number(quantityInput.value) + 1
		incrementBtn.disabled = quantityInput.value >= 5
		decrementBtn.disabled = quantityInput.value <= 1
	}) 
	decrementBtn.addEventListener("click",function() {
		quantityInput.value = Number(quantityInput.value) - 1
		incrementBtn.disabled = quantityInput.value >= 5
		decrementBtn.disabled = quantityInput.value <= 1
	})
}

$('.catalog__sort').selectize();