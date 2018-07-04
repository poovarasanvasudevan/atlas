import React, {Component} from "react"
import Icon from '@atlaskit/icon'
const AreaChartT = () => (
  <svg width="1em" height="1em" viewBox="0 0 2048 1792"  className="normalIcon">
    <path d="M2048 1536v128H0V128h128v1408h1920zM1664 512l256 896H256V832l448-576 576 576z" />
  </svg>
);
class AreaChart extends Component<{}, {}> {
  render() {
    return <Icon glyph={AreaChartT} label="Custom icon" size="medium"/>
  }
}
export default AreaChart;
