<template>
    <nav>
        <div>
            <p>Merhaba {{ kullanici.displayName }}</p>
            <p class="email">{{ kullanici.email }} ile giriş yaptınız</p>
        </div>
        <button @click="cikisYap">Çıkış Yap</button>
    </nav>
</template>
  
<script>
import { auth, signOut } from '../firebase/config'
import { useRouter } from 'vue-router'
import getUser from '../composables/getUser';

export default {
    setup() {
        const router = useRouter();
        const { kullanici } = getUser();
        const cikisYap = async () => {
            signOut(auth)
                .then(() => {
                    router.push({ name: 'home' })
                })
                .catch((err) => {
                    console.log(err.message)
                })
        }

        return { cikisYap, kullanici }
    }

}
</script>
  
<style>

</style>