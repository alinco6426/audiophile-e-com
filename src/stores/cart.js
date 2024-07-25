import { defineStore } from "pinia";

export const useCartStore = defineStore("cart" , {
     state: () => ({
          cart: [],
          message : ""
     }),
     actions : {
          setCart(){
               const cart = JSON.parse(localStorage.getItem("cart")) || [];
               this.cart = cart;
          },
          addProductToCart(product) {
    const productExist = this.cart.find(item => item.slug === product.slug);

    if (!productExist) {
      this.cart.push(product);
      this.message = "";
      this.message = "Product added successfully";
    } else {
      productExist.quantity += product.quantity;
      productExist.price = productExist.quantity * productExist.costPrice;
      this.message = "";
      this.message = "Product quantity updated successfully";
    }
    localStorage.setItem("cart", JSON.stringify(this.cart));
    console.log(this.cart);
  },
removeProductFromCart(productName) {
  const productIndex = this.cart.findIndex(product => product.name === productName);
  if (productIndex !== -1) {
    this.cart.splice(productIndex, 1);
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }
}
,
          updateProductQuantity(productName, quantity){
               const productToUpdate = this.cart.find(product => {
                    return product.name === productName;
               });
               if(productToUpdate){
                    productToUpdate.quantity = quantity;
               }
               localStorage.setItem("cart", JSON.stringify(this.cart));
          },
          calculateTotalPrice(){
               let totalPrice = 0;
               this.cart.forEach(product => {
                    totalPrice += product.price * product.quantity;
               });
               return totalPrice;
          },
          clearCart(){
               this.cart = [];
               localStorage.setItem("cart", JSON.stringify(this.cart));
          },
     }
})