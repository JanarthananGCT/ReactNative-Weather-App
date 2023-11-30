import React from 'react';
import { ScrollView } from 'react-native';
import CurrentTemperature from '../components/CurrTemp';
import TemperatureChange from '../components/TempChange';
import Location from '../components/Loc';
import data from '../utils/data.json';

const HomeScreen = () => {
  const currentTemperature = (data.current.temp - 273.15).toFixed(2);
  const temperatureChange = (
    data.hourly[0].temp - 273.15 - currentTemperature
  ).toFixed(2);

  return (
    <ScrollView>
      <CurrentTemperature temperature={currentTemperature} />
      <TemperatureChange change={temperatureChange} />
      <Location currentLocation={`${data.lat}, ${data.lon}`} />
    </ScrollView>
  );
};

export default HomeScreen;
