<template >
     <main>
          <header>
               <nav-component :display="true"></nav-component></header>
          <ProductDisplay v-if="product" :product="product" />
          <BrandDetails />
          <FooterComponent />
     </main>
</template>
<script>
import NavComponent from "../components/NavComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import BrandDetails from "../components/BrandDetails.vue";
import { useProductsStore } from "../stores/product";
import ProductDisplay from "../components/ProductDisplay.vue"
export default {
     data() {
          return {
               product: null,
               slug: null
          };
     },
      mounted() {
          this.getParam()
          const productsStore = useProductsStore();
          this.product = productsStore.getProduct(this.slug);
     },
     methods: {
          getParam() {
               this.slug = this.$route.params.slug;
          }
     },
     components: {
          NavComponent,
          FooterComponent,
          BrandDetails,
          ProductDisplay
     },
}
</script>
<style >
     
</style>
