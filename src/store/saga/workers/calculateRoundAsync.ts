import { put } from "redux-saga/effects";
import { calculateRound } from "../../features/simpleGameSlice";

export default function* calculateRoundAsync(){
    yield put({type:calculateRound.type})
}