import {createSlice,PayloadAction} from '@reduxjs/toolkit'
import {calculateSimpleGame} from '../../utils/calculateResult'

import type { RootState } from '../store'



interface SimpleGameState{
    score:number
    playerChoice:SimpleGameChoice | null
    computerChoice:SimpleGameChoice | null
    winner: "player1" | "player2" | "draw"| null
}

const initialState:SimpleGameState = {
    score:Number.parseInt(localStorage.getItem("score") as string) | 0,
    playerChoice:localStorage.getItem("playerChoice") as SimpleGameChoice | null,
    computerChoice:localStorage.getItem("computerChoice") as SimpleGameChoice | null,
    winner:localStorage.getItem("winner") as "player1" | "player2" | "draw" | null
} 

export const simpleGameSlice = createSlice({
    name:'simpleGame',
    initialState,
    reducers:{
        makeChoice:(state,action:PayloadAction<SimpleGameChoice>)=>{
            localStorage.setItem("playerChoice",action.payload)
            state.playerChoice = action.payload
        },
        makeComputerChoiceAsync:()=>{},
        makeComputerChoice:(state,action:PayloadAction<SimpleGameChoice>)=>{
            localStorage.setItem("computerChoice",action.payload)
            state.computerChoice = action.payload
        },
        calculateRound:(state)=>{
            const result = calculateSimpleGame(state.playerChoice as SimpleGameChoice,state.computerChoice as SimpleGameChoice)
            
            switch(result){
                case 0:
                    state.winner = "draw"
                    break;
                case 1:
                    state.winner = "player1"
                    state.score += 1
                    break;
                case -1:
                    state.winner = "player2"
                    if(state.score >0){
                        state.score -= 1 
                    }
                    break;
            }
            localStorage.setItem("score",state.score.toString())
            localStorage.setItem("winner",state.winner)
        },
        clearChoices:(state)=>{
            state.playerChoice = null
            state.computerChoice = null
            state.winner = null
            localStorage.removeItem("playerChoice")
            localStorage.removeItem("computerChoice")
        }
    }
})

export const {makeChoice,makeComputerChoice,makeComputerChoiceAsync,calculateRound,clearChoices} = simpleGameSlice.actions

export const selectGameChoice = (state:RootState)=>state.simpleGame

export default simpleGameSlice.reducer