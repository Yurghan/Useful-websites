<template>
  <main-container>
    <form>
      <label>Title</label>
      <input type="text" v-model="title" />
      <label>Description</label>
      <textarea v-model="description"></textarea>
      <label>Link</label>
      <input type="url" v-model="url" />
      <button @click.prevent="addWebsite">Add website</button>
    </form>
  </main-container>
</template>

<script>
export default {
  emits: ['add-website'],

  data() {
    return {
      id: 3,
      title: '',
      description: '',
      url: '',
    };
  },

  methods: {
    addWebsite() {
      this.$emit('add-website', this.id, this.title, this.description, this.url);
      this.id++;
      this.title = '';
      this.description = '';
      this.url = '';
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}

input,
textarea {
  padding: 0.2rem;
  margin-bottom: 1rem;
  font-size: 1rem;
}

input:focus,
textarea:focus {
  background-color: #09916428;
}

button {
  padding: 0.5rem;
  border: none;
  background-color: #007a52;
  color: #fff;
}

button:hover {
  background-color: #099164;
  cursor: pointer;
}
</style>
