import { getCount } from "utils/tools";
import { List, ListItem, ListWrapper } from "./style";
import { RouteComponentProps } from 'react-router-dom';
import { IRecommendList } from "utils/interface";

interface RecommendListProps {
  recommendList: IRecommendList;
}


function RecommendList(props: RecommendListProps) {

  const { recommendList } = props
  return <ListWrapper>
    <h1 className="title">推荐歌单</h1>
    <List>
      {
        recommendList.map((item, index) => {
          return (
            <ListItem key={item.id}>
              <div className="img_wrapper">
                <div className="decorate"></div>
                <img src={item.picUrl + "?param=300x300"} alt="music" height="100%" width="100%" />
              </div>
              <div className="play_count">
                <i className="iconfont play"></i>
                <span className="count">{getCount(item.playCount)}</span>
              </div>
              <div className="desc">{item.name}</div>
            </ListItem>
          )
        })
      }
    </List>
  </ListWrapper>
}

export default RecommendList;