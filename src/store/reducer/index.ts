import { State, Action } from "../../@types/store";

export const ReducState:State = {
        snackBarMessage: '',
        snackBarShow: false,
        snackBarTime: 3000,
        snackBarVariant: 'info'
     }
   
export const reducer = (state: State, {type, payload}: Action) => {
  
    switch (type) {
        case 'SnackBar': return {...state, ...payload}
        case 'UPLOAD_MODAL': return {...state, ...payload}
        case 'GALLERY_DELETE_LIST': return {...state, ...payload}
            
        default: return state
             
    }

}