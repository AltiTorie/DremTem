import React, {useEffect, useRef, useState} from 'react';
// import * as React from 'react'
import {
  PanResponder,
  Dimensions,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import {AreaChart, XAxis, YAxis} from 'react-native-svg-charts';
import {
  Circle,
  Defs,
  G,
  Line,
  LinearGradient,
  Path,
  Rect,
  Stop,
  Text as SvgText,
} from 'react-native-svg';
import * as shape from 'd3-shape';
export default InteractiveChart;

function InteractiveChart() {
  const apx = (size = 0) => {
    let width = Dimensions.get('window').width;
    return (width / 750) * size;
  };

  const [dateList, setDateList] = useState([
    '2021.10.25 - 00:03:39',
    '2021.10.25 - 00:03:40',
    '2021.10.25 - 00:03:41',
    '2021.10.25 - 00:03:42',
    '2021.10.25 - 00:03:43',
    '2021.10.25 - 00:03:44',
    '2021.10.25 - 00:03:45',
    '2021.10.25 - 00:03:46',
    '2021.10.25 - 00:03:47',
    '2021.10.25 - 00:03:48',
    '2021.10.25 - 00:03:49',
    '2021.10.25 - 00:03:50',
    '2021.10.25 - 00:03:51',
    '2021.10.25 - 00:03:52',
    '2021.10.25 - 00:03:53',
    '2021.10.25 - 00:03:54',
    '2021.10.25 - 00:03:55',
    '2021.10.25 - 00:03:57',
    '2021.10.25 - 00:03:58',
    '2021.10.25 - 00:03:59',
    '2021.10.25 - 00:04:00',
    '2021.10.25 - 00:04:01',
    '2021.10.25 - 00:04:02',
    '2021.10.25 - 00:04:03',
    '2021.10.25 - 00:04:04',
    '2021.10.25 - 00:04:05',
    '2021.10.25 - 00:04:06',
    '2021.10.25 - 00:04:07',
    '2021.10.25 - 00:04:08',
    '2021.10.25 - 00:04:09',
    '2021.10.25 - 00:04:10',
    '2021.10.25 - 00:04:11',
    '2021.10.25 - 00:04:12',
    '2021.10.25 - 00:04:13',
    '2021.10.25 - 00:04:14',
    '2021.10.25 - 00:04:15',
    '2021.10.25 - 00:04:16',
    '2021.10.25 - 00:04:17',
    '2021.10.25 - 00:04:18',
    '2021.10.25 - 00:04:19',
    '2021.10.25 - 00:04:20',
    '2021.10.25 - 00:04:21',
    '2021.10.25 - 00:04:22',
    '2021.10.25 - 00:04:23',
    '2021.10.25 - 00:04:24',
    '2021.10.25 - 00:04:25',
    '2021.10.25 - 00:04:26',
    '2021.10.25 - 00:04:27',
    '2021.10.25 - 00:04:28',
    '2021.10.25 - 00:04:29',
  ]);
  const [priceList, setPriceList] = useState([
    165, 186, 15, 133, 91, 45, 16, 56, 130, 149, 179, 136, 97, 167, 164, 210,
    63, 108, 40, 186, 102, 130, 159, 175, 223, 207, 154, 203, 101, 140, 98, 30,
    219, 193, 140, 64, 146, 6, 6, 150, 155, 151, 144, 175, 232, 237, 185, 201,
    84, 204,
  ]);
  const size = useRef(dateList.length);

  const [positionX, setPositionX] = useState(-1); // The currently selected X coordinate position

  const panResponder = useRef(
    PanResponder.create({
      // 要求成为响应者：
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      onPanResponderTerminationRequest: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        updatePosition(evt.nativeEvent.locationX);
        return true;
      },
      onPanResponderMove: (evt, gestureState) => {
        updatePosition(evt.nativeEvent.locationX);
        return true;
      },
      onPanResponderRelease: () => {
        setPositionX(-1);
      },
    }),
  );

  const updatePosition = x => {
    const YAxisWidth = apx(130);
    const x0 = apx(0); // x0 position
    const chartWidth = apx(750) - YAxisWidth - x0;
    const xN = x0 + chartWidth; //xN position
    const xDistance = chartWidth / size.current; // The width of each coordinate point
    if (x <= x0) {
      x = x0;
    }
    if (x >= xN) {
      x = xN;
    }

    // console.log((x - x0) )

    // The selected coordinate x :
    // (x - x0)/ xDistance = value
    let value = ((x - x0) / xDistance).toFixed(0);
    if (value >= size.current - 1) {
      value = size.current - 1; // Out of chart range, automatic correction
    }

    setPositionX(Number(value));
  };

  const CustomGrid = ({x, y, ticks}) => (
    <G>
      {
        // Horizontal grid
        ticks.map(tick => (
          <Line
            key={tick}
            x1="0%"
            x2="100%"
            y1={y(tick)}
            y2={y(tick)}
            stroke="#EEF3F6"
          />
        ))
      }
      {
        // Vertical grid
        priceList.map((_, index) => (
          <Line
            key={index.toString()}
            y1="0%"
            y2="100%"
            x1={x(index)}
            x2={x(index)}
            stroke="#EEF3F6"
          />
        ))
      }
    </G>
  );

  const CustomLine = ({line}) => (
    <Path
      key="line"
      d={line}
      stroke="#FEBE18"
      strokeWidth={apx(6)}
      fill="none"
    />
  );

  const CustomGradient = () => (
    <Defs key="gradient">
      <LinearGradient id="gradient" x1="0" y="0%" x2="0%" y2="100%">
        {/* <Stop offset="0%" stopColor="rgb(134, 65, 244)" /> */}
        {/* <Stop offset="100%" stopColor="rgb(66, 194, 244)" /> */}

        <Stop offset="0%" stopColor="#FEBE18" stopOpacity={0.25} />
        <Stop offset="100%" stopColor="#FEBE18" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  );

  const Tooltip = ({x, y, ticks}) => {
    if (positionX < 0) {
      return null;
    }

    const date = dateList[positionX];

    return (
      <G x={x(positionX)} key="tooltip">
        <G
          x={positionX > size.current / 2 ? -apx(300 + 10) : apx(10)}
          y={y(priceList[positionX]) - apx(10)}>
          <Rect
            y={-apx(24 + 24 + 20) / 2}
            rx={apx(12)} // borderRadius
            ry={apx(12)} // borderRadius
            width={apx(300)}
            height={apx(96)}
            stroke="rgba(254, 190, 24, 0.27)"
            fill="rgba(255, 255, 255, 0.8)"
          />

          <SvgText
            x={apx(20)}
            fill="#617485"
            opacity={0.65}
            fontSize={apx(24)}
            pointerEvents="none">
            {date}
          </SvgText>
          <SvgText
            x={apx(20)}
            y={apx(24 + 20)}
            fontSize={apx(24)}
            fontWeight="bold"
            fill="rgba(224, 188, 136, 1)">
            ${priceList[positionX]}
          </SvgText>
        </G>

        <G x={x}>
          <Line
            y1={0}
            y2={y(priceList[positionX])}
            stroke="#00FF00"
            strokeWidth={apx(4)}
            strokeDasharray={[6, 3]}
          />

          <Circle
            cy={y(priceList[positionX])}
            r={apx(20 / 2)}
            stroke="#fff"
            strokeWidth={apx(2)}
            fill="#FEBE18"
          />
        </G>
      </G>
    );
  };

  const verticalContentInset = {top: apx(40), bottom: apx(40)};

  return (
    <View
      style={{
        backgroundColor: '#fff',
        alignItems: 'stretch',
      }}>
      <View
        style={{
          flexDirection: 'row',
          width: apx(750),
          height: apx(570),
          alignSelf: 'stretch',
        }}>
        <View style={{flex: 1}} {...panResponder.current.panHandlers}>
          <AreaChart
            style={{flex: 1}}
            data={priceList}
            // curve={shape.curveNatural}
            curve={shape.curveMonotoneX}
            contentInset={{...verticalContentInset}}
            svg={{fill: 'url(#gradient)'}}>
            <CustomLine />
            <CustomGrid />
            <CustomGradient />
            <Tooltip />
          </AreaChart>
        </View>

        <YAxis
          style={{width: apx(130)}}
          data={priceList}
          contentInset={verticalContentInset}
          svg={{fontSize: apx(20), fill: '#617485'}}
        />
      </View>
      <XAxis
        style={{
          alignSelf: 'stretch',
          // marginTop: apx(57),
          width: apx(750),
          height: apx(60),
        }}
        numberOfTicks={7}
        data={priceList}
        formatLabel={(value, index) => dateList[value]}
        contentInset={{
          left: apx(36),
          right: apx(130),
        }}
        svg={{
          fontSize: apx(20),
          fill: '#617485',
          y: apx(20),
          // originY: 30,
        }}
      />
    </View>
  );
}
