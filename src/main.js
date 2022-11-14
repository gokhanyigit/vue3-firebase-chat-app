import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { auth, onAuthStateChanged } from './firebase/config'

import './assets/main.css'

let app; //undefined

// Buradaki işlem şudur; authStateChanged olması demek, firebase çalışmış demektir, sonrasında vue create olabilir.
onAuthStateChanged(auth, ()=> {

    if(!app){ // !undefined = true
        app = createApp(App).use(router).mount('#app')
    }

})
