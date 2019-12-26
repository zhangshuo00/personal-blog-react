import React, { Component } from 'react'
import { Avatar, Divider, Icon } from 'antd'
import '../../css/about.css'


export default class About extends Component {
    render() {
        return (
            <div className="about">
                <Avatar style={{marginLeft:'20px'}} src={require("../../images/xiaomeng.jpg")} />
                <span style={{paddingLeft:'10px'}}>这个人很懒，什么也没有写...</span>
                <Divider orientation="left">博客简述</Divider>
                <p>本博客使用的技术栈为 react-antd-express-mysql</p>
                <p>源码地址为 <a href="https://github.com/zhangshuo00/personal-blog-react/tree/master/blog">github</a>，仅供学习参考，不得做商业用途，未经允许不得转载！</p>
                <Divider orientation="left">关于我</Divider>
                <ul>
                    <li>姓名：张朔</li>
                    <li>学历专业：本科 软件工程</li>
                    <li>联系方式：<Icon style={{marginRight:'5px'}} type="mail"/><a href="mailto:443494891@qq.com">443494891@qq.com</a></li>
                    <li>现居地：石家庄</li>
                    <li>其他博客地址：<a href="https://zhangshuo00.github.io/">hexo博客</a><a style={{paddingLeft:'10px'}} href="https://juejin.im/user/5dbd775de51d456e4871ae6f">掘金主页</a></li>
                </ul>
            </div>
        )
    }
}
