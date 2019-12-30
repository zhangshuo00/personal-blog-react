import React, { Component } from 'react'
import { List, Button, Input, Select, Table } from 'antd'

const {Option} = Select;
const data = [
    {
        key:'1',
        title:'React笔记（一）',
        class:'React',
        views:'12',
        pubTime:'2019-10-01 08:00:00',
        modTime:'2019-12-30 12:00:00'
    },
    {
        key:'2',
        title:'React笔记（二）',
        class:'React',
        views:'12',
        pubTime:'2019-10-21 08:00:00',
        modTime:'2019-12-30 12:00:00'
    }
]

export default class Managearticle extends Component {
    render() {
        const columns = [
            {
                
            }
        ]
        return (
            <div>
                <List style={{paddingLeft:'8%',marginTop:'2%'}}>
                    <List.Item>
                        <span>关键字：</span><Input placeholder='请输入文章关键字' style={{width:'200px'}}/>
                        <span style={{marginLeft:'80px'}}>分类：</span>
                        <Select style={{width:'120px'}}>
                            <Option value="JavaScript">JavaScript</Option>
                            <Option value="HTML">HTML</Option>
                            <Option value="CSS3">CSS3</Option>
                            <Option value="Reac">React</Option>
                            <Option value="算法">算法</Option>
                        </Select>
                        <Button style={{marginLeft:'40px'}} type="primary" shape="round">搜索</Button>
                    </List.Item>
                </List>

            </div>
        )
    }
}
