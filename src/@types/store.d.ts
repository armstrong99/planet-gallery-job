export interface State {
        imgUrl?: string,
        snackBarMessage?: string,
        snackBarShow?: boolean,
        snackBarTime?: number,
        snackBarVariant?: string,
        uploadModal?: boolean
}

export interface Action {
        type: string,
        payload: State
}

