import React, { createContext } from "react";
import { Action, State } from "../@types/store";
import {ReducState} from './reducer'

interface IContext {
    state: State,
    dispatch: React.Dispatch<Action>
}

const Context = createContext<IContext>({state: ReducState, dispatch: () => {}})

Context.displayName = "Planeteria";

export default Context;