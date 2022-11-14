import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChatOda from '../views/ChatOda.vue'
import { auth } from '../firebase/config'

// beforeEnter ile tetiklendiğinde bu 3 parametre gelecektir
// to : yönlenmenin hangi sayfaya gideceğini belirleyebiliriz
// from : hangi sayfadan gelindiği
// next : işleme devam ya da belirtilen sayfaya git
const authControl = (to, from, next) => {
  const kullanici = auth.currentUser;
  if (!kullanici) {
    next({ name: 'HomeView' })
  }
  else {
    next()
  }
}

// Kullanıcı var ise HomeView sayfasına gitme, ChatOda isimli route'u kullan, Login - Register sayfalarına gitme
const chatControl = (to, from, next) => {
  debugger
  const kullanici = auth.currentUser;
  if (kullanici) {
    next({ name: 'ChatOda' })
  }
  else {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: chatControl
  },
  {
    path: '/chat',
    name: 'ChatOda',
    component: ChatOda,
    beforeEnter: authControl
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
