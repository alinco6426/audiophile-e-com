<template>
     <main>
          <header>
               <nav-component :display="true"></nav-component>
          </header>
          <div>
               <ProductCard v-for="product in productEarphones" :key="product.name" :product="product" :display="false" />
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
     computed : {
          productEarphones(){
               return useProductsStore().categoryEarphones
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
