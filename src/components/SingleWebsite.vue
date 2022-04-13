<template>
  <main-container>
    <h2>{{ websiteTitle }}</h2>
    <p>{{ websiteDescription }}</p>
    <a :href="websiteUrl" target="_blank">Check it</a>
    <button @click="deleteWebsite">Delete this website</button>
  </main-container>
</template>

<script>
export default {
  emits: ['delete-website'],

  props: {
    websiteId: {
      type: Number,
      required: true,
    },
    websiteTitle: {
      type: String,
      required: true,
    },
    websiteDescription: {
      type: String,
      required: true,
    },
    websiteUrl: {
      type: String,
      required: true,
    },
  },

  methods: {
    deleteWebsite() {
      this.$emit('delete-website', this.websiteId);
    },
  },
};
</script>

<style scoped>
a {
  width: fit-content;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  border-radius: 2rem;
  background-color: #007a52;
  color: #fff;
  text-decoration: none;
}

button {
  position: absolute;
  right: 0px;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  border: none;
  border-top-left-radius: 2rem;
  border-bottom-left-radius: 2rem;
  background-color: #007a52;
  color: #fff;
}

a:hover,
button:hover {
  background-color: #099164;
  cursor: pointer;
}
</style>
