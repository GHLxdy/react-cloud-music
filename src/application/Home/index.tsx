import { memo } from 'react'
import { renderRoutes } from 'react-router-config'
import { NavLink } from 'react-router-dom'
import { Top, Tab, TabItem } from './style'

function Home(props: any) {
  const { route } = props
  return (<div>
    <Top>
      <span className="iconfont menu">&#xe65c;</span>
      <span className="title">WebApp</span>
      <span className="iconfont search">&#xe65c;</span>
    </Top>
    <Tab>
      <NavLink to="/recommend" activeClassName="selected"><TabItem><span>推荐</span></TabItem></NavLink>
      <NavLink to="/singers" activeClassName="selected"><TabItem><span>歌手</span></TabItem></NavLink>
      <NavLink to="/rank" activeClassName="selected"><TabItem><span>排行榜</span></TabItem></NavLink>
    </Tab>
    {renderRoutes(route.routes)}
  </div>)
}

export default memo(Home)