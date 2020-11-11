import React from 'react';
import PropTypes from 'prop-types';
import echarts from 'echarts';

class EchartRender extends React.Component {
  constructor(props) {
    super(props);
    // 准备Echarts的DOM容器,创建refs
    this.myRef = React.createRef();
  }

  /**
   * 初始化Echarts实例.
   * 一般用document.getElementById("id");
   * 此处用current来访问DOM节点
   */
  componentDidMount() {
    this.myEchart = echarts.init(this.myRef.current);
    this.renderData();
  }

  shouldComponentUpdate() {
    this.renderData();
    return true;
  }

  renderData() {
    // 指定图标的配置项和数据
    /**
     * var option = {
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      legend: {
        data: ['销量']
      },
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    };
    * 为了重复利用此代码,将配置项和数据放到组件中.
     */
    // 使用指定好的配置项和数据显示图表
    const { options } = this.props;
    this.myEchart.setOption(options);
  }

  render() {
    let { width, height } = this.props;
    width = width || 100;
    height = height || 100;
    return (
      <div
        style={{ width: `${width}%`, height: `${height}%` }}
        ref={this.myRef}
      />
    );
  }
}
EchartRender.propTypes = {
  // className: PropTypes.string,
  options: PropTypes.object,
  height: PropTypes.number,
  width: PropTypes.number
};
export default EchartRender;
