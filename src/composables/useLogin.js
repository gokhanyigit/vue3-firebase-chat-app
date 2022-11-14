import { ref } from 'vue'
import { auth, signInWithEmailAndPassword } from '../firebase/config'

const hata = ref(null)

const login = async (email, parola) => {

    hata.value = null;
    try {
        debugger
        //const res=ref(auth.currentUser)
        signInWithEmailAndPassword(auth, email, parola)
            .then(cred => {
                console.log('Giriş Yapıldı', cred.user);
                //res.value = cred.user

                hata.value = null;
                return cred.user;
            })
            .catch(err => {
                console.log(err.message)
            })

        

    } catch (error) {
        hata.value = error.message
    }
}

const useLogin = () => {

    return { hata, login }
}

export default useLogin
