import styled from "styled-components";
import {Link} from "react-router-dom";
import React from "react";
const FootBar =styled.nav`
  width: 100%;
  border: 1px solid pink;
  >ul{
    width: 100%;
    display: flex;
    >li{
      width: 33.3333%;
      text-align: center;
      padding: 16px;
    }
  }
`
const Nav = ()=>{
    const NavList = [
        {
            name:"标签",
            path:'/notes',
            iconClass:'iconfont icon-biaoqian'
        },
        {
            name:"记一笔",
            path:'/statistics',
            iconClass:'iconfont icon-tubiaozhizuo-'
        },
        {
            name:"统计",
            path:'/label',
            iconClass:'iconfont icon-tongji'
        },
    ]
    return (
        <FootBar>
            <ul>
                {
                    NavList.map((item,index) =>
                        <li key={index}>
                            <Link to={item.path}>
                                <span className={item.iconClass}></span>
                                <br/>
                                {item.name}
                            </Link>
                        </li>
                    )
                }
            </ul>
        </FootBar>
    )
}
export default Nav