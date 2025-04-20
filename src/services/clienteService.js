import axios from 'axios'

const API_URL = 'http://localhost:8082'

export default {
  getClientes () {
    return axios.get(`${API_URL}/cliente/all`)
  },
  eliminarCliente (id) {
    return axios.delete(`${API_URL}/cliente/${id}`)
  }
}

export function crearCliente (cliente) {
  return axios.post(`${API_URL}/cliente/add`, cliente)
}
