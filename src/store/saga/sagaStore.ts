import{all } from 'redux-saga/effects' 
import watchBothBonusChoice from './watchers/watchBothBonusChoice'
import watchBothChoice from './watchers/watchBothChoice'
import watchComputerBonusChoice from './watchers/watchComputerBonusChoice'

import watchPlayerChoice from './watchers/watchPlayerChoice'






export default function* rootSaga(){
    yield all([watchPlayerChoice(),watchBothChoice(),watchComputerBonusChoice(),watchBothBonusChoice()])
}