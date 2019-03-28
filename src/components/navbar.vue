<template>
  <nav>
    <v-toolbar flat app dark color="primary">
      <v-toolbar-title >
        <v-btn flat icon router to="/">
          <v-icon x-large >home</v-icon>
        </v-btn>
        
        <span class="font-weight-light">  Consulta Militantes </span>
        <span> MAS - IPSP</span>     
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat>
        <span>Salir</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>
  </nav>
</template>

<script>
export default {
    data(){
        return{
            link:'/'
        }
    }
};
</script>

<style>
</style>
