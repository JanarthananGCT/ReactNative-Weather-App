import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CurrentTemperature = ({ temperature }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.temperature}>{`${temperature}°C`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  temperature: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default CurrentTemperature;
