<template>
  <main>
    <!-- <h1>Home</h1> -->
    <header>
      <nav-component :display="true"></nav-component>
      <HeroComponent/>
    </header>
    <Zz9Overview/>
    <Zx7Overview/>
    <YxiOverview/>
    <BrandDetails />
    <FooterComponent />
  </main>
</template>

<script>
import NavComponent from "../components/NavComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import BrandDetails from "../components/BrandDetails.vue";
import { useProductsStore } from "../stores/product";
import ProductDisplay from "../components/ProductDisplay.vue";
import HeroComponent from "@/components/HeroComponent.vue";
import Zx7Overview from "@/components/Zx7Overview.vue";
import Zz9Overview from "@/components/Zz9Overview.vue";
import YxiOverview from "@/components/YxiOverview.vue";

export default {
  data() {
    return {
      product: null,
    };
  },
  async mounted() {
    const productsStore = useProductsStore();
    // await productsStore.fetchProducts(); // Ensure products are fetched
    this.product = productsStore.getProduct("zx9-speaker");
  },
  components: {
    NavComponent,
    FooterComponent,
    BrandDetails,
    ProductDisplay,
    HeroComponent,
    Zx7Overview,
    Zz9Overview,
    YxiOverview,
  },
}
</script>

<style scoped>
@import url(../styles/home.css);
</style>
