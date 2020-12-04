<template>
  <div id="app">
    <app-navigation></app-navigation>
    <transition name="page" mode="out-in">
    <router-view/>
    </transition>
     <app-footer></app-footer> 
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
export default {
  components: {
    AppNavigation: Navigation,
    AppFooter: Footer
  },
  }
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font: 16px Sans-Serif;
}

body {
  margin: 0;
  background-color: #FBEAEB;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100%;
}
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  
}

.page-enter-active,
.page-leave-active {
  transition: opacity 1s, transform 1s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}

</style>