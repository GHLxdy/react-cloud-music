import { combineReducers } from "redux";
import { reducer as recommendReducer } from 'application/Recommend/store'
import { RecommendState } from "application/Recommend/store/reducer";

export interface RootState {
  recommend: RecommendState;
}

export default combineReducers({
  recommend: recommendReducer
})