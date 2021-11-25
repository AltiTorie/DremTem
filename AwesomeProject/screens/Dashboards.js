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
import colors from '../components/Charts/DashboardForm';
import AppButton from '../components/Button_main';
import DrawerHeader from '../components/Drawer_header';
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
        {key: 4, name: 'Default', screen_name: 'DefaultDashboard'},
      ],
      numOfColumns: 2,
      modalOpen: false,
    };
  }
  _navigate_to(item) {
    // console.log(props.navigation);
    this.state.props.navigation.navigate(item.screen_name, {
      item: item,
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
            this._navigate_to(item);
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
            <DashboardForm additionalFunction={this._addDashboard} />

            <View style={{backgroundColor: colors.background}}>
              <AppButton title="close" onPress={() => this._hide_modal()} />
            </View>
          </Modal>
          <View style={{flex: 1}}>
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
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: '100%',
    height: '100%',
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
