import React from 'react';
import PropTypes from 'prop-types';
import echarts from 'echarts';

export default class FaultLevelPieChart extends React.Component {
  componentDidMount() {
    this.myChart = echarts.init(document.getElementById('test-e1'));
    this.renderData();
  }

  renderData() {
    // 指定图表的配置项和数据
    // 使用刚指定的配置项和数据显示图表。
    this.myChart.setOption(this.props.options);
  }

  render() {
    return (
      <div
        style={{
          width: `${this.props.width}px`,
          height: `${this.props.height}px`
        }}
        id="test-e1"
      />
    );
  }
}
FaultLevelPieChart.propTypes = {
  className: PropTypes.string,
  options: PropTypes.object,
  height: PropTypes.number,
  width: PropTypes.number
};
