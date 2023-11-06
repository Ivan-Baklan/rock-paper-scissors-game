import{all } from 'redux-saga/effects' 
import watchBothChoice from './watchers/watchBothChoice'

import watchPlayerChoice from './watchers/watchPlayerChoice'






export default function* rootSaga(){
    yield all([watchPlayerChoice(),watchBothChoice()])
}