<template>
  <v-app-bar app color="white flat">
    <v-badge color="#FFEBEE" dot>
      <v-img src="1.png" contain width="30"></v-img>
    </v-badge>
    <v-toolbar-title class="ml-4">
      <span class="green--text">e</span><strong>Grocery</strong>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-menu v-model="showFavoriteMeals" offset-y>
      <template v-slot:activator="{ on }">
        <v-btn class="material-symbols-outlined carro" color="#E2F2E5" v-on="on" shaped>
          <span class="material-symbols-outlined color1">shopping_cart</span>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(meal, index) in favoriteMeals" :key="index">
          <v-list-item-avatar>
            <v-img :src="meal.img" contain width="30"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>
              {{ meal.title }} ({{ meal.quantity }})
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      
      <v-divider></v-divider>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-btn @click="buyAllProducts" color="green">Comprar</v-btn>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      
    </v-menu>
  </v-app-bar>
</template>


<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      drawer: true,
      showFavoriteMeals: false,
    };
  },
  computed: {
    ...mapState({
      favoriteMeals: state => state.favorites,
    }),
  },
  methods: {
    buyAllProducts() {
      this.$router.push('/Comidas'); 
    },
    increment(product) {
      product.quantity++;
      this.$store.commit('updateFavoriteQuantity', product);
    },
    decrement(product) {
      if (product.quantity > 1) {
        product.quantity--;
        this.$store.commit('updateFavoriteQuantity', product);
      }
    },
  },
};
</script>


<style scoped>
.color{
    color: #4caf50;
    font-size: 25px !important;
}
.grocery{
  font-size: 20px !important;
}
.e{
  font-size: 22px !important;
}
.carro{
  font-size: 20px;
}
.color1{
  color: #3fac54;
}
</style>