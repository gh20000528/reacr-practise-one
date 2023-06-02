import React from 'react'
import ChartBar from './ChartBar'
import './Chart.css'
const Chart = (props) => {
  const dataPonitValue = props.dataPoints.map( dataPoints => dataPoints.value)
  const totleMaximum = Math.max(...dataPonitValue)
  console.log(totleMaximum);
  return (
    <div className='chart'>
      { props.dataPoints.map(dataPoints => (
      <ChartBar 
        key={dataPoints.label}
        value={ dataPoints.value }
        maxValue={totleMaximum}
        label={ dataPoints.label }
      ></ChartBar>
      ))}
    </div>
  )
}

export default Chart