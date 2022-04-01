import { defineStore } from 'pinia'

export const useCardStore = defineStore({
  id: 'card',
  state: () => ({
    card: []
  }),
  actions: {
    add( produit ) {
      this.card.push(produit)
    }
  }
})
