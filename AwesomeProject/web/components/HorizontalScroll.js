import React, {useState} from 'react';
import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class HorizontalScroll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      props: props,
      items: props.items.map(item => ({...item, id: item.key})),
      selected: [],
      onItemClick: props.onItemClick,
    };
  }

  LeftArrow() {
    const {isFirstItemVisible, scrollPrev} =
      React.useContext(VisibilityContext);

    return (
      <Button disabled={isFirstItemVisible} onPress={() => scrollPrev()} />
    );
  }

  RightArrow() {
    const {isLastItemVisible, scrollNext} = React.useContext(VisibilityContext);

    return <Button disabled={isLastItemVisible} onPress={() => scrollNext()} />;
  }

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

  renderItem(item, onClickItem) {
    return (
      <View
        style={{
          ...styles.item,
          borderColor: 'rgba(200, 220, 150, 0.2)',
          borderWidth: 3,
          backgroundColor: 'rgba(255, 184, 92, 0.8)',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 25,
          margin: 10,
          height: 150,
          width: 150,
        }}>
        <TouchableOpacity
          key={item.name}
          style={{
            ...styles.item,
            height: '100%',
            weight: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => {
            onClickItem(item);
          }}>
          <Text style={styles.itemText}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <ScrollMenu
        // LeftArrow={this.LeftArrow}
        // RightArrow={this.RightArrow}
        onWheel={onWheel}>
        {this.state.items.map(item => (
          <Card
            itemId={item.id} // NOTE: itemId is required for track items
            key={item.id}
            onClick={this.handleClick(item.id)}
            item={item}
            selected={this.isItemSelected(item.id)}
            renderItem={this.renderItem}
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

function Card({onClick, selected, item, itemId, renderItem, onItemClick}) {
  const visibility = React.useContext(VisibilityContext);
  return (
    <div
      onClick={() => {
        onItemClick(item);
        // nav.navigate(item.screen_name, {
        //   item: item,
        // });
        onClick(visibility);
      }}
      style={{
        width: '160px',
      }}
      tabIndex={0}>
      {renderItem(item, onItemClick)}
    </div>
  );
}

const styles = StyleSheet.create({
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

// export default HScroll;
