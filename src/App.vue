<template>
  <Toast :message="message" :visible="toastVisible" />
  <RouterView />
</template>

<script>
import ProductOverview from './components/ProductCard.vue';
import { useProductsStore } from "./stores/product";
import { useCartStore } from './stores/cart';
export default{
  data(){
    return{
       datas : [],
    }
  },
  mounted(){
    //  this.fetchProducts();
     this.setCart();
  },
  components: {
    ProductOverview
  },
  methods : {
    setCart(){
      useCartStore().setCart();
    }
  }
}
</script>

<style scoped></style>
