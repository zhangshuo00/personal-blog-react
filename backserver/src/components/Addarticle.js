import React, { Component } from 'react'
import { List, Form, Input} from 'antd'
import Editor from 'for-editor'

export default class Addarticle extends Component {
    constructor(props){
        super(props);
        this.state = {
            value:''
        }
    }
    handleChange = (value)=>{
        this.setState({
          value:value
        });
        console.log(value)
    }
    render() {
        return (
            <div>
                <List>
                    <List.Item>
                        <Form>
                            <Form.Item label="标题"><Input/></Form.Item>
                        </Form>
                    </List.Item>
                    <List.Item></List.Item>
                </List>
                <Editor toolbar={{h1: true,h2: true,h3: true,h4: true,img: true,link: true,code: true,preview: true,expand: true,undo: true,redo: true,save: true,subfield: true}} value={this.state.value} onChange={this.handleChange} />
            </div>
        )
    }
}
