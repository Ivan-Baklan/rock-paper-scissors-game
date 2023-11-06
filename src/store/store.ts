import {configureStore} from '@reduxjs/toolkit'
import createSagaMiddlware from '@redux-saga/core'
import simpleGameReducer from './features/simpleGameSlice';
import moduleUIReducer from './features/moduleUISlice'
import rootSaga from './saga/sagaStore';

const sagaMiddleware = createSagaMiddlware()

export const store = configureStore({
    reducer:{
        simpleGame:simpleGameReducer,
        moduleUI:moduleUIReducer
    },
    middleware:[sagaMiddleware],
    devTools:process.env.NODE_ENV !=="production"
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch