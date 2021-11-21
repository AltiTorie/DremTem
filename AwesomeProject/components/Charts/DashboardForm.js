import React, {useState} from 'react';
import {StyleSheet, Button, TextInput, View, Text} from 'react-native';
import {Formik, Field} from 'formik';
import AppButton from '../Button_main';
import MultiSelect from './MultiSelectChart';
import Globals from '../Globals';

export default function DashboardForm({additionalFunction}) {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          name: 'New_dashboard',
          screen_name: '',
          sensor_types: [],
        }}
        onSubmit={(values, actions) => {
          additionalFunction(values);
          actions.resetForm();
        }}>
        {props => {
          const selectTypes = function (selectedTypes) {
            if (selectedTypes.length > 0) {
              let types = [];
              selectedTypes.forEach(item => types.push(item.abbr));

              let q = Globals.definedCharts.find(
                chart =>
                  chart.required_types.length == types.length &&
                  chart.required_types.every(rt => types.includes(rt)),
              );
              props.setFieldValue('sensor_types', selectedTypes);
              let chart_link = q ? q.chart_link : 'DefaultDashboard';
              props.setFieldValue('screen_name', chart_link);
            }
          };
          return (
            <>
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Screen name"
                  onChangeText={props.handleChange('name')}
                  value={props.values.name}
                />
                <MultiSelect onSelection={selectTypes}></MultiSelect>
                <AppButton title="submit" onPress={props.handleSubmit} />
              </View>
            </>
          );
        }}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
});
