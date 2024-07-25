<template>
     <form action="POST">
          <h1>Checkout</h1>
          <div class="billing-details">
               <h3>Billing details</h3>
               <label for="name">
                    <input type="text" id="name" class="name" v-model="checkout.name"  @input="consoleParams($event.target)">
               </label>
               <label for="email">
                    <input type="email" id="email" class="email" v-model="checkout.email">
               </label>
               <label for="number">
                    <input type="number" id="number" class="number">
               </label>
          </div>
          <div class="shipping-info">
               <label for="address">
                    <input type="text" id="address" class="address">
               </label>
               <label for="zip-code">
                    <input type="number" id="zip-code" class="zip-code">
               </label>
               <label for="city">
                    <input type="text" id="city" class="city">
               </label>
               <label for="country">
                    <input type="text" id="country"  class="country">
               </label>
          </div>

          <div class="payment-details">
               <p>Payment method</p>
               <section class="payment-method">
                    <label for="e-money">
                         <span></span>
                         <input type="radio" id="e-money" class="e-money">
                         <p>e-Money</p>
                    </label> 
                    <label for="cash">
                         <span></span>
                         <input type="radio" id="cash" class="cash">
                         <p>cash on delivery</p>
                    </label>
               </section>

               <section class="payment-info">
                    <label for="e-money-number">
                         <input type="number" id="e-money-number" class="e-money-number">
                    </label>
                    <label for="e-money-pin">
                         <input type="number" id="e-money-pin" class="e-money-pin">
                    </label>
               </section>

               <section class="cash-info-container">
                    <img src="../assets/checkout/icon-cash-on-delivery.svg"  alt="icon-cash-on-delivery">
                    <p>
                       The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence.
                       Just make sure your address is correct so that your order will not be cancelled.
                    </p>
               </section>
          </div>
          <h1>{{ validate() }}</h1>
          <button type="button" style=" cursor: pointer;
  background-color: red;
  border: none;
  outline: none;
  font-family: 'manrope';
  width : 100px;
  padding : 20px ;" @click="checkout">checkout</button>
     </form>
</template>
<script>
import { useCheckoutStore } from '@/stores/checkout';
export default {
     data(){
          return{
               checkoutStore : null,
               errror : ["dfdf"],
               valid : null
          }
     },
     computed : {
          checkout() {
               return useCheckoutStore()
          },
     },
     methods : {
          checkFields(){
               if(this.checkout.name === ""){
                    this.errror.push({
                         errorName : "Can't be empty"
                    })
               }
          },
          validate(){
               if(this.errror.length > 0){
                    this.valid = false;
                    // return
               }
               else{
                    this.valid = true;
               }
               console.log(this.errror.length)
               console.log(this.valid)
               return this.valid
          }
     }
}
</script>
<style scoped>
   input{
     width: 300px;
     height: 60px;
     border: 2px solid var(--orange);
     outline: none;
     font-size: 16px;
     margin: 20px;
     padding: 20px;
   }     
</style>