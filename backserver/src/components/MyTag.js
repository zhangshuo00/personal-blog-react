import React, { Component } from 'react'
import { Tag } from 'antd'

const { CheckableTag } = Tag;

export default class MyTag extends Component {
    constructor(props){
        super(props);
        this.state = {
            checked : false
        }
    }
    handleChange = (checked)=>{
        this.setState({
            checked
        })
        console.log(this.props.children)
    }
    render() {
        return (
            <div>
                <CheckableTag {...this.props} checked={this.state.checked} onChange={this.handleChange} />
            </div>
        )
    }
}
