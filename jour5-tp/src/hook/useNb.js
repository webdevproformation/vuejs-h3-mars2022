import {  ref } from "vue"
export function useNb(){
    const nb = ref(10)
    function modifNb(){
      nb.value++
    }
    return [nb , modifNb]
}