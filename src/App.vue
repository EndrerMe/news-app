<template>
  <div id="app">
    <CanvasBg></CanvasBg>
    <Header></Header>
    <router-view/>
    <Footer class="footer"></Footer>
  </div>
</template>

<script>

import Header from './shared/layouts/header/header';
import Footer from './shared/layouts/footer/footer';
import CanvasBg from './shared/components/canvas-bg';

export default {
  name: 'app',
  components: {
    Header,
    Footer,
    CanvasBg,
  },
  data() {
    return {
      category: null,
    }
  },
  methods: {
    updateCategory(e) {
      this.$emit('updateNews', e)
    },
  },
}
</script>

<style>
html, body {
  min-height: 100vh;
}

* {
  padding: 0;
  margin: 0;
}

#app {
  position: relative;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height:100vh;
}
</style>
