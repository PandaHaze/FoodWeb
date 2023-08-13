<template>
  <div>
    <v-container fluid>
    <v-row justify="center" class="space px-16">
      <v-col cols="12">
        <v-card class="mx-auto rounded-xl" flat>
  <v-img src="cover2.png" max-height="100%" max-width="100%">
    <v-card-title class="top ml-10">
      <h2 class=title1>Tus productos en un solo lugar</h2>
    </v-card-title>
    <v-card-title class="ml-10 mt-n8">
      <h2 class=title2>Ordena Ahora</h2>
    </v-card-title>
    <v-card-text class="ml-10">
      <h3>#DeliveryGratis</h3>
    </v-card-text>
    <v-card-text class="ml-10">
      <v-row>
      <v-col cols="4">
        <v-text-field
        v-model="searchQuery"
        label="Busca tus productos"
        class="d-none d-sm-none d-md-flex"
        filled
        solo
        prepend-inner-icon="mdi-magnify"
        flat
        rounded
        outlined
        success
      ></v-text-field>
      </v-col>
      <v-col cols="2" class="marginLeft">

        <v-btn color="green" rounded dark x-large class="py-7 d-none d-sm-none d-md-flex v-btn">Buscar</v-btn>

</v-col>
    </v-row>
    </v-card-text>
  </v-img>
</v-card> 
<v-toolbar flat color="transparent">
  <v-toolbar-title class="text-h6">Categorías</v-toolbar-title>
  <v-spacer></v-spacer>
  <v-btn-toggle group color="#49D9A0">
  <v-btn>
    <v-icon>mdi-chevron-left</v-icon>
  </v-btn>
  <v-btn>
    <v-icon>mdi-chevron-right</v-icon>
  </v-btn>
  </v-btn-toggle>
</v-toolbar>
      </v-col>
      </v-row>
      <Category />
 <v-row justify="center" class="space px-16 page-background rounded-xl mt-9" flat>
      <v-col cols="12" xs="12" sm="6" md="4" v-for="(product, i) in filteredProducts" :key="i">
        <v-card class="mx-auto rounded-xl product-card mt-9" max-width="300" flat outlined elevation="10">
          <div align="center" justify="center">
              <v-img max-height="300" max-width="300" contain :src="product.img"></v-img>
          </div>
          <v-card-title>{{ product.title }}</v-card-title>
          <v-card-title class="grey--text text-grey-darken-1 caption mt-n6 mt-9">{{ product.subtitle }}</v-card-title>
          <v-card-title class="mt-n4">{{ product.price }}</v-card-title>
          <v-card-actions class="mw-2 mt-n4 ml-5">
  <!-- Minus button -->
  <v-btn class="mt-n2 add" @click="decrement(product)">
    <v-icon color="green">mdi-minus</v-icon>
  </v-btn>
  <strong class="mx-2" v-text="product.quantity"></strong>
  <!-- Plus button -->
  <v-btn class="mt-n2 add" @click="increment(product)">
    <v-icon color="green">mdi-plus</v-icon>
  </v-btn>
  <v-spacer></v-spacer>
  <!-- Favorite button -->
  <v-btn @click="toggleFavorite(product)" :class="{ 'favorited': isFavorite(product) }" class="mx-2 mt-n3" dab color="#E2F2E5">
    <span class="material-symbols-outlined color1" x-small>
      {{ isFavorite(product) ? 'shopping_cart ' : ' shopping_cart ' }}
    </span>
  </v-btn>
  <v-btn @click="showProductDetails(product)" class="mx-2 mt-n3" dab color="#E2F2E5">
  <v-icon color="green">mdi-information</v-icon>
</v-btn>
</v-card-actions>

  <v-dialog v-model="showDialog" max-width="500" @click:outside="closeDialog">
  <v-card>
    <v-card-title v-if="selectedProduct">
      <h1 class="size">{{ selectedProduct.title }}</h1>
      <div class="image-container">
        <v-img class="avatar-image" max-height="80" max-width="80" contain :src="selectedProductImageUrl"></v-img>
      </div>
    </v-card-title>
  <v-card-text v-if="selectedProduct">
    <h2 color="dark">Instrucciones</h2>
    <p>{{ selectedProduct.strInstructions }}</p>
    <h2 color="dark">Tags</h2>
    <p>{{ selectedProduct.strTags }}</p>
    <h2>Youtube</h2>
    <p>{{ selectedProduct.strYoutube }}</p>
    <h2>Ingrediente 1</h2>
    <p>{{ selectedProduct.strIngredient1 }}</p>
    <h2>Ingrediente 2</h2>
    <p>{{ selectedProduct.strIngredient2 }}</p>
    <h2>Ingrediente 3</h2>
    <p>{{ selectedProduct.strIngredient3 }}</p>
  </v-card-text>
  <v-card-actions>
    <v-btn color="green" dab text @click="closeDialog">Cerrar</v-btn>
  </v-card-actions>
