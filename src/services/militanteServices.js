import axios from 'axios'

const apiClient = axios.create({
    baseURL:'http://localhost:1337',
    withCredentials: false,
    headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default{
    getmilitanteci(documento){
        return apiClient.get('/api/buscar',{
            params: {
                documento
            }
        })  
    },
    getmilitante(id){
        return apiClient.get('/api/militante/'+id)
    },
    crearmilitante(militante){
        
        return apiClient.post('/api/militante/crear',militante)
    }
}