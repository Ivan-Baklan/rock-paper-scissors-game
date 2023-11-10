import { put } from "redux-saga/effects";
import { calculateRound } from "../../features/bonusGameSlice";

export default function* calculateBonusRoundAsync(){
    yield put({type:calculateRound.type})
}