import React, {Component} from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AppButton from '../components/Button_main';
import DashboardForm from '../components/Dashboards/DashboardForm';
import ChartTypeConnections from '../components/DefinedCharts/ChartTypeConnections';
import DefaultDashboardComponent from '../components/DefinedCharts/DefaultDashboardComponent';
import HorizontalScroll from '../components/HorizontalScroll';

export default class DashboardsWebScreen extends Component {
  constructor(props) {
    super(props);
    // TODO:
    // dashboards_data should be downloaded from database
    // for now has to be mocked this way
    const dashboards_buttons = require('../data/dashboards.json');
    this.state = {
      props: props,
      buttons: dashboards_buttons,
      selected: false,
      numOfColumns: 3,
      modalOpen: false,
      DashboardComponent: DefaultDashboardComponent,
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

    // TODO:
    // buttons state should be now sent to API
    // temporary half-working solution:
    const blob = new Blob([JSON.stringify(this.state.buttons, null, 2)], {
      type: 'application/json',
    });
    const a = document.createElement('a');
    a.download = 'buttons.json';
    a.href = URL.createObjectURL(blob);
    a.addEventListener('click', e => {
      setTimeout(() => URL.revokeObjectURL(a.href), 30 * 1000);
    });
    a.click();
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

  _setSelected(item) {
    if (item !== this.state.selected) {
      this.setState({selected: false}, () => {
        this.setState({selected: item});
        let ds = ChartTypeConnections.componentConnections[item.component_name];
        this.setState({
          DashboardComponent: ds,
        });
      });
    }
  }

  render() {
    const Dashboard = this.state.DashboardComponent;
    let dd = [];
    if (this.state.selected) {
      let DATA = require('../data/UserData.json');
      let UserDevices = require('../data/UserDevices.json');

      let sensor_data = this.state.selected.sensor_types.map(sensor_ => {
        return DATA.sensor_data.find(
          sensor => sensor.sensorID == sensor_.value.sensorID,
        );
      });

      dd = sensor_data.map(sensorData => {
        let data = sensorData.data.map(sd => sd.value);
        let times = sensorData.data.map(sd => sd.time);
        let device = UserDevices.devices.find(
          device => device.deviceID == sensorData.deviceID,
        );
        return {
          __id: sensorData.sensorID,
          x: times,
          y: data,
          name: device.deviceName + '-' + sensorData.type,
          mode: 'markers',
          type: 'scattergl',
          dataType: sensorData.type,
          dataUnit: sensorData.unit,
        };
      });
    }
    return (
      <View style={styles.background}>
        <View style={styles.main}>
          <Modal
            visible={this.state.modalOpen}
            animationType="slide"
            transparent={true}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View style={styles.modalView}>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'rgba(255, 75, 75, 1)',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 100,
                    position: 'absolute',
                    top: 10,
                    left: 10,
                    width: '1.5vw',
                    height: '1.5vw',
                    margin: '.7vw',
                    zIndex: 1,
                  }}
                  onPress={() => {
                    this._hide_modal();
                  }}>
                  {/* <Text style={styles.itemText}>X</Text> */}
                </TouchableOpacity>
                <Text style={styles.modalText}>Create new dashboard</Text>
                <DashboardForm additionalFunction={this._addDashboard} />
              </View>
            </View>
          </Modal>
          <View></View>
          <View
            style={{
              ...styles.buttonsContainer,
              width: '80vw',
            }}>
            <HorizontalScroll
              items={this.state.buttons}
              onItemClick={item => this._setSelected(item)}
            />
          </View>
          <AppButton
            title="Add dashboard"
            onPress={() => this._show_modal()}></AppButton>
        </View>

        <View style={{alignSelf: 'flex-start', marginLeft: 20}}>
          {this.state.selected ? (
            <Dashboard data={dd} name={this.state.selected.name}></Dashboard>
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
    // marginTop: 50,
    margin: 50,
  },
  text: {
    margin: 100,
  },
  addButton: {
    position: 'absolute',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: '10vw',
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
  modalView: {
    marginTop: 100,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    height: '45vw',
    width: '90vw',
    shadowOpacity: 1,
    shadowRadius: 10000,
    // elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: '2vw',
  },
});
