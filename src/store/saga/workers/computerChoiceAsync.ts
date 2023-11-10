import {put,delay}from 'redux-saga/effects'
import {randomComputerChoice} from '../../../utils/randomComputerChoice'
import { makeComputerChoice } from '../../features/simpleGameSlice'

export default function* computerChoiceAsync(){
    yield delay(1000)
    yield put({type:makeComputerChoice.type,payload:randomComputerChoice()as SimpleGameChoice})
    
}
