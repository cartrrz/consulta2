<template>
  <div>
    <militante :id="id"></militante>
  </div>
</template>

<script>
import militante from '@/components/militante.vue'
export default {
  components:{
    militante
  },
  props: ["id"]
};
</script>

<style>
</style>
