// TrendGraphScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import data from '../utils/data.json';

const TrendGraphScreen = () => {
  // Implement graph visualization using LineChart

  return (
    <View style={styles.container}>
      <Text style={styles.graphTitle}>Temperature Trend Graph</Text>
      {/* Implement LineChart here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  graphTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default TrendGraphScreen;
