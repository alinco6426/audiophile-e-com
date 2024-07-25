<template>
     <Toast :message="message" :visible="toastVisible" />
     <div class="cart" :class="show ? 'show' : ''">
        <button type="button" @click="closeCart" class="close-cart-button">
         <img src="../assets/shared/icons/icon-close.svg" alt="icon-close">          
        </button>
        <section class="carted-items-container">
          <div class="heading">
               <h1>cart ({{cart.length > 0 ? cart.length : 0}})</h1>
               <button type="button" @click="clearCart">remove all</button>
          </div>
          <div v-for="item in cart" :key="item.id" class="carted-item">
               <section>
                    <img :src="cartImageUrl(item.image)" alt="item-image">
                    <div>
                         <h3>{{ item.name }}</h3>
                         <h5>$ {{ item.price.toLocaleString() }}</h5>
                    </div>
               </section>
               <button type="button" @click="remove(item.name)">
                    <img src="../assets/icon-delete.svg" alt="icon-delete">
               </button>
          </div>
          <div class="total-container">
               <h3>Total</h3>
               <h3>$ {{ total.toLocaleString() }}</h3>
          </div>
          <button class="check-out-btn">checkout</button>
        </section>
     </div>
</template>
<script>
import { useCartStore } from '@/stores/cart';
import Toast from './Toast.vue';
export default {
     data(){
          return{
               toastVisible: false
          }
     },
     computed : {
          cart(){
               return useCartStore().cart
          },
          total(){
               return useCartStore().calculateTotalPrice()
          },
           message(){
               return useCartStore().message
          }
     },
props: {
    show: {
      type: Boolean,
      required: true
    }
  },
  components:{
     Toast
},
     methods : {
          remove(productName){
              return useCartStore().removeProductFromCart(productName) && this.showToast()
              
          },
          clearCart(){
               return useCartStore().clearCart() && this.showToast();
               
          },
          closeCart() {
           this.$emit('close-cart');
          },
     showToast() {
      this.toastVisible = true;
      setTimeout(() => {
        this.toastVisible = false;
      }, 3000);
    },
    cartImageUrl(image) {
      return new URL(`../${image}`, import.meta.url);
  }
     }
}
</script>
<style scoped>
@import url(../styles/cart.css);
    
</style>