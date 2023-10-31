import {configureStore} from '@reduxjs/toolkit'
import { devToolsEnhancer } from '@reduxjs/toolkit/dist/devtoolsExtension';
import simpleGameReducer from './features/simpleGameSlice';



export const store = configureStore({
    reducer:{
        simpleGame:simpleGameReducer
    },
    devTools:process.env.NODE_ENV !=="production"
})



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch