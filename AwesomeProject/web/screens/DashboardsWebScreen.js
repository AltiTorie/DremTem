import React, {Component} from 'react';
import {Dimensions, Modal, StyleSheet, View} from 'react-native';
import AppButton from '../components/Button_main';
import DashboardForm from '../components/Dashboards/DashboardForm';
import HorizontalScroll from '../components/HorizontalScroll';
import Navbar from '../components/Navbar';
import DefaultDashboardComponent from '../components/DefinedCharts/DefaultDashboardComponent';
export default class DashboardsWebScreen extends Component {
  constructor(props) {
    super(props);
    // TODO:
    // dashboards_data should be downloaded from database
    // for now has to be mocked this way
    const dashboards_data = require('../data/dashboards.json');
    this.state = {
      props: props,
      buttons: dashboards_data.buttons,
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
    console.log(this.state.buttons);

    // TODO:
    // buttons state should be now sent to API
    this._hide_modal();

    //delete this
    const obj = {hello: 'world'};
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
    console.log('item');
    console.log(item);
    if (item !== this.state.selected) {
      this.setState({selected: false}, () => this.setState({selected: item}));
    }
  }

  render() {
    return (
      <View style={styles.background}>
        <View style={styles.navbar}>
          <Navbar />
        </View>
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
              width: '90vw',
            }}>
            <HorizontalScroll
              items={this.state.buttons}
              onItemClick={item => this._setSelected(item)}
            />
          </View>
          <AppButton
            style={styles.addButton}
            title="Add dashboard"
            onPress={() => this._show_modal()}></AppButton>
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
    height: '100%',
  },
  navbar: {
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  },
  text: {
    margin: 100,
  },
  container: {
    backgroundColor: '#919191',
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
  main: {
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
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
