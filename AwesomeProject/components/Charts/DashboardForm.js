import React, {useState} from 'react';
import {StyleSheet, Button, TextInput, View, Text} from 'react-native';
import {useTheme} from 'react-native-paper';
import {Formik, Field} from 'formik';
import AppButton from '../Button_main';
import MultiSelect from './MultiSelectChart';
import Globals from '../Globals';

export default function DashboardForm({additionalFunction}) {
  const {colors} = useTheme();
  return (
    <View style={{backgroundColor: colors.background, flex: 1, padding: 20}}>
      <Formik
        initialValues={{name: 'New_dashboard', screen_name: ''}}
        onSubmit={(values, actions) => {
          additionalFunction(values);
          actions.resetForm();
        }}>
        {props => {
          const selectedTypes = function (selectedTypes) {
            if (selectedTypes.length > 0) {
              let types = [];
              selectedTypes.forEach(item => types.push(item.abbr));

              let q = Globals.definedCharts.find(
                chart =>
                  chart.required_types.length == types.length &&
                  chart.required_types.every(rt => types.includes(rt)),
              );
              if (q) {
                props.setFieldValue('screen_name', q.chart_link);
              } else {
                props.setFieldValue('screen_name', 'DefaultDashboard');
              }
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
                <MultiSelect onSelection={selectedTypes}></MultiSelect>
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
  container: {},
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
});
