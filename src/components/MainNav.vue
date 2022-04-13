<template>
  <main-container>
    <nav>
      <button @click="switchComponents('seeOld')">My Websites</button>
      <button @click="switchComponents('addNew')">Add new one</button>
    </nav>
  </main-container>
</template>

<script>
export default {
  methods: {
    switchComponents(arg) {
      this.$emit('switch-components', arg);
    },
  },
};
</script>

<style scoped>
button {
  padding: 0.7rem 1.2rem;
  border: none;
  margin: 0 0.5rem;
  background-color: #007a52;
  color: #fff;
}

button:hover {
  background-color: #099164;
  cursor: pointer;
}
</style>
