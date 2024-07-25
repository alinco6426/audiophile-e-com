<template>
     <Toast :message="message" :visible="toastVisible" />
     
     <div class="product-card">
          <section class="product-thumbnail-container">
               <img :src="`/src${product.categoryImage.desktop}`" alt="product-image">
          </section>

          <section class="product-overview-details">
               <h3 v-if="product.new" class="new">New product</h3>
               <h1 class="product-name">{{ productName}} <br> {{ productCategory }}</h1>
               <p class="product-description">{{ product.description}}</p>
               <h3 v-if="display" class="product-price">$ {{ price }}</h3>

               <section v-if="display" class="product-add-to-cart-btn-container">
                    <div class="product-quantity-control">
                         <button type="button" @click="setQuantity('dec')">-</button>
                         <input type="number" :value="quantity" readonly>
                         <button type="button" @click="setQuantity('inc')">+</button>
                    </div>
                    <button type="button" class="add-to-cart-btn" @click="addToCart(`${product.slug}`)">add to
                         cart</button>
               </section>
               
               <router-link :to="`/view-product/${product.slug}`" v-else>
                    <button type="button" class="view-product-btn">see product</button>
               </router-link>

          </section>
     </div>
</template>
<script>
import { useProductsStore } from '@/stores/product';
import { useCartStore } from '@/stores/cart';
import Toast from './Toast.vue';
export default {
     data(){
          return{
               productName : "",
               productCategory : "",
               price : null,
               quantity : 1,
               toastVisible: false
          }
     },
     mounted(){
          this.setProductNameAndPrice()
     },
     computed : {
          message(){
               return useCartStore().message
          }
     },
     props:{
          product : Object,
          display : Boolean
     },
     components:{
     Toast
},
     methods : {
          setProductNameAndPrice() {
               const formattedProductName = this.product.name.split(" ");
               this.productCategory = formattedProductName[formattedProductName.length - 1];
               this.productName = formattedProductName.join(" ").replace(this.productCategory , "");
               this.price = this.product.price.toLocaleString()
          },
          addToCart(slug) {
  const getProduct = useProductsStore().getProduct(slug);
  const product = {
    id: getProduct.id,
    slug: slug, // Include the slug in the product object
    name: getProduct.name,
    image: getProduct.image.mobile,
    quantity: this.quantity,
    costPrice: getProduct.price,
    price: this.quantity * getProduct.price,
  };
  useCartStore().addProductToCart(product);
  this.quantity = 1;
  this.showToast()
},
          setQuantity(operation){
               if(operation === "dec"){
                    if(this.quantity === 1){
                         this.quantity = 1
                    }
                    else if (this.quantity > 1){
                         this.quantity--
                    };
               }
               else if(operation === "inc"){
                    this.quantity++;
               };
          },
          showToast() {
      this.toastVisible = true;
      setTimeout(() => {
        this.toastVisible = false;
      }, 3000);
    },
     }
}
</script>
<style scoped>
   @import url("./../assets/main.css");
   a{
     text-decoration: none;
   }
   .toast{
     width: fit-content;
     height: auto;
     padding: 10px;
     text-transform: capitalize;
     position: absolute;
     top: 5%;
     right: 45%;
     background-color: var(--black);
     color: var(--white);
     border-radius: 8px;
     font-size: 16px;
   }
   .product-card{
     width: 80%;
     display: flex;
     justify-content: space-between;
     margin: 120px 0;
     margin-inline: auto;
   }
   .product-thumbnail-container{
     width: 50%;
     height: inherit;
     display: flex;
     justify-content: center;
     background-color: #06050506;
   }
   .product-thumbnail-container img{
     width: 500px;
     height: 500px;
   }
   .product-overview-details{
     width: 45%;
     height: inherit;
     display: flex;
     flex-direction: column;
     justify-content: center;
   }
   .product-overview-details  .new{
     color: var(--orange);
     letter-spacing: 8px;
     font-size: 22px;
     text-transform: uppercase;
     margin: 20px 0;
   }
   .product-overview-details .product-name{
     color: var(--black);
     font-size: 55px;
     text-transform: uppercase;
     margin-bottom: 30px;
     line-height: 60px;
   }
   .product-overview-details .product-description{
     color: var(--light-gray );
     line-height: 30px;
     font-size: 20px;
     word-break: break-all;
     display: flex;
     flex-wrap: wrap;
   }
   .product-price{
     font-size: 25px;
     color: var(--black);
     margin: 20px 0;
   }
    .product-add-to-cart-btn-container {
         width: fit-content;
         height: auto;
         display: flex;
         align-items: center;
    }

    .product-quantity-control {
         width: 150px;
         height: 60px;
         background-color: var(--mid-grey);
         display: flex;
         justify-content: space-between;
    }

    .product-quantity-control button {
         width: 35%;
         height: inherit;
         font-size: 25px;
    }

    .product-quantity-control input {
         width: 30%;
         display: flex;
         align-items: center;
         text-align: center;
         border: none;
         font-size: 22px;
         font-weight: 800;
    }

    .product-add-to-cart-btn-container .add-to-cart-btn {
         width: 180px;
         height: 60px;
         background-color: var(--orange);
         color: var(--white);
         text-transform: uppercase;
         font-size: 16px;
         display: flex;
         justify-content: center;
         align-items: center;
         margin-left: 20px;
    }
   .product-overview-details .view-product-btn{
     width: 150px;
     height: 50px;
     background-color: var(--orange);
     color: var(--white);
     text-transform: uppercase;
     display: flex;
     justify-content: center;
     align-items: center;
     letter-spacing: 3px;
     margin: 20px 0;
     font-size: 14px;
     text-decoration: none;
   }

@media screen and (max-width: 760px) {
 .product-card{
     width: 100%;
     display: flex;
     flex-direction: column;
     justify-content: space-between;
     margin: 120px 0;
     padding-inline: 20px;
   }
   .product-thumbnail-container{
     width: 100%;
     height: auto;
     display: flex;
     justify-content: center;
     margin-bottom: 50px;
   }
   .product-thumbnail-container img{
     width: 300px;
     height: 300px;
   }
   .product-overview-details{
     width: 100%;
     height: inherit;
     display: flex;
     flex-direction: column;
     justify-content: center;
     text-align: center;
     align-content: center;
     align-items: center;
   }
   .product-overview-details  .new{
     color: var(--orange);
     letter-spacing: 8px;
     font-size: 22px;
     text-transform: uppercase;
     margin: 20px 0;
   }
   .product-overview-details .product-name{
     color: var(--black);
     font-size: 35px;
     text-transform: uppercase;
     margin-bottom: 30px;
     line-height: 60px;
   }
   .product-overview-details .product-description{
     line-height: 30px;
     font-size: 16px;
     word-break: break-all;
     display: flex;
     flex-wrap: wrap;
   }
   .product-price{
     font-size: 25px;
     color: var(--black);
     margin: 20px 0;
   }
    .product-add-to-cart-btn-container {
         width: fit-content;
         height: auto;
         display: flex;
         align-items: center;
    }

    .product-quantity-control {
         width: 150px;
         height: 60px;
         background-color: var(--mid-grey);
         display: flex;
         justify-content: space-between;
    }

    .product-quantity-control button {
         width: 35%;
         height: inherit;
         font-size: 25px;
    }

    .product-quantity-control input {
         width: 30%;
         display: flex;
         align-items: center;
         text-align: center;
         border: none;
         font-size: 22px;
         font-weight: 800;
    }

    .toast{
     width: fit-content;
     height: auto;
     top: 3%;
     right: 38%;
   }
 
}
   
</style>