import {put,delay}from 'redux-saga/effects'
import {randomComputerBonusChoice} from '../../../utils/randomComputerChoice'
import { makeComputerBonusChoice } from '../../features/bonusGameSlice'


export default function* computerBonusChoiceAsync(){
    yield delay(1000)
    yield put({type:makeComputerBonusChoice.type,payload:randomComputerBonusChoice()as SimpleGameChoice|BonusGameChoice})
    
}
