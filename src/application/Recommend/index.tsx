import { memo } from "react"
import Slider from "components/Slider";
import { banner } from "utils/interface";


function Recommend(props: any) {
  //mock 数据
  const bannerList: banner[] = [1, 2, 3, 4].map(item => {
    return { imageUrl: `http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg?${item}` }
  });
  return (<div>
    <Slider bannerList={bannerList} ></Slider>
  </div>)
}

export default memo(Recommend)