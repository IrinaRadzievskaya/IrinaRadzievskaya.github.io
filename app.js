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