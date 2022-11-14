<template>
    <div class="chat-window">
        <div v-if="hata">{{ hata }}</div>
        <div v-if="belgeler" class="messages" ref="mesajlar">
            <div v-for="belge in duzenlenmisBelgeler" :key="belge.id" class="single">
                <span class="created-at">{{ belge.olusturulmaTarihi }}</span>
                <span class="name">{{ belge.kullanici }}</span>
                <span style="text-decoration:none">{{ belge.mesaj }}</span>
            </div>
        </div>
    </div>
</template>


<script>
import getCollection from '../composables/getCollection';
import { computed, ref, onUpdated } from 'vue' 
import { formatDistanceToNow } from 'date-fns'
export default {

    setup() {
        debugger
        const { hata, belgeler } = getCollection('mesajlar');

        // computed kullanma nedenimiz anlık işlem yapabilmek içindir.
        // eslint-disable-next-line vue/return-in-computed-property
        const duzenlenmisBelgeler = computed(() => {
            if (belgeler.value) {
                return belgeler.value.map(doc => {
                    let zaman = formatDistanceToNow(doc.olusturulmaTarihi.toDate())
                    return { ...doc, olusturulmaTarihi: zaman }
                })
            }
        })
        const mesajlar = ref(null);

        // Sayfa her güncellendiğinde, yani mesajlarda her değişiklik olduğunda  scroolTop değişecek.
        onUpdated(() => {
            mesajlar.value.scrollTop = mesajlar.value.scrollHeight;
        })

        return { hata, belgeler, duzenlenmisBelgeler, mesajlar }
    }
}

</script>

<style scoped>

</style>