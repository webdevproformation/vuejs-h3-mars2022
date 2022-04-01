import {  ref , onMounted } from "vue"
export function useNb(start){
    const nb = ref(start)
    function modifNb(){
      nb.value++
    }

    onMounted(() => {
        setInterval(() => {
          nb.value++
        } , 1000)
    })
    
    return [nb , modifNb]
}