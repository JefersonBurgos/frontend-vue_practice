<template>
    <form @submit.prevent="guardarCliente">
      <div>
        <label>Nombre:</label>
        <input v-model="cliente.nombre" required />
      </div>

      <div>
        <label>Correo:</label>
        <input v-model="cliente.email" type="email" required />
      </div>

      <div>
        <label>Teléfono:</label>
        <input v-model="cliente.telefono" required />
      </div>

      <button type="submit">Guardar Cliente</button>
    </form>
  </template>

<script>
import { ref } from 'vue'
import { crearCliente } from '../services/clienteService'

export default {
  name: 'FormularioCliente',
  setup () {
    const cliente = ref({
      nombre: '',
      email: '',
      telefono: ''
    })

    const guardarCliente = async () => {
      try {
        debugger
        await crearCliente(cliente.value)
        alert('Cliente guardado correctamente')
        cliente.value = { nombre: '', email: '', telefono: '' }
      } catch (error) {
        console.error('Error al guardar cliente:', error)
        alert('Hubo un error al guardar el cliente')
      }
    }

    return {
      cliente,
      guardarCliente
    }
  }
}
</script>