</v-card>

</v-dialog>

        </v-card>
      </v-col>
    </v-row>
    </v-container>
  </div>
</template>

<script>
import Product from './Product.vue';
import Category from './Category.vue';

export default {
  components: {
    Category,
    Product,
  },
  props: {
    value: String,
    searchQuery: String,
  },
  data: () => ({
    showDialog: false,
    selectedProduct: null,
    products: [],
    selectedProductImageUrl: '',
  }),
  created() {
    this.fetchProducts();
  },
  computed: {
    filteredProducts() {
      const query = this.searchQuery && this.searchQuery.trim().toLowerCase();
      if (!query) {
        return this.products;
      } else {
        const filtered = this.products.filter((product) => {
          const title = product.title.toLowerCase();
          const subtitle = product.subtitle.toLowerCase();
          return title.includes(query) || subtitle.includes(query);
        });
        return filtered.length ? filtered : [];
      }
    },
  },
  methods: {
    getFilteredProducts(query) {
      return this.products.filter((product) => {
        const title = product.title.toLowerCase();
        const subtitle = product.subtitle.toLowerCase();
        return title.includes(query) || subtitle.includes(query);
      });
    },
    increment(product) {
      product.quantity++;
      if (product.quantity === 4) {
      }
    },
    decrement(product) {
      if (product.quantity > 1) {
        product.quantity--;
        if (product.quantity === 3) {
        }
      }
    },
    async fetchProducts() {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
        const data = await response.json();
        this.products = data.meals.map((meal, index) => ({
          id: index + 1,
          img: meal.strMealThumb,
          title: meal.strMeal,
          subtitle: meal.strCategory,
          price: '1.00 €',
          quantity: 1,
  strInstructions: meal.strInstructions,
  strTags: meal.strTags,
  strYoutube: meal.strYoutube,
  strIngredient1: meal.strIngredient1,
  strIngredient2: meal.strIngredient2,
  strIngredient3: meal.strIngredient3,
        }));
      } catch (error) {
        console.log(error);
      }
    },
    toggleFavorite(product) {
      if (this.isFavorite(product)) {
        this.$store.commit('removeFromFavorites', product);
      } else {
        this.$store.commit('addToFavorites', product);
      }
    },
    isFavorite(product) {
      return this.$store.state.favorites.some((p) => p.id === product.id);
    },
    showProductDetails(product) {
  this.selectedProduct = product;
  this.selectedProductImageUrl = product.img; // Agrega esta línea
  this.showDialog = true;
},
  closeDialog() {
    this.showDialog = false;
    this.selectedProduct = null;
  },
  },
};
</script>


<style scoped>
.color1{
  color: #3fac54;
}
.color2{
  color: #3fac54;
}
.button1{
  margin-left: 90px;
}
.padding_1{
padding: 20px;
}
.wider-image {
  width: 200%;
}
.marginLeft {
  margin-left: -90px;
}
.mtop{
  margin-top: 100px;
}
.mbottom{
  margin-bottom: 100px;
}
.v-card.borderme{
border: 2px solid green !important;
}
.v-card.borderout{
  border: 1px solid whitesmoke !important;
}
.v-btn:not(.v-btn--round).v-size--default.add{
  min-width: 0px !important;
}
.theme--light.v-sheet--outlined.mobile{
  border: 2px solid black !important;
}
@media only screen and (max-width: 600px){
  h2.title1{
    font-size: 15px;
  }
  h2.title2{
    font-size: 15px;
  }
  .top{
    margin-top: 20px
  }
}
@media only screen and (min-width: 600px){
  .top{
    margin-top: 70px;
  }
}
@media only screen and (min-width: 768px){
  .top{
    margin-top: 120px;
  }
}
.v-btn {
  box-shadow: none;
  border: none;
  text-decoration: none;
}
.page-background {
  background-color: #E2F2E5;
}
.size{
  font-size: 28px;
}
.title-wrapper {
  display: flex; /* Utiliza flexbox para alinear elementos en fila */
  align-items: center; /* Centra verticalmente los elementos */
}
.avatar-image {
  border-radius: 50%;
  margin-left: 10px; /* Agrega un margen entre el título y la imagen */
}
</style>
