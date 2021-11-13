import React, {useState} from 'react';
import {Text, View} from 'react-native';
import SelectBox from 'react-native-multi-selectbox';
import {xorBy} from 'lodash';
import Globals from '../Globals';
// Options data must contain 'item' & 'id' keys

function MultiSelect({onSelection}) {
  const [selectedCharts, setSelectedTypes] = useState([]);
  return (
    <View style={{margin: 30}}>
      <Text style={{fontSize: 20, paddingBottom: 10}}>Choose Types</Text>
      <SelectBox
        label="Select multiple"
        options={Globals.definedCharts}
        selectedValues={selectedCharts}
        onMultiSelect={item => {
          let xorby = xorBy(selectedCharts, [item], 'id');
          setSelectedTypes(xorby);
          onSelection(xorby);
        }}
        onTapClose={item => {
          let xorby = xorBy(selectedCharts, [item], 'id');
          setSelectedTypes(xorby);
          onSelection(xorby);
        }}
        isMulti
      />
    </View>
  );
}

export default MultiSelect;
