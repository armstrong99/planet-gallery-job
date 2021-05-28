import { State, Action, ImageData } from "../../@types/store";

export const ReducState:State = {
        snackBarMessage: '',
        snackBarShow: false,
        snackBarTime: 3000,
        snackBarVariant: 'info',
        imgData: [],
        count: 50,
        skip: 0,
        limit: 5,
        name: [""]
     }
   
export const reducer = (state: State, {type, payload}: Action) => {
  
    switch (type) {
        case 'SnackBar': return {...state, ...payload}
        case 'Scroll_Window_Position': return {...state, ...payload}
         
        
        default: return state
             
    }

}