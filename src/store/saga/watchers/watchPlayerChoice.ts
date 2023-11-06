import {takeEvery}from 'redux-saga/effects'
import { makeComputerChoiceAsync } from '../../features/simpleGameSlice'
import computerChoiceAsync from '../workers/computerChoiceAsync'

export default function* watchPlayerChoice(){
    yield takeEvery(makeComputerChoiceAsync.type,computerChoiceAsync)
}