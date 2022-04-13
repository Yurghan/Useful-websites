<template>
  <single-website
    v-for="website in websites"
    :key="website.id"
    :website-id="website.id"
    :website-title="website.title"
    :website-description="website.description"
    :website-url="website.url"
    @delete-website="deleteWebsite"
  >
  </single-website>
</template>

<script>
import SingleWebsite from './SingleWebsite.vue';
export default {
  components: { SingleWebsite },
  props: {
    websites: {
      type: Object,
      required: true,
    },
  },

  methods: {
    deleteWebsite(websiteId) {
      const properIndex = this.websites.findIndex((el) => el.id === websiteId);
      this.websites.splice(properIndex, 1);
    },
  },
};
</script>

<style></style>
