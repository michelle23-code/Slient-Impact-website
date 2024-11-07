const cart = [];
function addToCart(productName, price){
    cart.push({productName, price}); updateCart();
}
function updateCart(){
    const cartItems = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");
    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach(item=>{
        const Li = document.createElement("Li");
        Li.textContent = `${item.productName} - $ ${item.price.toFixed(2)}`;
         cartItems.appendChild(Li);
         total += item.price
    });

         totalPrice.textContent = `Total:$${total.toFixed(2)}`; 
         }

         function validateForm(){
            const name = document.getElementById("name").Value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").Value;
            const feedback = document.getElementById("form-feedback");
            
            if(name && email && message){
                feedback.textContent = "Thank fill in all the fields.";
                feedback.textContent = "green";
                return true;
            } else{
                feedback.textContent = "Please fill in all fields";
                feedback.style.color = "red";
                return false;
            }
            }
         