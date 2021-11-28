import React, {Component, setState, useState} from 'react';
import {
  Button,
  Dimensions,
  FlatList,
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {Avatar} from 'react-native-paper';
import SideNavbar from '../components/SideNavbar';
import AppButton from '../components/Button_main';
// import DashboardForm from '../components/Charts/DashboardForm';
import DashboardForm from '../components/DashboardForm';
import makeAnimated from 'react-select/animated';
import MultiSelect from 'react-select';
import HorizontalScroll from '../components/HorizontalScroll';
import DefaultDashboardComponent from './Dashboards/DefaultDashboardComponent';
export default class DashboardsWebScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      props: props,
      buttons: [
        {key: 1, name: 'Moisture', screen_name: 'DefaultDashboard'},
        {key: 2, name: 'Temperature', screen_name: 'DefaultDashboard'},
        {key: 3, name: 'Light', screen_name: 'DefaultDashboard'},
        {key: 4, name: 'Default', screen_name: 'DefaultDashboard'},
        {key: 5, name: 'Default', screen_name: 'DefaultDashboard'},
        {key: 6, name: 'Default', screen_name: 'DefaultDashboard'},
        {key: 7, name: 'Default', screen_name: 'DefaultDashboard'},
        {key: 8, name: 'Default', screen_name: 'DefaultDashboard'},
        {key: 9, name: 'Default', screen_name: 'DefaultDashboard'},
        {key: 10, name: 'Default', screen_name: 'DefaultDashboard'},
        {key: 11, name: 'Default', screen_name: 'DefaultDashboard'},
        {key: 12, name: 'Default', screen_name: 'DefaultDashboard'},
      ],
      selected: false,
      numOfColumns: 3,
      modalOpen: false,
    };
  }
  _navigate_to(item) {
    this.state.props.navigation.navigate(item.screen_name, {
      item: item,
    });
  }

  _addDashboard = dashboard => {
    dashboard.key = Math.floor(Math.random() * 10e10).toString();
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

  renderItem = (item, index) => {
    return (
      <View
        style={{
          ...styles.item,
          borderWidth: 5,
          borderColor: '#FF0000',
          backgroundColor: '#800ff0',
          margin: 10,
          height: 150,
          width: 150,
        }}>
        <TouchableOpacity
          key={item.name}
          style={{height: '100%', weight: '100%'}}
          onPress={() => {
            this._navigate_to(item);
          }}>
          <Text style={styles.itemText}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  _setSelected(item) {
    if (item !== this.state.selected) {
      this.setState({selected: false}, () => this.setState({selected: item}));
    }
  }

  render() {
    return (
      <View style={styles.background}>
        <View style={styles.main}>
          <Modal visible={this.state.modalOpen} animationType="slide">
            <DashboardForm additionalFunction={this._addDashboard} />

            <View>
              <AppButton
                title="close"
                onPress={() => {
                  this._hide_modal();
                }}
              />
            </View>
          </Modal>
          <View></View>
          <View
            style={{
              ...styles.buttonsContainer,
              width: Dimensions.get('window').width * 0.8,
            }}>
            <HorizontalScroll
              items={this.state.buttons}
              extra={this.state.props}
              onItemClick={item => this._setSelected(item)}
            />
          </View>
          <AppButton
            style={styles.addButton}
            title="Add dashboard"
            onPress={() => this._show_modal()}>
            {/* <Text style={styles.addButtonText}>+</Text> */}
          </AppButton>
        </View>

        <View>
          {this.state.selected ? (
            <DefaultDashboardComponent
              item={this.state.selected}></DefaultDashboardComponent>
          ) : (
            <></>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#FFFFFF',
  },
  main: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  text: {
    margin: 100,
  },
  addButton: {
    position: 'absolute',
    backgroundColor: '#30Cf50',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 50,
    top: 160,
    right: 100,
  },
  addButtonText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  buttonsContainer: {
    borderWidth: 10,
    borderColor: '#FF00FF',
  },
  item: {
    backgroundColor: '#4a67a1',
    alignItems: 'center',
    justifyContent: 'center',
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
});
