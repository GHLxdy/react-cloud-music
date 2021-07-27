
import { css } from "styled-components";

// 扩大可点击区域
export const extendClick = () => css`
  position: relative;
  &::before{
    content: '';
    position: absolute;
    top:-10px;
    bottom: -10px;
    left: -10px;
    right: -10px;
  }
`
// 一行文字溢出部分用...代替
export const noWrap = () => css`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: normal;
`
