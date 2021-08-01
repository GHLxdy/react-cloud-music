import { memo, useEffect, useState } from "react";
import Swiper from "swiper";
import 'swiper/swiper.min.css'
import { banner } from "utils/interface";
import { SliderContainer } from "./style";

function Slider(props: { bannerList: banner[] }) {
  const [sliderSwiper, setSliderSwiper] = useState<Swiper | null>(null)
  const { bannerList } = props
  useEffect(() => {
    if (bannerList.length && !sliderSwiper) {
      const newSliderSwiper: Swiper = new Swiper(".slider-container", {
        loop: true,
        autoplay: {
          delay: 300,
          disableOnInteraction: false
        },
        pagination: { el: '.swiper-pagination' }
      })
      setSliderSwiper(newSliderSwiper)
    }
  }, [bannerList.length, sliderSwiper])

  return (<SliderContainer>
    <div className="slider-container">
      <div className="swiper-wrapper">
        {
          bannerList.map((slider, i) => {
            return (
              <div className="swiper-slide" key={slider.imageUrl}>
                <div className="slider-nav">
                  <img src={slider.imageUrl} alt="推荐" width="100%" height="100%" />
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="swiper-pagination"></div>
    </div>
    <div className="before"></div>
  </SliderContainer>)
}

export default memo(Slider)