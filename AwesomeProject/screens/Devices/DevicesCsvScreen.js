import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import AppButton from '../../components/Button_main';
import DrawerHeader from '../../components/Drawer_header';
import RNFetchBlob from 'rn-fetch-blob';
const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data.push({deviceID: `blank-${numberOfElementsLastRow}`, empty: true});
    numberOfElementsLastRow++;
  }

  return data;
};

const numColumns = 2;

export default class DevicesCsv extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      props: props,
      listed: [],
      data: {device: '', sensor: '', labels: [], data: []},
    };
  }
  renderItem = ({item, index}) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      <View style={styles.item}>
        <TouchableOpacity
          onPress={() => {
            RNFetchBlob.fs
              .readFile(item.path)
              .then(v => {
                let splitted = v
                  .split(/(\s+)/)
                  .map(s => s.split(','))
                  .filter(f => f.length > 2);
                let tss = [];
                let readings = [];
                splitted.slice(1).forEach(element => {
                  tss.push(element[0]);
                  readings.push(element[3]);
                });
                let data = {
                  device: splitted[1][1],
                  sensor: splitted[1][2],
                  labels: tss,
                  data: readings,
                };
                this.props.navigation.navigate('OfflineDataDashboardScreen', {
                  data: data,
                });
              })
              .catch(err => console.log(err));
          }}>
          <Text style={styles.itemText}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  refresh() {
    console.log('refresh');
    this.render();
  }

  _async_render = () => {
    const csvsPath = `${RNFetchBlob.fs.dirs.DownloadDir}/dremtemfiles`;
    RNFetchBlob.fs
      .ls(csvsPath)
      .then(v =>
        this.setState({
          listed: v.map(function (e) {
            return {name: e, path: csvsPath + '/' + e};
          }),
        }),
      )
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this._async_render();
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={formatData(this.state.listed, numColumns)}
          style={styles.container}
          renderItem={this.renderItem}
          numColumns={numColumns}
        />
        <View style={styles.bottom}>
          <AppButton
            title="SYNC FILES"
            onPress={() => console.log('SYNC clicked')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logoContainer: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  logoText: {
    fontSize: 20,
  },
  text: {},
  container: {
    flex: 1,
    marginVertical: 0,
  },
  item: {
    backgroundColor: '#4a67a1',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 8,
    height: Dimensions.get('window').width / (1.5 * numColumns), // approximate a square
  },
  itemInvisible: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  itemText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
});
