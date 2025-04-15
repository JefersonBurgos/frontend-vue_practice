<template>
  <div>
    <h1>Clientes</h1>
    <ul>
      <li v-for="cliente in clientes" :key="cliente.id">
        {{ cliente.nombre }} - {{ cliente.email }}
        <button @click="eliminarCliente(cliente.id)">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script>
import clienteService from '../services/clienteService'

export default {
  data () {
    return {
      clientes: []
    }
  },
  methods: {
    obtenerClientes () {
      clienteService.getClientes()
        .then(response => {
          this.clientes = response.data
        })
        .catch(error => {
          console.error('Error al obtener clientes:', error)
        })
    },
    eliminarCliente (id) {
      if (confirm('¿Estás seguro de que deseas eliminar este cliente?')) {
        clienteService.eliminarCliente(id)
          .then(() => {
            this.obtenerClientes()
          })
          .catch(error => {
            console.error('Error al eliminar cliente:', error)
          })
      }
    }
  },
  mounted () {
    this.obtenerClientes()
  }
}
</script>
