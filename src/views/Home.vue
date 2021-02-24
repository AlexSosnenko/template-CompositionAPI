<template>
  <app-page title="Home">
    <h3>Home Page. Composition API.</h3>
    <h4>vue3, vue-router, vuex, vee-validate, css(local)</h4>
    <pre>{{ info }}</pre>
  </app-page>
</template>

<script>
import AppPage from '../components/ui/AppPage'
import { ref } from 'vue'
export default {
  setup() {
    var info = ref()
    var json = require('../../package.json')
    info = json.dependencies
    return { info }
  },
  components: {
    AppPage
  }
}
</script>
