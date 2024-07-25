import { defineStore } from "pinia";

export const useCheckoutStore = defineStore("checkout" , {
     state : () => ({
          name : "ajal",
          email : "",
          number : "",
          address : "",
          zipCode : "",
          city : "",
          country : "",
          eMoneyNumber : "",
          eMoneyPin : null,
          errors : []
     }),
     getters : {},
     actions : {
          checkOut(store){
               if(store.name == ""){
                    this.errors.push({
                         errorName : "cannot be empty "
                    })
               }
          },
          
     }
})