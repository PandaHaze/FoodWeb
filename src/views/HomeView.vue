<template>
<v-app>

  <Navbar />
  
  <v-container fluid>
<v-row>
  <v-col cols="12">

    <Product />

<v-card flat color="FAFAFA" class="mt-8 py-5 px-16">
<div style="position: absolute; margin-left: auto; margin-right: auto; left:0; right:0; text-aling: center">
  <h3>Lo que dicen los clientes</h3>
</div>

<Client />

</v-card>
<v-toolbar flat color="transparent" class="mt-8">
  <v-toolbar-title class="text-h6">
    Nuestros Patrocinadores
  </v-toolbar-title>
</v-toolbar>
<Partner />
<v-card flat color="#E2F2E5" class="rounded-xl mtop mbottom mx-10 pa-4" height="350">
  <v-row>
    <v-col cols="12" xs="12" sm="12" md="5">
<v-card class="rounded-xl mt-n16 ml-16 mobile" outlined flat height="450" width="200">
  <v-img src="mobile.png"></v-img>
</v-card>
    </v-col>
    <v-col cols="12" xs="12" sm="6" md="7">
      <h1 class="mt-16">Descarga la App</h1>
      <p>
         lorem ipsum dolor sit amet consectetur adispsicing elit.
         Porvident sequi esse tempore maiores  quasi quia non.
         Itaque laboriosam dicta nostrum accusantium assumenda,
         vitae av ut vel tenetur minima natus commodi!
      </p>
<v-btn color="black" dark class="mb-10">
  <v-icon color="white" left>fab fa-apple</v-icon>
  App Store
</v-btn>
<v-btn color="black" dark class="ml-4 mb-10">
  <v-icon color="white" left>fab fa-google-play</v-icon>
  Play Store
</v-btn>
    </v-col>
  </v-row>
</v-card>
  </v-col>
</v-row>
  </v-container>
  <Footer />
</v-app>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Product from '../components/Product.vue'
import Client from '../components/Client.vue'
import Partner from '../components/Partner.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Product,
    Client,
    Partner,
    Footer,
    },
  data() {
    return {

    };
  },
  created() {

  },
  methods: {

  },
  };
</script> 

<style scoped>
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
</style>
