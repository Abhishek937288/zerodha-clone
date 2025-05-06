import {create} from "zustand"


const useBuySellStore = create((set) => {
  return {
    isBuyOpen: false,
    isSellOpen: false,
    buyUid :null,
    sellUid :null,

    openBuy: (uid) => set((prev) => ({...prev, isBuyOpen: true,buyUid:uid})),
    closeBuy: () => set(prev => ({...prev, isBuyOpen: false,buyUid:null})),
    openSell:(uid)=>set((prev)=>({...prev,isSellOpen:true,sellUid:uid})),
    closeSell:()=>set(prev =>({...prev,isSellOpen:false,sellUid:null}))
   
    
}})

export {useBuySellStore};