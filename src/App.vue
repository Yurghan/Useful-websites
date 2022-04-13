<template>
  <main>
    <main-header> </main-header>
    <main-nav @switch-components="switchComponents"> </main-nav>
    <add-website v-if="display === 'addNew'" @add-website="addWebsite"> </add-website>
    <all-websites v-if="display === 'seeOld'" :websites="websites"> </all-websites>
  </main>
</template>

<script>
import MainHeader from './components/MainHeader.vue';
import AllWebsites from './components/AllWebsites.vue';
import MainNav from './components/MainNav.vue';
import AddWebsite from './components/AddWebsite.vue';

export default {
  components: {
    MainHeader,
    AllWebsites,
    MainNav,
    AddWebsite,
  },

  data() {
    return {
      display: 'seeOld',
      websites: [
        {
          id: 1,
          title: 'Stackoverflow',
          description: 'Good place to ask and answer questions connected with programming.',
          url: 'https://stackoverflow.com/',
        },
        {
          id: 2,
          title: 'MDN',
          description: 'Docs for HTML, CSS and JavaScript',
          url: 'https://developer.mozilla.org/en-US/',
        },
      ],
    };
  },

  methods: {
    addWebsite(id, title, description, link) {
      const websiteObj = {
        id: id,
        title: title,
        description: description,
        url: link,
      };

      this.websites.push(websiteObj);
    },

    switchComponents(arg) {
      this.display = arg;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: Lato, Arial, sans-serif;
}

html {
  font-size: 16px;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
