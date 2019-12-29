import React, { Component } from 'react'
import { List, Form, Input, Tag, Button, Icon } from 'antd'
import Editor from 'for-editor'
import MyTag from './MyTag'

const { CheckableTag } = Tag;

export default class Addarticle extends Component {
    constructor(props){
        super(props);
        this.state = {
            value:'',
            tags:['React','JavaScript','HTML','CSS3','webpack','nodeJs','vue','算法'],
            selectedTags:[],
            title:''
        }
    }
    //编辑框的onChange函数
    handleChange = (value)=>{
        this.setState({
          value:value
        });
        console.log(value)
    }
    // 获取输入框的值
    inputValue = (e)=>{
        console.log(e.target.value)
        this.setState({
            title : e.target.value
        })
    }
    // 标签是否被选择
    tagsChange = (tag,checked)=>{
        const { selectedTags } = this.state;//当前被选择的标签
        const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
        this.setState({ 
            selectedTags: nextSelectedTags
        });
    }
    // 发起请求
    makeRequest = ()=>{
        const post = {
            title : this.state.title,
            tags : this.state.selectedTags,
            data : this.state.value
        }
        console.log(post)
        // fetch('')
    }
    render() {
        return (
            <div>
                <List style={{paddingLeft:'10%',marginTop:'2%'}}>
                    <List.Item>
                        <span>标题：</span><Input onChange={this.inputValue} style={{width:'400px'}}/>
                    </List.Item>
                    <List.Item style={{paddingBottom:'20px'}}>
                        <span>分类：</span>
                        {
                            this.state.tags.map((item)=>(
                                <CheckableTag key={item}
                                    checked={this.state.selectedTags.indexOf(item)>-1}
                                    onChange={checked=>this.tagsChange(item,checked)}
                                >{item}</CheckableTag>
                            ))
                        }
                    </List.Item>
                </List>
                <Editor 
                    toolbar={{h1: true,h2: true,h3: true,h4: true,img: true,link: true,code: true,preview: true,expand: true,undo: true,redo: true,save: true,subfield: true}}
                    value={this.state.value}
                    onChange={this.handleChange}
                    style={{marginLeft:'10%',width:'80%',height:'500px'}}
                />
                <Button onClick={this.makeRequest} style={{float:'right',marginRight:'13%',marginTop:'10px',marginBottom:'2%'}} type="primary" shape="round" icon="upload" size={"large"}>添加</Button>
            </div>
        )
    }
}
