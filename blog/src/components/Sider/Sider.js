import React, { Component } from 'react'
import { Collapse, Icon } from 'antd'
import '../../css/sider.css'

const { Panel } = Collapse;
const customPanelStyle = {
    background: '#f7f7f7',
    borderRadius: 4,
    marginBottom: 10,
    border: 0,
    overflow: 'hidden',
};

export default class Sider extends Component {
    render() {
        return (
            <div className="sider">
                <img className="sider-avatar" src="https://i.loli.net/2019/12/24/QOIfT1KpPLJvzBi.jpg"/>
                <h3 className="sider-uname">不爱吃萝卜的兔子</h3>
                <p>这个人很懒，什么也没有写...</p>
                <ul className="sider-pages">
                    <li>
                        <Icon type="github"/>
                        <a style={{paddingLeft:'5px',color:'rgb(0,0,0,0.65)'}} href="https://github.com/zhangshuo00">github</a>
                    </li>
                    <li style={{paddingLeft:'10px'}}>
                        <Icon type="google" />
                        <a style={{paddingLeft:'5px',color:'rgb(0,0,0,0.65)'}} href="easonzhang5002@gmail.com">Gmail</a>
                    </li>
                </ul>

                <Collapse
                    style={{marginTop:'25px'}}
                    bordered={false}
                    defaultActiveKey={['1']}
                    expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
                >
                    <Panel header="热门文章" key="1" style={customPanelStyle}>
                        <ul>
                            <li><a>koa-react-ssr学习</a></li>
                            <li><a>实现简易的 VUE-MVVM</a></li>
                        </ul>
                    </Panel>
                    <Panel header="标签" key="2" style={customPanelStyle}></Panel>
                </Collapse>
                
                
            </div>
        )
    }
}
