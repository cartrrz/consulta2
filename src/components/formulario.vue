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
              <v-text-field label="Nombre" v-model="nombre" prepend-icon="person"></v-text-field>
            </v-flex>
            <v-flex xs12 md3>
              <v-text-field label="Apellido Paterno" v-model="paterno"></v-text-field>
            </v-flex>
            <v-flex xs12 md3>
              <v-text-field label="Apellido Materno" v-model="materno"></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout flat row wrap class="pa-3">
            <v-flex xs12 md4>
              <v-text-field
                label="Documento de Identidad"
                v-model="documento"
                prepend-icon="picture_in_picture"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout flat row wrap class="pa-3">
            <v-flex xs12 md4>
              <v-text-field label="Domicilio" v-model="domicilio" prepend-icon="business"></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout flat row wrap class="pa-3">
            <v-flex xs12 md4>
              <v-text-field label="Celular" v-model="celular" prepend-icon="phone_android"></v-text-field>
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
                <v-date-picker v-model="fechnac"></v-date-picker>
              </v-menu>
            </v-flex>
          </v-layout>
          <div class="text-xs-center">
            <v-btn round color="primary" dark>Registrar</v-btn>
          </div>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import format from 'date-fns/format'
export default {
  data() {
    return {
      nombre: "",
      paterno: "",
      materno: "",
      domicilio: "",
      celular: "",
      documento: "",
      fechnac: null
    }
  },
  computed: {
      formatofecha(){
          return this.fechnac ? format(this.fechnac,'Do MMM YYYY'): ''
      }
    }
};
</script>

<style>
</style>
