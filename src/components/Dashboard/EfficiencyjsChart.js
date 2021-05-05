import React from 'react';
import { JSCharting } from 'jscharting-react';
import './efficiencyChart.css';

const config = {
    debug: false,
    type: 'gauge ',
    legend_visible: false,
    chartArea_boxVisible: false,
     defaultSeries_palette: 'default',
     scaleShowLabels:false,
     tabIndex: "auto",
      
  annotations: [
    {
      position: "top",
      label_text: "Average"
    },
    {
      position: "left",
      label_text: "Low"
    },
    {
      position: "right",
      label_text: "High"
    }
  ],
  xAxis: { 
    /*Used to position marker on top of axis line.*/
    scale: { range: [0, 1], invert: true } 		
  },
  palette: { 
    pointValue: '%yValue', 
    ranges: [ 
        { value: 1, color: '#A02027' }, 
        { value: 50, color: '#f8dbbe' }, 
        { value: 100, color: '#bfdbcc' }, 
        { value: 150, color: '#77E6B4' }
      ] 
  }, 
  yAxis: { 
    defaultTick: {
	label_style: { visibility: 'hidden' }, 
	padding: 5, enabled: false 
	}, 
    customTicks: [1, 50, 100, 150], 
    line: { 
      width: 8, 
      breaks_gap: 0.04, 
      color: 'smartPalette'
    }, 
    scale: { range: [0, 150] } 

	
  }, 
  defaultSeries: { 
    opacity: 1,
	
    shape: { 
      label: { 
        align: 'center', 
        verticalAlign: 'middle'
      } 
    } 
  }, 
  series: [ 
    { 
      type: 'marker', 
      name: 'Score', 
	  height: 300,
      shape_label: { 	   
        text: 
          '<br/><span class="midtxtchart"><span class="urscrore">Your Score</span><br/><span class="digitcenter">56</span><br/><span class="scorepointright raised up">%</span><br/></span>'
      }, 	 
      defaultPoint: { 
        tooltip: '%yValue', 
        marker: { 
          outline: { 
            width: 8, 
            color: '#A02027'
          }, 
          fill: 'white', 
          type: 'circle', 
          visible: true, 
          size: 23 
        } 
      }, 
	  /* circle arrow scale */
      points: [[1, 39]] 
    } 
  ]
};

const divStyle = {
	maxWidth: '700px',
	height: '230px',
	margin: '0px auto'
}; 

export default class SimpleChartComponent extends React.Component {
    render() {
        return (
            <div style={divStyle} className="efficencyChartSize"><JSCharting options={config} /></div>
        );
    }
}