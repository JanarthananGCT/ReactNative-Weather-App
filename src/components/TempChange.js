import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TemperatureChange = ({ change }) => {
  return (
    <View style={styles.container}>
      <Text style={change >= 0 ? styles.positiveChange : styles.negativeChange}>
        {`Change from yesterday: ${change >= 0 ? '+' : ''}${change}°C`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  positiveChange: {
    fontSize: 16,
    color: 'green',
  },
  negativeChange: {
    fontSize: 16,
    color: 'red',
  },
});

export default TemperatureChange;
