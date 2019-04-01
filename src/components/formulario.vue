<template>
  <v-container class="my-5">
    <v-card>
      <v-card-title text-xs-center>
        <h1>Ingresar Datos</h1>
      </v-card-title>
      <v-card-text>
        <v-form px3>
          <v-layout flat row wrap justify-space-between class="pa-3">
            <v-flex xs12 md4>
              <v-text-field label="Nombre" v-model="militante.nombre" prepend-icon="person"></v-text-field>
            </v-flex>
            <v-flex xs12 md3>
              <v-text-field label="Apellido Paterno" v-model="militante.paterno"></v-text-field>
            </v-flex>
            <v-flex xs12 md3>
              <v-text-field label="Apellido Materno" v-model="militante.materno"></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout flat row wrap class="pa-3">
            <v-flex xs12 md4>
              <v-text-field
                label="Documento de Identidad"
                v-model="militante.documento"
                prepend-icon="picture_in_picture"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout flat row wrap class="pa-3">
            <v-flex xs12 md4>
              <v-text-field label="Domicilio" v-model="militante.domicilio" prepend-icon="business"></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout flat row wrap class="pa-3">
            <v-flex xs12 md4>
              <v-text-field label="Celular" v-model="militante.celular" prepend-icon="phone_android"></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout flat row wrap class="pa-3">
            <v-flex>
              <v-menu>
                <v-text-field
                  :value="formatofecha"
                  slot="activator"
                  label="Fecha de Nacimiento"
                  prepend-icon="date_range"
                ></v-text-field>
                <v-date-picker v-model="militante.fecha_nacimiento"></v-date-picker>
              </v-menu>
            </v-flex>
          </v-layout>
          <div class="text-xs-center">
            <v-btn round color="primary" dark @click="crear">Registrar</v-btn>
          </div>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import format from "date-fns/format";
import militanteServices from "@/services/militanteServices.js";
import militanteVue from './militante.vue';
export default {
  data() {
    return {
      militante: {
        nombre: "",
        paterno: "",
        materno: "",
        domicilio: "",
        celular: "",
        documento: "",
        fecha_nacimiento: null
      }
    };
  },
  methods: {
    crear() {
      militanteServices.crearmilitante(this.militante)
      .then(respuesta=>{
        //console.log('asdasdasd')
          console.log(respuesta.data)

      })
      .catch(error=>{
        console.log(error)
      })
      this.$router.push({path: '/'})
    }
  },
  computed: {
    formatofecha() {
      return this.militante.fecha_nacimiento ? format(this.militante.fecha_nacimiento, "Do MMM YYYY") : "";
    }
  }
};
</script>

<style>
</style>
