<template>
  <div>
    <v-container class="my-5 text-xs-center">
      <v-layout row wrap justify-center>
        <v-flex xs12 md6>
          <v-card>
            <v-card-title>
              <h2>Buscar Militantee</h2>
            </v-card-title>
            <v-card-text>
              <v-form class="px3">
                <v-text-field
                  label="Documento de Identidad"
                  v-model="documento"
                  prepend-icon="person"
                ></v-text-field>
                <v-btn flat round class="primary mx-0 mt-3" @click="buscar">Buscar</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container class="my-3">
      <v-alert v-model="alert" type="success">No se encontro al militante puede registrarlo</v-alert>

      <div class="text-xs-center pa-3">
        <v-btn
          round
          v-if="alert"
          color="primary"
          dark
          @click="alert = false"
          router
          to="/registrar"
        >Registrar</v-btn>
      </div>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'
import militanteServices from "@/services/militanteServices.js";

export default {
  data() {
    return {
      alert: false,
      documento: "",
      link: "/",
      militante: {}
    };
  },
  methods: {
    buscar() {
      militanteServices
        .getmilitanteci(this.documento)
        .then(respuesta => {
          //console.log(respuesta.data.length);
          if(respuesta.data.length > 0){
            //console.log(this.link)
            this.alert = false
            this.link = "/militante/"+respuesta.data[0].id
            //console.log(this.link)
            this.$router.push({path: this.link})
          }else{
            this.alert = true
          }
        })
        .catch(error => {
          console.log("hubo un error"+error);
        });
    }
  }
};
</script>

<style>
</style>
