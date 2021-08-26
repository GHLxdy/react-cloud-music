import { forwardRef, ReactNode, useEffect, useImperativeHandle, useRef, useState } from "react";
import { debounce, noop } from 'lodash';
import BScroll from "better-scroll";
import ScrollContainer from "./style";
interface ScrollProps {
  direction?: "vertical" | "horizental";
  click?: boolean;
  refresh?: boolean;
  pullUpLoading?: boolean;
  pullDownLoading?: boolean;
  bounceTop?: boolean;
  bounceBottom?: boolean;
  onScroll: Function;
  pullUp?: () => void;
  pullDown?: () => void;
  children: ReactNode;
  className: string;
}

interface PosData {
  x: number;
  y: number;
}

const Scroll = forwardRef((props: ScrollProps, ref) => {
  const [bScroll, setBScroll] = useState<BScroll | null>()

  const scrollContaninerRef = useRef<HTMLDivElement | null>(null)
  const {
    direction = "vertical",
    click = true,
    refresh = true,
    pullUpLoading = false,
    pullDownLoading = false,
    bounceTop = true,
    bounceBottom = true,
  } = props;
  const { pullUp = noop, pullDown = noop, onScroll } = props;

  useEffect(() => {
    const scroll = new BScroll(scrollContaninerRef.current!, {
      scrollX: direction === 'horizental',
      scrollY: direction === 'vertical',
      probeType: 3,
      click: click,
      bounce: {
        top: bounceTop,
        bottom: bounceBottom
      }
    })
    setBScroll(scroll)
    return () => {
      setBScroll(null)
    }
    // eslint-disable-next-line
  }, [])

  // 上拉刷新
  useEffect(() => {
    if (!bScroll || !pullUp) return;
    const handlePullUp = () => {
      // 判断是否滑动到了底部
      if (bScroll.y <= bScroll.maxScrollY + 100) {
        pullUp()
      }
    }
    bScroll.on('scrollEnd', handlePullUp)
    return () => {
      bScroll.off('scrollEnd')
    }
  }, [pullUp, bScroll])

  // 下拉加载
  useEffect(() => {
    if (!bScroll || !pullDown) return;
    const handlePullDown = () => {
      // 判断是否滑动到了底部
      if (bScroll.y > 50) {
        pullDown()
      }
    }
    bScroll.on('touchEnd', handlePullDown)
    return () => {
      bScroll.off('touchEnd')
    }
  }, [pullDown, bScroll])

  // 每次重新渲染都要刷新实例，防止无法滑动
  useEffect(() => {
    if (refresh && bScroll) {
      bScroll.refresh();
    }
  });

  useImperativeHandle(
    ref,
    () => ({
      refresh() {
        if (bScroll) {
          bScroll.refresh()
          bScroll.scrollTo(0, 0)
        }
      },
      getBScroll() {
        if (bScroll) {
          return bScroll
        }
      }
    })
  )


  return <ScrollContainer ref={scrollContaninerRef}>
    {props.children}
  </ScrollContainer>
})

export default Scroll