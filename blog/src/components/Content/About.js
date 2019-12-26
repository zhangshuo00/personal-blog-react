import React, { Component } from 'react'
import { Avatar, Divider } from 'antd'


export default class About extends Component {
    render() {
        return (
            <div>
                <Avatar style={{marginLeft:'20px'}} src={require("../../images/xiaomeng.jpg")} />
                <span style={{paddingLeft:'10px'}}>这个人很懒，什么也没有写...</span>
                <Divider orientation="left">博客简述</Divider>
                <p></p>
            </div>
        )
    }
}
