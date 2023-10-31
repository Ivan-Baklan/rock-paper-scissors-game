import {createSlice,PayloadAction} from '@reduxjs/toolkit'

import type { RootState } from '../store'



interface SimpleGameState{
    score:number
    playerChoice:SimpleGameChoice
    computerChoice:SimpleGameChoice
}

const initialState:SimpleGameState = {
    score:0,
    playerChoice:null,
    computerChoice:null
} 

export const simpleGameSlice = createSlice({
    name:'simpleGame',
    initialState,
    reducers:{
        makeChoice:(state,action:PayloadAction<SimpleGameChoice>)=>{
            state.playerChoice = action.payload
        },
        makeComputerChoice:(state)=>{
            const randomChoice = Math.floor(Math.random()+3)
            switch(randomChoice){
                case 0:
                    state.computerChoice = 'paper'
                    break;
                case 1:
                    state.computerChoice ='rock'
                    break;
                case 2:
                    state.computerChoice = 'scissors'
                    break;
                }
        }
    }
})

export const {makeChoice} = simpleGameSlice.actions

export const selectGameChoice = (state:RootState)=>state.simpleGame

export default simpleGameSlice.reducer