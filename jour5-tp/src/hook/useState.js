import { reactive } from "vue"
export function useState(){
    const state = reactive({
        isLodding : false ,
        data : [],
        error : ""
    })
    
    function setState(){
        state.data.push("nouvel élément")
    }
    
    return [state , setState]
}