import React, {useState} from 'react';
import {StyleSheet, Button, TextInput, View, Text} from 'react-native';
import {Formik, Field} from 'formik';
import AppButton from './Button';
import MultiSelect from './Charts/MultiSelectChart';
import Globals from './Globals';

export default function DashboardForm({additionalFunction}) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{name: 'New_dashboard', screen_name: ''}}
        onSubmit={(values, actions) => {
          additionalFunction(values);
          actions.resetForm();
        }}>
        {props => {
          const a = function (selectedCharts) {
            if (selectedCharts.length > 0) {
              let chartName = '';
              selectedCharts.forEach(
                item => (chartName = chartName + item.item),
              );
              let q =
                Globals.definedCharts.find(
                  chart =>
                    chart.item === chartName ||
                    (chart.alternate_names &&
                      chart.alternate_names.find(name => name === chartName)),
                ) || q;
              props.setFieldValue('screen_name', q.chart_link);
            }
          };
          return (
            <>
              <View>
                <TextInput
                  style={globalStyles.input}
                  placeholder="Screen name"
                  onChangeText={props.handleChange('name')}
                  value={props.values.name}
                />
                <MultiSelect onSelection={a}></MultiSelect>
                <AppButton title="submit" onPress={props.handleSubmit} />
              </View>
            </>
          );
        }}
      </Formik>
    </View>
  );
}

export const globalStyles = StyleSheet.create({
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
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
