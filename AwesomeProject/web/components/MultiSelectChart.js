import {xorBy} from 'lodash';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import makeAnimated from 'react-select/animated';
import MultiSelect from 'react-select';
import Globals from '../../components/Globals';

function MultiSelectChart({onSelection, style}) {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const options = Globals.TYPES.map(type => ({value: type, label: type.name}));

  return (
    <View style={{margin: 30, ...style}}>
      <Text style={{fontSize: 20, paddingBottom: 10}}>Choose Types</Text>
      <MultiSelect
        options={options}
        isMulti
        onChange={val => {
          onSelection(val);
        }}
        makeAnimated
      />
    </View>
  );
}

export default MultiSelectChart;
