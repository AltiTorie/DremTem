import Moment from 'moment';
import React, {useState} from 'react';
import {Dimensions, View} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {Line, Rect, Svg, Text as TextSVG} from 'react-native-svg';

const LinedChart = props => {
  let limited = [];
  let data_labels = props.labels;
  let datasets_arr = [];
  for (let l = 0; l < props.data.length; l++) {
    let c = getRandomColor();
    datasets_arr.push({
      data: props.data[l],
      strokeWidth: 2,
      color: () => c,
    });
  }
  if (data_labels.length > 5) {
    let len = data_labels.length - 1;
    limited = [
      data_labels[0],
      data_labels[Math.floor(len * (1 / 3))],
      data_labels[Math.floor(len * (1 / 2))],
      data_labels[Math.floor(len * (2 / 3))],
      data_labels[len - 1],
    ];
  } else {
    limited = data_labels;
  }

  return (
    <MyBezierLineChart data={datasets_arr} labels={limited}></MyBezierLineChart>
  );
};

function getRandomColor(opacity = 10) {
  return (
    'rgb(' +
    Math.floor(Math.random() * 256) +
    ',' +
    Math.floor(Math.random() * 256) +
    ',' +
    Math.floor(Math.random() * 256) +
    ',' +
    opacity +
    ')'
  );
}

const MyBezierLineChart = props => {
  let [tootlipHelper, setTooltipHelper] = useState({
    x: 0,
    y: 0,
    visible: false,
    value: 0,
    color: '255,255,255',
  });

  return (
    <LineChart
      data={{
        datasets: props.data,
        labels: props.labels,
      }}
      width={Dimensions.get('window').width - 16} // from react-native
      height={Dimensions.get('window').height / 2}
      yAxisLabel={'C'}
      chartConfig={{
        backgroundColor: '#E5D0C1',
        backgroundGradientFrom: '#FAFDF5',
        backgroundGradientTo: '#FAE0F5',
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
        strokeWidth: 2,
      }}
      bezier
      formatXLabel={value =>
        props.labels.length > 2
          ? props.labels.includes(value)
            ? Moment(value, 'YYYY.MM.DD - HH:mm:ss').format('HH:mm:ss')
            : ''
          : value
      }
      style={{paddingRight: 60, paddingLeft: 60, margin: 50}}
      verticalLabelRotation={90}
      withInnerLines={false}
      decorator={() => {
        return tootlipHelper.visible ? (
          <>
            <View>
              <Svg>
                <Rect
                  x={tootlipHelper.x - 15}
                  y={tootlipHelper.y - 40}
                  width="40"
                  height="30"
                  fill="black"
                />
                <TextSVG
                  x={tootlipHelper.x + 5}
                  y={tootlipHelper.y - 20}
                  fill="white"
                  fontSize="16"
                  fontWeight="bold"
                  textAnchor="middle">
                  {tootlipHelper.value}
                </TextSVG>
              </Svg>
              <Line
                x1={tootlipHelper.x}
                y1={tootlipHelper.y}
                x2={tootlipHelper.x}
                y2={Dimensions.get('window').height / 2 - 80}
                stroke={tootlipHelper.color}
                strokeWidth="2"
                strokeDasharray="5, 5"
              />
              <Line
                x1={65}
                y1={tootlipHelper.y}
                x2={tootlipHelper.x}
                y2={tootlipHelper.y}
                stroke={tootlipHelper.color}
                strokeWidth="2"
                strokeDasharray="5, 5"
              />
            </View>
          </>
        ) : null;
      }}
      onDataPointClick={
        data => {
          // check if we have clicked on the same point again
          let isSamePoint =
            tootlipHelper.x === data.x && tootlipHelper.y === data.y;

          // if clicked on the same point again toggle visibility
          // else,render tooltip to new position and update its value
          isSamePoint
            ? setTooltipHelper(previousState => {
                return {
                  ...previousState,
                  value: data.value,
                  visible: !previousState.visible,
                };
              })
            : setTooltipHelper({
                x: data.x,
                value: data.value,
                y: data.y,
                visible: true,
                color: data.getColor(50),
              });
        } // end function
      }
    />
  );
};
export default LinedChart;
