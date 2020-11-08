import React from 'react';
import PropTypes from 'prop-types';
import echarts from 'echarts';

export default class FaultLevelPieChart extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    this.myChart = echarts.init(this.myRef.current);
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
          width: `${this.props.width}%`,
          height: `${this.props.height}%`
        }}
        ref={this.myRef}
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
