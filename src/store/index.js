import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   products: [],
    favorites: [],
  },
  getters: {
  },
  mutations: {
    addToFavorites(state, product) {
      state.favorites.push(product);
    },
    removeFromFavorites(state, product) {
      const index = state.favorites.findIndex((p) => p.id === product.id);
      if (index !== -1) {
        state.favorites.splice(index, 1);
      }
    },
    setProducts(state, products) {
      state.products = products;
    },
  },
  actions: {
    fetchProducts({ commit }) {
      // Realizar la solicitud al API para obtener la lista de productos
      axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then((response) => {
          // Llamar a la mutación para almacenar los productos en el estado
          commit('setProducts', response.data);
        })
        .catch((error) => {
          console.error('Error al obtener los productos:', error);
        });
    },
  },
  modules: {
  }
})
