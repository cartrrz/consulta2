<template>
  <div>
    <v-container class="my-5 text-xs-center" >
      <v-layout row wrap justify-center>
        <v-flex xs12 md6>
          <v-card>
            <v-card-title>
              <h2>Buscar Militante</h2>
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
      <v-alert
        v-model="alert"
        type="success"
      >No se encontro al militante puede registrarlo</v-alert>

      <div class="text-xs-center pa-3">
        <v-btn round v-if="alert" color="primary" dark @click="alert = false" router to="/registrar">Registrar</v-btn>
      </div>
    </v-container>
  </div>
</template>

<script>
import militanteServices from "@/services/militanteServices.js";

export default {
  data() {
    return {
      alert: false,
      documento: "",
      link: "/",
      militante: {
        id: 1,
        nombre: "carlos",
        paterno: "torrez",
        materno: "alanoca",
        ci: "10916949",
        celular: 67027170,
        direccion: "anexo barrio lindo calle2 nro 2910"
      }
    };
  },
  methods: {
    buscar() {
      if (this.documento === this.militante.ci) {
        console.log("entro");
        this.link = "/militante/" + this.militante.id;
        this.$router.push({ path: this.link });
      }else{
          this.alert = true;

          console.log(alert)
      }
      console.log(this.link);
    }
  }
};
</script>

<style>
</style>
