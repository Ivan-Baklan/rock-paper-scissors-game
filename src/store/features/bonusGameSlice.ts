import {createSlice,PayloadAction} from '@reduxjs/toolkit'
import { calculateBonusGame } from '../../utils/calculateResult'


import type { RootState } from '../store'

type BonusGameFullChoice = SimpleGameChoice | BonusGameChoice

interface BonusGameState{
    score:number
    playerChoice:BonusGameFullChoice | null
    computerChoice:BonusGameFullChoice | null
    winner: "player1" | "player2" | "draw"| null
}

const initialState:BonusGameState = {
    score:Number.parseInt(localStorage.getItem("bonusScore") as string) | 0,
    playerChoice:localStorage.getItem("playerBonusChoice") as BonusGameFullChoice | null,
    computerChoice:localStorage.getItem("computerBonusChoice") as BonusGameFullChoice | null,
    winner:localStorage.getItem("bonusWinner") as "player1" | "player2" | "draw" | null
} 

export const bonusGameSlice = createSlice({
    name:'bonusGame',
    initialState,
    reducers:{
        makeChoiceBonus:(state,action:PayloadAction<BonusGameFullChoice>)=>{
            localStorage.setItem("playerBonusChoice",action.payload)
            state.playerChoice = action.payload
        },
        makeComputerBonusChoice:(state,action:PayloadAction<BonusGameFullChoice>)=>{
            localStorage.setItem("computerBonusChoice",action.payload)
            state.computerChoice = action.payload
        },
        makeComputerChoiceAsync:()=>{},
        calculateRound:(state)=>{
            const result = calculateBonusGame(state.playerChoice as BonusGameFullChoice,state.computerChoice as BonusGameFullChoice)
            
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
            localStorage.setItem("bonusScore",state.score.toString())
            localStorage.setItem("bonusWinner",state.winner)
        },
        clearChoices:(state)=>{
            state.playerChoice = null
            state.computerChoice = null
            state.winner = null
            localStorage.removeItem("playerBonusChoice")
            localStorage.removeItem("computerBonusChoice")
            localStorage.removeItem("bonusWinner")
        }
    }
})

export const {makeChoiceBonus,clearChoices,makeComputerBonusChoice,makeComputerChoiceAsync,calculateRound} = bonusGameSlice.actions

export const selectBonusGameChoice = (state:RootState)=>state.bonusGame

export default bonusGameSlice.reducer