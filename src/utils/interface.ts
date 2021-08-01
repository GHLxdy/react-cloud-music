// banner 图
export interface IBannerListItem {
  imageUrl: string;
}

export interface IRecommendListItem {
  id: string;
  picUrl: string,
  name: string,
  playCount: number;
}

export type IBannerList = IBannerListItem[];

export type IRecommendList = IRecommendListItem[];