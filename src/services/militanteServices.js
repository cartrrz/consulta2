import axios from 'axios'

const apiClient = axios.create({
    baseURL:'localhost:1337',
    withCredentials: false,
    headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default{
    getmilitanteci(ci){
        return apiClient.get('buscar/'+ci)
    },
    getmilitante(id){
        return apiClient.get('militante/'+id)
    }
}