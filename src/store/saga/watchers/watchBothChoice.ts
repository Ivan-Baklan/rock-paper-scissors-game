import {  takeEvery} from 'redux-saga/effects'
import {  makeComputerChoice } from '../../features/simpleGameSlice'
import calculateRoundAsync from '../workers/calculateRoundAsync'


export default function* watchBothChoice(){
   
   yield takeEvery(makeComputerChoice.type,calculateRoundAsync)
}