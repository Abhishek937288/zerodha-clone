import {create} from "zustand"

const useBuySellStore = create((set) => {
  return {
    isBuyOpen: false,
    isSellOpen: false,

    openBuy: () => set((prev) => ({...prev, isBuyOpen: true})),
    closeBuy: () => set(prev => ({...prev, isBuyOpen: false})),
    openSell:()=>set((prev)=>({...prev,isSellOpen:true})),
    closeSell:()=>set(prev =>({...prev,isSellOpen:false}))
}})

export {useBuySellStore};