import { takeLatest}from 'redux-saga/effects'
import { makeComputerChoiceAsync } from '../../features/bonusGameSlice'

import computerBonusChoiceAsync from '../workers/computerBonusChoiceAsync'


export default function* watchComputerBonusChoice(){
    yield takeLatest(makeComputerChoiceAsync.type,computerBonusChoiceAsync)
}