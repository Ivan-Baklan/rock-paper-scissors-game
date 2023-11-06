import {createSlice} from '@reduxjs/toolkit'


import type { RootState } from '../store'


interface IModuleUISliceStates{
    isRuleOpen:boolean
}

const initialState:IModuleUISliceStates={
    isRuleOpen:false
}


const moduleUISlice = createSlice({
    name:"moduleUI",
    initialState,
    reducers:{
        openRuleModule:(state)=>{
            state.isRuleOpen = true
        },

        closeRuleModule:(state)=>{
            state.isRuleOpen = false
        }
    }
})

export const {openRuleModule,closeRuleModule} = moduleUISlice.actions

export const selectUIState = (state:RootState) => state.moduleUI

export default moduleUISlice.reducer