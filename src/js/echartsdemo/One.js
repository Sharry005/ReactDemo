import React, { Component, Fragment} from 'react';
import ReactEcharts from "echarts-for-react";
import echarts from 'echarts';
class One extends Component {
    constructor(props) {
        super(props);
        this.state = {
            one:{},
            two:{},
            three:{}
        }
    }
    componentDidMount() {
        this.oneGraph();
        this.twoGraph();
        this.threeGraph();
    }
    //心电折线图
    oneGraph() {
        const one = {
            backgroundColor: '#0A0A2D',//背景色设置
            xAxis: [{
                type: 'category',
                boundaryGap:false,//设置数据从y轴0位置开始，没有留白
                axisLine:{
                    lineStyle:{
                        type:'dashed',//横坐标设置为虚线
                        color:'#3475C9',//更改坐标轴颜色
                    }
                },
            }],
            yAxis: [{
                type: 'value',
                // splitNumber:2,//纵坐标刻度值显示几个
                minInterval:1,//刻度值的最小间隔是1
                splitLine: {//刻度线
                    lineStyle: {
                        show:true,//默认显示就是true
                        type:'dashed',
                        color:'#151D4F'
                    }
                },
                axisLine:{
                    show:false,//是否显示坐标轴轴线
                },
                axisLabel:{
                    formatter: () => {
                        return "";
                    }
                }
            }],
            grid:{
                x:30,
                y:10,
                y2:100,
                left: '3%',
                right: '4%',
                bottom: '10px',
                containLabel: true
            },
            series: [{
                data: [0,0, 1, 0, 0, 1, 0, 0],
                type: 'line',
                symbol:'none',//拐点设置
                lineStyle:{
                    color:'#961461'
                }
            }]
        }
        this.setState({
            one:one 
        })
    }
    twoGraph() {
        const two = {
            backgroundColor: '#0A0A2D',//背景色设置
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                x:30,
                y:10,
                y2:100,
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: ['严重', '重要', '一般', '轻微', '信息'],
                axisTick: {
                    alignWithLabel: true
                },
                axisLine:{
                    lineStyle:{
                        color:'#392F87',//更改坐标轴颜色
                        fontSize:12
                    }
                },
                axisLabel:{
                    show:true,//是否显示刻度标签
                    textStyle:{
                        color:'#9791BB',//更改坐标轴文字颜色
                        fontSize:8
                    }
                }
            }
            ,
            yAxis: {
                type: 'value',
                minInterval:1,//刻度值的最小间隔是1
                splitLine: {//刻度线
                    lineStyle: {
                        show:true,//默认显示就是true
                        type:'dashed',
                        color:'#151D4F'
                    }
                },
                axisLine:{
                    lineStyle:{
                        color:'#392F87'//更改坐标轴颜色
                    }
                },
                axisLabel:{
                    show:true,
                    textStyle:{
                        color:'#9791BB',//更改坐标轴文字颜色
                        fontSize:8
                    }
                }
            },
            series: [{
                name: '直接访问',
                type: 'bar',
                barWidth: '30%',
                data: [3, 2, 2, 2, 1],
                itemStyle:{
                    color:(params) => {
                        let colorArray = ['#FB1C87','#EB6100','#FFF100','#0D77EE','#08D6F5'];
                        return colorArray[params.dataIndex]
                    }
                }
            }]
        }
        this.setState({
            two:two
        })
    }
    threeGraph() {
        const three = {
            color:['#FB1C87','#EB6100','#FFF100','#0D77EE','#08D6F5'],//固定图例颜色
            backgroundColor: '#0A0A2D',//背景色设置
            legend: {
                icon:'rect',
                data: ['致命', '严重', '重要', '一般', '轻微'],
                textStyle:{
                    color:'#E8E8EA'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['12:00', '15:00', '18:00', '21:00', '00:00', '03:00', '06:00', '09:00'],
                axisLine:{
                    lineStyle:{
                        type:'dashed',//横坐标设置为虚线
                        color:'#3475C9',//更改坐标轴颜色
                    }
                },
                axisLabel:{
                    show:true,//是否显示刻度标签
                    textStyle:{
                        color:'#9791BB',//更改坐标轴文字颜色
                        fontSize:10
                    }
                }
            },
            yAxis: {
                type: 'value',
                minInterval:1,
                splitLine: {//刻度线
                    lineStyle: {
                        show:true,//默认显示就是true
                        type:'dashed',
                        color:'#151D4F'
                    }
                },
                axisLine:{
                    show:false,//是否显示纵坐标轴线
                },
                axisLabel:{
                    show:true,//是否显示刻度标签
                    textStyle:{
                        color:'#9791BB',//更改坐标轴文字颜色
                        fontSize:10
                    }
                }
            },
            series: [
                {
                    name: '致命',
                    type: 'line',
                    smooth: true,
                    symbol:'none',//拐点设置
                    data: [3, 10, 7, 4, 6, 1, 10, 3],
                    lineStyle:{
                        color:'#FB1C87'
                    }
                },
                {
                    name: '严重',
                    type: 'line',
                    smooth: true,
                    symbol:'none',//拐点设置
                    data: [10, 3, 6, 7, 4, 1, 8, 2],
                    lineStyle:{
                        color:'#EB6100'
                    }
                },
                {
                    name: '重要',
                    type: 'line',
                    smooth: true,
                    symbol:'none',//拐点设置
                    data: [5, 5, 10, 7, 3, 1, 9, 6],
                    lineStyle:{
                        color:'#FFF100'
                    }
                },
                {
                    name: '一般',
                    type: 'line',
                    smooth: true,
                    symbol:'none',//拐点设置
                    data: [9, 7, 9, 1, 5, 1, 9, 6],
                    lineStyle:{
                        color:'#0D77EE'
                    }
                },
                {
                    name: '轻微',
                    type: 'line',
                    smooth: true,
                    symbol:'none',//拐点设置
                    data: [3, 8, 6, 2, 7, 4, 8, 1],
                    lineStyle:{
                        color:'#08D6F5'
                    }
                }
            ]
        }
        this.setState({
            three:three
        })
    }
    render() {
        return (
            <Fragment>
                <div className="one" style={{width:'200px',height:'30px'}}>
                    <ReactEcharts
                        option={this.state.one}
                        notMerge={true}
                        lazyUpdate={true}
                        style={{height:'30px',width:'200px'}}
                        theme={"theme_name"}
                    />
                </div>
                <div className="two" style={{width:'200px',height:'110px',marginTop:'10px'}}>
                    <ReactEcharts
                        option={this.state.two}
                        notMerge={true}
                        lazyUpdate={true}
                        style={{height:'110px',width:'200px'}}
                        theme={"theme_name"}
                    />
                </div>
                <div className="three" style={{marginTop:'10px'}}>
                    <ReactEcharts
                        option={this.state.three}
                        notMerge={true}
                        lazyUpdate={true}
                        theme={"theme_name"}
                    />
                </div>
            </Fragment>
        )
    }
}
export default One;