<template>
    <div>  
        <v-container class="my-5">
            <v-card flat class="pa-4">
                <v-card-title primary-title>
                <div>
                  <div class="headline">Datos Militante</div>
                  <!-- <span>Listen to your favorite artists and albums whenever and wherever, online and offline.</span> -->
                </div>
                </v-card-title>
                <v-layout row wrap class="pa-4">
                    <v-flex xs12 md3>
                        <div class="caption grey--text">Nombre</div>
                        <div>{{militante.nombre}}</div>
                    </v-flex>
                    <v-flex xs12 sm3 md3>
                        <div class="caption grey--text">Apellido Paterno</div>
                        <div>{{militante.paterno}}</div>
                    </v-flex>
                    <v-flex xs12 sm3 md3>
                        <div class="caption grey--text">Apellido Materno</div>
                        <div>{{militante.materno}}</div>
                    </v-flex>
                    
                </v-layout>
                <v-divider></v-divider>
                <v-layout row wrap class="pa-4">
                    <v-flex xs12 sm4 md3 >
                        <div class="caption grey--text">Documento de identidad</div>
                        <div>{{militante.documento}}</div>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout row wrap class="pa-4">
                    <v-flex xs12 sm4 md3>
                        <div class="caption grey--text">Celular</div>
                        <div>{{militante.celular}}</div>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout row wrap class="pa-4">
                    <v-flex xs12 sm4 md3>
                        <div class="caption grey--text">Direccion</div>
                        <div>{{militante.domicilio}}</div>
                    </v-flex>
                </v-layout>
            </v-card>
        </v-container>
    </div>
</template>

<script>
export default {
    props:["militante"],
    data(){
        return{
        }
    },
    
}
</script>

<style>

</style>
