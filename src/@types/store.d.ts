export interface ImageData{
        album: string,
        name: string,
        path: string,
        raw: string,
        id?: string 
    }
export interface State {
        scrollWindowPosition?: number,
        name?: string[],
        snackBarMessage?: string,
        snackBarShow?: boolean,
        snackBarTime?: number,
        snackBarVariant?: string,
        uploadModal?: boolean
        imgData?: ImageData[],
        count?: number,
        skip?:number,
        limit?: number
}

export interface Action {
        type: string,
        payload: State
}

