import {   takeLatest} from 'redux-saga/effects'
import {  makeComputerBonusChoice} from '../../features/bonusGameSlice'
import calculateBonusRoundAsync from '../workers/calculateBonusRoundAsync'




export default function* watchBothBonusChoice(){
   
   yield takeLatest(makeComputerBonusChoice.type,calculateBonusRoundAsync)
}