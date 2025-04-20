<template>
  <form @submit.prevent="cotizar">
    <label>Nombre:</label>
    <input v-model="form.nombre" type="text" required />

    <label>Edad:</label>
    <input v-model.number="form.edad" type="number" required min="18" />

    <label>Tipo de seguro:</label>
    <select v-model="form.tipo" required>
      <option value="">Seleccionar</option>
      <option value="vida">Vida</option>
      <option value="hogar">Hogar</option>
      <option value="salud">Salud</option>
    </select>

    <label><input type="checkbox" v-model="form.coberturaExtra" /> Cobertura extra</label>

    <button type="submit">Cotizar</button>

    <div v-if="resultado" style="margin-top: 10px;">
      {{ resultado }}
    </div>
  </form>
</template>

<script setup>
import { reactive, ref } from 'vue'
import axios from 'axios'

const form = reactive({
  nombre: '',
  edad: null,
  tipo: '',
  coberturaExtra: false
})

const resultado = ref('')

async function cotizar () {
  try {
    const res = await axios.post('https://jsonplaceholder.typicode.com/posts', form)
    console.log('Respuesta de API:', res.data)
    resultado.value = `Cotización enviada. ID ficticio: ${res.data.id}`
  } catch (error) {
    console.error('Error al enviar cotización:', error)
    resultado.value = 'Error al enviar la cotización.'
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
}
</style>
