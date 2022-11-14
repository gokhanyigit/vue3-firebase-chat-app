import { ref } from 'vue'
import { db, query, collection, onSnapshot, orderBy } from '../firebase/config';

const getCollection = (koleksiyon) => {
    const belgeler = ref(null)
    const hata = ref(null)

    //let koleksiyonRef=db.collection(koleksiyon).orderBy('olusturulmaTarihi') Firebase v8

    const colRef = collection(db, koleksiyon);
    const q = query(colRef, orderBy("olusturulmaTarihi"))  //, orderBy("olusturulmaTarihi")

    onSnapshot(q, (snapshot) => {
        let sonuclar = []

        snapshot.docs.forEach(doc => {
            doc.data().olusturulmaTarihi && sonuclar.push({ ...doc.data(), id: doc.id })
        })

        belgeler.value = sonuclar;
        hata.value = null
    }, (error) => {
        belgeler.value = null
        hata.value = error
    });

    return { hata, belgeler }
}

export default getCollection