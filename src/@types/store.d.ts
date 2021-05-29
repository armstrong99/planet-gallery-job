

export interface State {
        htmlRef?: string,
        scrollWindowPosition?: number,
      
}

export interface Action {
        type: string,
        payload: State
}

