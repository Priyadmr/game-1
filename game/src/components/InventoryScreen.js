import React from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import Hp from './Hp';
import Body from './Body';
import TopInfo from './TopInfo';
import Inventory from './Inventory';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    padding: 20,
  },
});

export default () => (
  <View style={styles.container}>
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <View style={{ width: 324 }}>
        <Hp />
        <View style={{ marginTop: 10 }}>
          <Body />
        </View>
      </View>
      <View style={{ marginLeft: 20, width: 640 }}>
        <View style={{ alignItems: 'flex-end' }}>
          <TopInfo />
        </View>
        <View style={{ marginTop: 10 }}>
          <Inventory />
        </View>
      </View>
    </View>
  </View>
);
