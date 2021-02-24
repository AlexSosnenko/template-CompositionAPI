<template>
  <nav class="navbar">
    <h3>App Title</h3>

    <ul class="navbar-menu">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/help">Помощь</router-link>
      </li>
      <li>
        <a href="#" @click.prevent="logout">Выход</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
export default {
  setup() {
    const router = useRouter()
    const store = useStore()
    return {
      logout: () => {
        store.commit('logout')
        router.push('/auth')
      },
      open: () => store.commit('openSidebar')
    }
  }
}
</script>

<style scoped>
</style>
