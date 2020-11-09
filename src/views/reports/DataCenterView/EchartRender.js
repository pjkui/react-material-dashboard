import React from 'react';
import PropTypes from 'prop-types';
import echarts from 'echarts';

export default class EchartRender extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    this.myChart = echarts.init(this.myRef.current);
    this.renderData();
  }

  // eslint-disable-next-line camelcase

  shouldComponentUpdate() {
    this.renderData();
    return true;
  }

  renderData() {
    // 指定图表的配置项和数据
    // 使用刚指定的配置项和数据显示图表。
    const { options } = this.props;
    this.myChart.setOption(options);
  }

  render() {
    let { width, height } = this.props;
    width = width || 100;
    height = height || 100;
    return (
      <div
        style={{
          width: `${width}%`,
          height: `${height}%`
        }}
        ref={this.myRef}
      />
    );
  }
}
EchartRender.propTypes = {
  className: PropTypes.string,
  options: PropTypes.object,
  height: PropTypes.number,
  width: PropTypes.number
};
