import { ref, reactive , toRefs} from "vue"

export function useFormation(){
    const formation = ref([]);
    const nom = ref("")
    const duree = ref(0)
    const matiere = reactive({
        nom : nom.value,
        duree : duree.value
    })
    
    const matiereRefs = toRefs(matiere)

    function onSubmit(){
        const { nom , duree } = {
            ...matiere
        }
        formation.value.push({nom , duree})
        // vider le formulaire
        matiere.nom = ""
        matiere.duree = 0
    }

    return [
        formation ,
        matiereRefs,
        onSubmit
    ]
}