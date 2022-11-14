<template>
  <div class="home container">
    <h2>Yiğit Chat App</h2>
    <div v-if="uyeMi">
      <Login @login="chatBasla" />
      <p>Üye olmak için <span @click="uyeMi = false">Üye Ol</span> sayfasına gidiniz</p>
    </div>
    <div v-else>
      <Register @register="chatBasla" />
      <p>Giriş yapmak için <span @click="uyeMi = true">Giriş</span> sayfasına gidiniz</p>
    </div>
  </div>
</template>

<script>
import Register from '../components/Register.vue';
import Login from '../components/Login.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'HomeView',
  components: {
    Register,
    Login
  },
  setup() {
    const uyeMi = ref(true)

    const router = useRouter();
    const chatBasla = () => {
      router.push({ name: 'ChatOda' })
    }

    return { uyeMi, chatBasla }
  }
}
</script>

<style scoped>
.home {
  text-align: left;
  padding: 20px 50px;
}
</style>
