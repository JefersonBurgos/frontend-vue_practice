<template>
  <div>
    <h1>Clientes</h1>
    <FormularioCliente />
  </div>
</template>

<script>
import FormularioCliente from '../components/FormComponent.vue'

export default {
  name: 'ClienteView',
  components: {
    FormularioCliente
  }
}
</script>
