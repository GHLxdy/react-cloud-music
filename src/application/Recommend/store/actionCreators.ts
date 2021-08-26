import { getBannerRequest, getRecommendListRequest } from 'api/request'
import { AxiosResponse } from 'axios'
import { Dispatch } from 'redux'
import { IBannerList, IRecommendList } from 'utils/interface'
import * as actionType from './constants'

export const changeBannerList = (data:IBannerList) => ({
  type: actionType.CHANGE_BANNER,
  data
})

export const changeRecommendList = (data: IRecommendList) => ({
  type: actionType.CHANGE_RECOMMEND_LIST,
  data
})

export const changeEnterLoading = (data: boolean) => ({
  type: actionType.CHANGE_ENTER_LOADING,
  data
})


export const getBannerList = () => {
  return (dispatch: Dispatch) => {
    getBannerRequest<{ banners:IBannerList }>().then((data:AxiosResponse) => {
      const action = changeBannerList(data.data.banners)
      dispatch(action)
    }).catch(() => {
      console.log('轮播图数据传输错误')
    })
  }
}

export const getRecommendList = () => {
  return (dispatch: Dispatch) => {
    getRecommendListRequest<{ result:IRecommendList }>().then((data:AxiosResponse) => {
      dispatch(changeBannerList(data.data.result))
      dispatch(changeEnterLoading(false));
    }).catch(() => {
      console.log('推荐歌单数据传输错误')
    })
  }
}