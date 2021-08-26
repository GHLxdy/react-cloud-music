import { memo, useEffect } from "react"
import Slider from "components/Slider";
import { RouteConfigComponentProps } from "react-router-config";
import RecommendList from "components/List";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/reducer";
import * as actionTypes from './store/actionCreators';
import { Content } from "./style";
import Scroll from "baseUI/scroll";
import { forceCheck } from "react-lazyload"

function Recommend(props: RouteConfigComponentProps) {
  //mock 数据
  // const bannerList: IBannerList = [1, 2, 3, 4].map(item => {
  //   return { imageUrl: `http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg?${item}` }
  // });

  // const recommendList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
  //   return {
  //     id: `${item}`,
  //     picUrl: 'https://p1.music.126.net/fhmefjUfMD-8qtj3JKeHbA==/18999560928537533.jpg',
  //     playCount: 17171122,
  //     name: "朴树、许巍、李健、郑钧、老狼、赵雷"
  //   }
  // })
  const { bannerList, recommendList, enterLoading } = useSelector((state: RootState) => ({
    bannerList: state.recommend.bannerList,
    recommendList: state.recommend.recommendList,
    enterLoading: state.recommend.enterLoading
  }))

  const dispatch = useDispatch()

  const getBannerDataDispatch = () => {
    dispatch(actionTypes.getBannerList())
  }
  const getRecommendDataDispatch = () => {
    dispatch(actionTypes.getRecommendList())
  }

  useEffect(() => {
    if (!bannerList.length) {
      getBannerDataDispatch()
    }

    if (!recommendList.length) {
      getRecommendDataDispatch()
    }
    // eslint-disable-next-line
  }, [])


  return (
    <Content play={0}>
      <Scroll className="list" onScroll={forceCheck}>
        <Slider bannerList={bannerList} ></Slider>
        <RecommendList recommendList={recommendList}></RecommendList>
        {enterLoading ? "loading..." : null}
      </Scroll>
    </Content>
  )
}

export default memo(Recommend)