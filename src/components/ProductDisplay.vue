<template>
     <div>
          <ProductCard :product="product" :display="true" />

          <section class="product-features-includes-container">
               <div class="features-container">
                    <h1>Features</h1>
                    <p v-for="feature in productFeatures" :key="feature">{{feature}}</p>
               </div>
               <div class="in-the-box-container">
                    <h1>in the box</h1>
                    <p v-for="include in product.includes" :key="include.quantity">
                         <span>{{ include.quantity}}x</span>
                         <span>{{ include.item }}</span>
                    </p>
               </div>
          </section>

          <section class="product-gallery">
               <img :src="`/src${product.gallery.first.desktop}`" alt="gallery-picture">
               <img :src="`/src${product.gallery.second.desktop}`" alt="gallery-picture">
               <img :src="`/src${product.gallery.third.desktop}`" alt="gallery-picture">
          </section>

          <!-- <section class="other-products-overview">
               <h1>Other products you might like</h1>
               <div class="other-products-container">
                    <div v-for="item in product.others" :key="item.name">
                         <img :src="`/src${item.image.desktop}`" alt="product-image">
                         <span>
                              <h2>{{ item.name }}</h2>
                              <button type="button">see product</button>
                         </span>
                    </div>
               </div>
          </section> -->
     </div>
</template>
<script>
import ProductCard from './ProductCard.vue';
export default {
     data() {
          return {
               productFeatures : [],
          }
     },
     props : {
          product : Object
     },
     methods: {
          splitFeatures(){
               this.productFeatures = this.product.features.split("\n\n");
          }
     },
     components : {
          ProductCard
     },
     mounted(){
          this.splitFeatures()
     }
}
</script>
<style scoped>
     @import url("../assets/main.css");
     .product-features-includes-container{
          width: 80%;
          height: auto;
          display: flex;
          justify-content: space-between;
          margin: 50px 0;
          margin-inline: auto;
     }
     .features-container , .in-the-box-container{
          width: 50%;
          height: auto;
     }
     .in-the-box-container{
          margin-left: 100px;
     }
      .features-container h1 ,.in-the-box-container h1{
          font-size: 30px;
          margin: 20px 0;
          text-transform: uppercase;
          color: var(--black);
          letter-spacing: 1px;
     }
     .features-container p ,.in-the-box-container p{
          font-size: 16px;
          margin: 20px 0;
          line-height: 30px;
     }
     .in-the-box-container p span:first-child{
          color: var(--orange);
          margin-right: 20px;
          font-weight: 800;
          font-size: 16px;
     }
     .product-gallery{
          width: 80%;
          height: auto;
          display: grid;
          grid-template-columns: auto auto;
          margin: 100px 0;
          margin-inline: auto;
     }
     .product-gallery img{
          border-radius: 10px;
     }
          .product-gallery img:first-child {
               grid-area: 1 / 1 / 2 / 2;
               /* First image in row 1, column 1 */
          }
     
          .product-gallery img:nth-child(2) {
               grid-area: 2 / 1 / 3 / 2;
               /* Second image in row 2, column 1 */
          }
     
          .product-gallery img:last-child {
               grid-area: 1 / 2 / 3 / 3;
               /* Last image spanning rows 1 and 2 in column 2 */
          }
          .other-products-container{
               width: 80%;
               display: flex;
               justify-content: space-between;
               margin-inline: 10%;
          }
          .other-products-container  div{
               width: 30%;
          }
          .other-products-container div img{
               width : 250px ;
          }
@media screen and (max-width: 760px) {
       .product-features-includes-container{
          width: 100%;
          height: auto;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          margin: 50px 0;
          margin-inline: auto;
          padding: 30px;
     }
     .features-container , .in-the-box-container{
          width: 100%;
          height: auto;
     }
     .in-the-box-container{
          margin-left: 0;
     }
      .features-container h1 ,.in-the-box-container h1{
          font-size: 30px;
          margin: 20px 0;
          text-transform: uppercase;
          color: var(--black);
          letter-spacing: 1px;
     }
     .features-container p ,.in-the-box-container p{
          font-size: 16px;
          margin: 20px 0;
          line-height: 30px;
     }
     .in-the-box-container p span:first-child{
          color: var(--orange);
          margin-right: 20px;
          font-weight: 800;
          font-size: 16px;
     }
     .product-gallery{
          width: 100%;
          height: auto;
          display: block;
          margin: 100px 0;
          margin-inline: auto;
          padding: 30px;
     }
     .product-gallery img{
          border-radius: 10px;
          width: 100%;
          margin: 20px 0;
     }
          .product-gallery img:first-child {
               width: 100%;
          }
     
          .product-gallery img:nth-child(2) {
               width: 100%;
          }
     
          .product-gallery img:last-child {
              width: 100%;
          }     
}          
</style>