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
        case 'UPLOAD_MODAL': return {...state, ...payload}
        case 'GALLERY_DELETE_LIST': return {...state, ...payload}
        case 'DRAG_DROP_AREA': return {...state, ...payload}
        case 'ADD_IMAGE_FROM_API':
                let imgDataMap = [...state.imgData!, ...payload.imgData!]    
        return {...state, imgData: imgDataMap}
        case 'GET_IMAGE_QUERY': return {...state, ...payload}
        case 'DELTE_IMAGE_BY_FILENAME':

            let arr:ImageData[] = []

            payload.name?.map((name, i) => {
                    if(i ===0) {

                        let filterImgData = state.imgData?.filter(data => data.name !== name)
        
                        arr = filterImgData!
                    }

                    else {
                        let filterImgData = arr.filter(data => data.name !== name)
        
                        arr = filterImgData
                    }
            })

        return {...state, imgData: arr}
            
        default: return state
             
    }

}