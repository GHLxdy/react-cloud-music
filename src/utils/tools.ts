export const getCount = (count: number): String => {
  if (count < 0) return '';
  if (count < 10000) {
    return count + ''
  } else if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 10000) / 10 + "万"
  } else {
    return Math.floor(count / 100000000) / 10 + "亿"
  }
}