import React, {Component} from 'react';
import {
  Dimensions,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AppButton from '../components/Button';
import DashboardForm from '../components/Charts/DashboardForm';

export default class DashboardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      props: props,
      buttons: [
        {key: 1, name: 'Moisture', screen_name: 'MoistureDashboard'},
        {key: 2, name: 'Temperature', screen_name: 'TemperatureDashboard'},
        {key: 3, name: 'Light', screen_name: 'LightDashboard'},
      ],
      numOfColumns: 2,
      modalOpen: false,
    };
  }
  _navigate_to(screen_name, props) {
    let [pred_labels, pred_data] = this._predefined_data();
    props.navigation.navigate(screen_name, {
      labels: pred_labels,
      data: pred_data,
    });
  }

  _addDashboard = dashboard => {
    dashboard.key = Math.random().toString();
    this.setState({
      buttons: [...this.state.buttons, dashboard],
    });
    this._hide_modal();
  };

  _show_modal() {
    this.setState({
      modalOpen: true,
    });
  }

  _hide_modal() {
    this.setState({
      modalOpen: false,
    });
  }

  _formatData(data, numColumns) {
    data = data.filter(d => d.empty !== true);
    if (!data[0]._addButton) {
      let item = {key: 0, _addButton: true};
      data.splice(0, 0, item);
    }
    const numberOfFullRows = Math.floor(data.length / numColumns);
    let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
    while (
      numberOfElementsLastRow !== numColumns &&
      numberOfElementsLastRow !== 0
    ) {
      data.push({key: numberOfElementsLastRow, empty: true});
      numberOfElementsLastRow++;
    }

    return data;
  }

  renderItem = ({item, index}) => {
    if (item.empty === true) {
      return (
        <View
          style={{
            ...styles.item,
            ...styles.itemInvisible,
            height:
              Dimensions.get('window').width / (1.5 * this.state.numOfColumns),
          }}
        />
      );
    }
    if (item._addButton === true) {
      return (
        <View
          style={{
            ...styles.item,
            height:
              Dimensions.get('window').width / (1.5 * this.state.numOfColumns),
          }}>
          <TouchableOpacity key={'+'} onPress={() => this._show_modal()}>
            <Text
              style={{
                ...styles.itemText,
                fontSize: 80,
              }}>
              +
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <View
        style={{
          ...styles.item,
          height:
            Dimensions.get('window').width / (1.5 * this.state.numOfColumns),
        }}>
        <TouchableOpacity
          key={item.name}
          onPress={() => {
            this._navigate_to(item.screen_name, this.state.props);
          }}>
          <Text style={styles.itemText}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.main}>
        <View style={styles.playground}>
          <Modal visible={this.state.modalOpen} animationType="slide">
            {/* <DashboardForm additionalFunction={this._addDashboard} /> */}
            <DashboardForm additionalFunction={this._addDashboard} />

            <View>
              <AppButton title="close" onPress={() => this._hide_modal()} />
            </View>
          </Modal>

          <View style={{flex: 1, backgroundColor: 'white'}}>
            <FlatList
              data={this._formatData(
                this.state.buttons,
                this.state.numOfColumns,
              )}
              style={styles.container}
              renderItem={this.renderItem}
              numColumns={this.state.numOfColumns}
            />
          </View>
        </View>
      </View>
    );
  }

  _predefined_data() {
    // TODO: these should be downloadable from DB
    let labels = [
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
    ];
    // TODO: this must be downloadable from DB
    let data = [
      [
        165, 186, 15, 133, 91, 45, 16, 56, 130, 149, 179, 136, 97, 167, 164,
        210, 63, 108, 40, 186, 102, 130, 159, 175, 223, 207, 154, 203, 101, 140,
        98, 30, 219, 193, 140, 64, 146, 6, 6, 150, 155, 151, 144, 175, 232, 237,
        185, 201, 84, 204,
      ],
      [10, 10, 28, 133, 50, 45, 99, 16, 130, 75, 200, 175, 10],
      [
        51, 24, 152, 129, 31, 156, 128, 47, 169, 41, 75, 116, 0, 120, 50, 53,
        169, 16, 69, 152, 195, 114, 57, 56, 157, 40, 187, 126, 163, 58, 118, 42,
        95, 82, 56, 119, 119, 39, 173, 57, 78, 0, 58, 104, 9, 133, 157, 19, 151,
        115,
      ],
    ];
    return [labels, data];
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
    // height: Dimensions.get('window').width / (1.5 * numColumns), // approximate a square
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
  playground: {
    padding: 20,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
});
