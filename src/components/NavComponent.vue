<template>
     <nav class="nav" :style="display === true ? 'border-bottom: 2px solid var(--pale-white)' : '' ">
          <div class="hamburger" @click="showNav">
               <img src="../assets/shared/icons/icon-hamburger.svg" alt="icon-harmburger">
          </div>
          <div class="logo-container">
               <img src="../assets/shared/icons/logo.svg" alt="logo">
          </div>

          <section class="nav-modal" :class=" active === true ?'active' : '' ">
               <button class="close-button" @click="showNav">
               <img src="../assets/shared/icons/icon-close.svg" alt="icon-close">
             </button>
             <div class="nav-links-container">
               <router-link class="router-link" to="/" exact>Home</router-link>
               <router-link class="router-link" to="/headphones" exact-active-class="">Headphones</router-link>
               <router-link class="router-link" to="/speakers">Speakers</router-link>
               <router-link class="router-link" to="/earphones">Earphones</router-link>
             </div>
          </section>

          <div class="cart-icon-container" v-if="display">
               <button class="show-cart-btn" @click="showCart">
                    <img src="../assets/shared/icons/icon-cart.svg" alt="cart">
               </button>
          </div>
     </nav>
     <Cart :show="show" @close-cart="showCart" />
</template>

<script >
import Cart from "./../components/Cart.vue";
export default {
     data(){
          return{
               show : false,
               active : false
          }
     },
     props: {
          // product: Object,
          display: Boolean
     },
     components : {
          Cart
     },
     methods: {
          showCart(){
               this.show = !this.show;
          },
          showNav(){
               this.active = !this.active;
          }
     }
     //to fix display 
}
</script>

<style scoped>
@import url(../assets/main.css);
.active{
     display: flex;
}
.nav{
     width: 80%;
     height: auto;
     display: flex;
     justify-content: space-between;
     align-content: center;
     align-items: center;
     margin-inline: auto;
     padding: 20px 0;
     
}
.logo-container{
     width: auto;
     display: flex;
     align-items: center;
}
.logo-container img{
     width: 150px;
}
.nav-links-container{
     width: auto;
     display: flex;
     justify-content: space-between;
     align-items: center;
}
.nav-links-container .router-link{
     text-decoration: none;
     color: var(--white);
     font-size: 16px;
     text-transform: uppercase;
     font-weight: 600;
     margin-inline: 25px;
}
.nav-links-container .router-link.router-link-active {
  color: var(--orange);
  font-weight: bold;
}

.nav-links-container .router-link.router-link-exact-active {
  color: var(--orange);
  font-weight: bold;
}

.cart-icon-container{
     width: auto;
}
.cart-icon-container .show-cart-btn{
     width: auto;
     height: auto;
}
.show-cart-btn img{
     width: 50px;
}

.hamburger , .close-button {
     display: none;
}     

@media screen and (max-width: 760px) {
.nav{
     width: 100%;
     height: auto;
     display: flex;
     justify-content: space-between;
     align-content: center;
     align-items: center;
     margin-inline: auto;
     padding: 20px 0;
}
.logo-container{
     width: fit-content;
     display: flex;
     align-items: center;
}
.logo-container img{
     width: 100px;
}
.hamburger{
     width: fit-content;
     display: flex;
     align-items: center;
}
.nav-modal {
     width: 100%;
     background-color: black;
     height: 100%;
     position: fixed;
     top: 0;
     right: 0;
     display: none;
}
.active {
     display: block;
}
.nav-links-container{
     width: auto;
     height: auto;
     display: flex;
     flex-direction: column;
     justify-content: space-between;
     align-items: normal;
     padding: 20px;
     margin-top: 40px;
}
.nav-links-container .router-link{
     text-decoration: none;
     color: var(--white);
     font-size: 16px;
     text-transform: uppercase;
     font-weight: 600;
     margin: 20px 0;
}

.nav-modal .close-button{
     top: 20px;
     right: 20px;
     position: absolute;
}
.cart-icon-container{
     width: auto;
}
.cart-icon-container .show-cart-btn{
     width: auto;
     height: auto;
}
.show-cart-btn img{
     width: 25px;
}
.hamburger , .close-button {
     display: block;
}     
}

</style>