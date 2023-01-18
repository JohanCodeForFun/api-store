<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {},
  data() {
    return {
      name: 'Link',
      age: 25 as number | string
    }
  },
  methods: {
    changeName(name: string) {
      this.name = name
      return name
    },
    changeAge(age: number | string) {
      this.age = age
      return age
    }
  }
})
</script>

<template>
  <div class="app">
    <h1>Hello Shop</h1>
    <h3>User: {{ name }} {{ age }}</h3>
    <button @click="changeName('Zelda')">Change name</button>
    <button @click="changeAge(79)">Change age</button>
  </div>
</template>

<style scoped>

</style>
