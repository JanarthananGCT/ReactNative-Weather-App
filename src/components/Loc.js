import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Location = ({ currentLocation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.location}>{`Current Location: ${currentLocation}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  location: {
    fontSize: 16,
  },
});

export default Location;
