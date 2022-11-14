import { ref } from 'vue'
import { db, addDoc, collection } from '../firebase/config';

const useCollection = (koleksiyon) => {
    let hata = ref(null);

    const belgeEkle = async (belge) => {
        hata.value = null;

        try {
            //await db.collection(koleksiyon).add(belge) v8

            const colRef = collection(db, koleksiyon);
            addDoc(colRef, belge )

        }
        catch (error) {
            hata.value = "mesaj gönderilemedi"
        }
    }

    return { hata, belgeEkle }

}

export default useCollection