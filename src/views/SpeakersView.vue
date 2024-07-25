<template>
     <main>
          <header>
               <nav-component :display="true"></nav-component>
          </header>
          <div>
               <ProductCard v-for="product in productSpeakers" :key="product.name" :product="product" />
          </div>
          <BrandDetails />
          <FooterComponent />
     </main>
</template>

<script>
import NavComponent from "../components/NavComponent.vue";
import ProductCard from "../components/ProductCard.vue";
import FooterComponent from "../components/FooterComponent.vue";
import BrandDetails from "../components/BrandDetails.vue";
import { useProductsStore } from "../stores/product";
export default {
     computed:{
          productSpeakers(){
               return useProductsStore().categorySpeaker;
          }
     },
     components: {
          NavComponent,
          FooterComponent,
          BrandDetails,
          ProductCard
     }
}
</script>

<style scoped>
@import url("../assets/main.css");

main {
     width: 100%;
}
</style>
