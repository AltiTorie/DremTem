import React, {useState} from 'react';
import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class HorizontalScroll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      props: props,
      items: props.items,
      selected: [],
      onItemClick: props.onItemClick,
    };
  }

  // LeftArrow() {
  //   const {isFirstItemVisible, scrollPrev} =
  //     React.useContext(VisibilityContext);

  //   return (
  //     <Button disabled={isFirstItemVisible} onPress={() => scrollPrev()} />
  //   );
  // }

  // RightArrow() {
  //   const {isLastItemVisible, scrollNext} = React.useContext(VisibilityContext);

  //   return <Button disabled={isLastItemVisible} onPress={() => scrollNext()} />;
  // }

  isItemSelected = id => !!this.state.selected.find(el => el === id);
  handleClick =
    id =>
    ({getItemById, scrollToItem}) => {
      const itemSelected = this.isItemSelected(id);

      this.setState(state =>
        itemSelected
          ? state.selected.filter(el => el !== id)
          : state.selected.concat(id),
      );
    };
  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({items: nextProps.items});
  }

  render() {
    return (
      <ScrollMenu onWheel={onWheel}>
        {this.state.items.map(item => (
          <Card
            itemId={item.key} // NOTE: itemId is required for track items
            key={item.key}
            onClick={this.handleClick(item.key)}
            item={item}
            selected={this.isItemSelected(item.key)}
            onItemClick={this.state.onItemClick}
          />
        ))}
      </ScrollMenu>
    );
  }
}

function onWheel(apiObj, ev) {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;
  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }
  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}

function Card({onClick, selected, item, onItemClick}) {
  const visibility = React.useContext(VisibilityContext);
  return (
    <TouchableOpacity
      key={item.name}
      style={{
        ...styles.item,
        borderColor: 'rgba(200, 220, 150, 0.2)',
        borderWidth: 3,
        backgroundColor: '#4a67a1',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        width: '15vw',
        height: '9vw',
        margin: '.7vw',
      }}
      onPress={() => {
        onItemClick(item);
      }}>
      <Text style={styles.itemText}>{item.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#4a67a1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    color: '#fff',
    fontSize: '100%',
    fontWeight: 'bold',
  },
});
