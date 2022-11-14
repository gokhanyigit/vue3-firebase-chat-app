import {ref} from 'vue'
import {auth, onAuthStateChanged} from '../firebase/config'

const kullanici=ref(auth.currentUser)

onAuthStateChanged(auth, (k)=> {
    console.log(k);
    kullanici.value=k;
})

const getUser=()=>{
    return {kullanici}
}

export default getUser