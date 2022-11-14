import { ref } from 'vue'
import { auth, createUserWithEmailAndPassword, updateProfile } from '../firebase/config'

const hata = ref(null)

const signup = async (email, parola, kullaniciAd) => {

    debugger

    hata.value = null;
    try {
        if (kullaniciAd.trim() === '') {
            throw new Error('Kullanıcı adı boş geçilemez')
        }

        const res = ref(null)
        await createUserWithEmailAndPassword(auth, email, parola)
            .then(cred => {
                res.value = cred.user

                updateProfile(auth.currentUser, {
                    displayName: kullaniciAd
                }).then(() => {
                    console.log('Display Name güncellendi')
                }).catch((err) => {
                    console.log(err.message)
                    throw new Error('DisplayName güncelleme işlemi gerçekleşmedi')
                });
            })
            .catch(err => {
                console.log(err.message)
                throw new Error('Register işlemi gerçekleşmedi')
            })

        hata.value = null;
        return res;

    } catch (error) {
        hata.value = error.message
    }
}

const useRegister = () => {

    return { hata, signup }
}

export default useRegister
