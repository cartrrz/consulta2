<template>
  <div>
    <militante :militante="militante"></militante>
  </div>
</template>

<script>
import militante from '@/components/militante.vue'
import militanteServices from "@/services/militanteServices.js";
import { constants } from 'fs';

export default {
  components:{
    militante
  },
  props: ["id"],
  data(){
    return {
      militante: {}
    }
  },
  created(){
        console.log('asdasd')
        militanteServices.getmilitante(this.id)
        .then(respuesta =>{
            console.log(this.id)
            this.militante = respuesta.data[0]
            console.log(this.militante)
        })
        .catch(error => {
            console.log(error)
        })
    }
};
</script>

<style>
</style>
