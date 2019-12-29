import React, { Component } from 'react'
import { Chart,Geom,Axis,Tooltip, Coord, Legend } from "bizcharts"

export default class Data extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render() {
        const data = [
            {month:'1',value:10},
            {month:'2',value:12},
            {month:'3',value:12},
            {month:'4',value:12},
            {month:'5',value:13},
            {month:'6',value:16},
            {month:'7',value:17},
            {month:'8',value:19},
            {month:'9',value:19}
        ];
        const cols = {
            value:{
                min : 0
            },
            month:{
                range:[0,1]
            }
        };
        const data1 = [
            {item:'HTML',count:3,percent:0.125},
            {item:'JS',count:10,percent:0.4},
            {item:'React',count:4,percent:0.17},
            {item:'CSS3',count:5,percent:0.2},
            {item:'webpack',count:2,percent:0.125}
        ];
        const cols1 = {
            percent: {
              formatter: val => (val = `${val * 100}%`),
            },
        };
        return (
            <div>
                <Chart width={200} height={400} data={data} scale={cols} forceFit>
                    <Axis name="month" />
                    <Axis name="value" />
                    <Tooltip
                        crosshairs={{
                            type:"y"
                        }}
                    />
                    <Geom type="line" position="month*value" size={2}/>
                    <Geom
                        type="point"
                        position="month*value"
                        size={4}
                        shape={"circle"}
                        style={{
                            stroke:"#fff",
                            lineWidth:1
                        }}
                    />
                </Chart>
                <Chart width={100} height={400} data={data1} scale={cols1} padding="auto" forceFit
                    onGetG2Instance={(chart)=>{
                        setTimeout(() => {
                            const geom = chart.get('geoms')[0]
                            console.log(geom)
                            const items = geom.get('data')
                            console.log(JSON.stringify(items))
                            geom.setSelected(items[1])
                        }, 2000);
                    }}
                    onPlotClick={(ev) => {
                        console.log(ev);
                    }}
                >
                    <Coord type="theta" radius={0.65} />
                    <Axis name="percent" />
                    <Legend position="right" offsetY={-window.innerHeight / 2 + 120} offsetX={-100} />
                    <Tooltip
                        showTitle={false}
                        itemTpl='<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
                    />
                    <Geom
                        type="intervalStack"
                        position="percent"
                        color="item"
                        tooltip={[
                        'item*percent',
                        (item, percent) => {
                            percent = `${percent * 100}%`;
                            return {
                            name: item,
                            value: percent,
                            };
                        },
                        ]}
                        style={{
                        lineWidth: 1,
                        stroke: '#fff',
                        }}
                    />
                </Chart>
            </div>
        )
    }
}
