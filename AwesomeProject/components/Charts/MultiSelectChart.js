import {xorBy} from 'lodash';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import SelectBox from 'react-native-multi-selectbox';
import Globals from '../Globals';

// Options data must contain 'item' & 'id' keys
function MultiSelect({onSelection}) {
  const [selectedTypes, setSelectedTypes] = useState([]);
  return (
    <View style={{margin: 30}}>
      <Text style={{fontSize: 20, paddingBottom: 10}}>Choose Types</Text>
      <SelectBox
        options={Globals.TYPES.map(({name, ...rest}) => ({
          ...rest,
          item: name,
        }))}
        selectedValues={selectedTypes}
        onMultiSelect={item => {
          let xorby = xorBy(selectedTypes, [item], 'id');
          setSelectedTypes(xorby);
          onSelection(xorby);
        }}
        onTapClose={item => {
          let xorby = xorBy(selectedTypes, [item], 'id');
          setSelectedTypes(xorby);
          onSelection(xorby);
        }}
        isMulti
      />
    </View>
  );
}

export default MultiSelect;
