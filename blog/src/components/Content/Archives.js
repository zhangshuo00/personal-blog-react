import React ,{Component} from 'react'
import { ClockCircleOutlined } from '@ant-design/icons';
import { Timeline } from 'antd';
import '../../css/archives.css'

export default class Archives extends Component{
    render (){
        return (
            <div className="archives">
                <Timeline>
                    <Timeline.Item style={{paddingBottom:'50px'}}><span style={{fontWeight:'600',fontSize:'15px'}}>Nice! 0 posts in total. Keep on posting.</span></Timeline.Item>
                    <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />} color="red"><div className="archives-year">2019...</div></Timeline.Item>
                </Timeline>
            </div>
        );
    }
}