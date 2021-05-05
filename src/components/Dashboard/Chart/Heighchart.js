import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  colors: ['#00C3FF', '#088856'],
  chart: {
    type: "line",
    style: {
      fontFamily: 'Opensans-regular'
    }
  },
  title: {
    text: "",
  },
  credits: {
    enabled: false
  },
  exporting: {
    enabled: false
  },
  subtitle: {
    text: ''
  },
  xAxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Quotes'
    }
  },
  series: [
    {
      name: 'Quotes Signed',
      data: [150, 180, 370, 850, 650, 670, 470, 430, 230, 180, 370, 850],
    },
    {
      name: 'Quotes Sent',
      data: [120, 80, 170, 150, 250, 250, 1000, 620, 210, 80, 170, 150],
    }
  ],
};
function Heighchart() {
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

export default Heighchart;
