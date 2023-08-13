<template>
    <v-row justify="center" class="space px-16 pb-5">
      <v-col cols="12" xs="12" sm="6" md="4" v-for="(pack, i) in packs" :key="i">
        <v-card class="mx-auto rounded-xl" max-width="300" flat outlined>
          <div align="center" justify="center">
            <v-img max-width="300" max-height="300" contain :src="pack.img"></v-img>
          </div>

          <v-card-title>{{ pack.title }}</v-card-title>
<v-card-title class="grey--text text-grey-darken-1 caption mt-n6">{{ pack.subtitle }}</v-card-title>
<v-card-title class="mt-n4">{{ pack.price }}</v-card-title>
<v-card-actions class="mw-2 mt-n4">
  <v-btn outlined class="mt-n2 add">
    <v-icon color="green" @click="decrement(pack)">mdi-minus</v-icon>
  </v-btn>
  <strong class="mx-2" v-text="pack.quantity"></strong>
  <v-btn outlined class="mt-n2 add">
    <v-icon color="green" @click="increment(pack)">mdi-plus</v-icon>
  </v-btn>
  <v-spacer></v-spacer>

  <v-btn class="mx-2 mt-n3" dab dark small color="green" @click="toggleFavorite(product)">
    <span class="material-symbols-outlined" x-small color="green">
      shopping_bag
    </span>
  </v-btn>

</v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </template>
  
  <script>
  export default {
    data: () => ({
      bpm: 1,
      packs: [],
    }),
    methods: {
    decrement(pack) {
      if (pack.quantity > 0) {
        pack.quantity--;
      }
    },
    increment(pack) {
      pack.quantity++;
    },
  },
  mounted() {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
      .then((response) => response.json())
      .then((data) => {
        this.packs = data.meals.map((meal) => ({
          img: meal.strMealThumb,
          title: meal.strMeal,
          subtitle: meal.strCategory,
          quantity: 1,
        }));
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  },
};
  </script>
  

<style>

</style>
