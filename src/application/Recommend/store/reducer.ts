import produce from 'immer';
import { AnyAction } from 'redux';
import { IBannerList, IRecommendList } from 'utils/interface';
import * as actionType from './constants'

export interface RecommendState {
  bannerList: IBannerList;
  recommendList: IRecommendList;
  enterLoading: boolean;
}
const defaultSate:RecommendState = {
  bannerList: [],
  recommendList: [],
  enterLoading: true
}

export default produce((state, action:AnyAction) => {
  switch (action.type) {
    case actionType.CHANGE_BANNER:
      state.bannerList = action.data;
      break;
    case actionType.CHANGE_RECOMMEND_LIST:
      state.recommendList = action.data
      break;
    case actionType.CHANGE_ENTER_LOADING:
      state.enterLoading = action.data
      break;
  }
},defaultSate)