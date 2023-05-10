/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import { StatusBar, View, ActivityIndicator, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'
import Counter from './src/demonstration/Counter'
import {useGetWeather} from './src/hooks/useGetWeather'
import ErrorItem from './src/components/ErrorItem'
import OurButton from './src/demonstration/OurButton'



const App = () => {
  const [loading, error, weather] = useGetWeather()


  if(weather && weather.list && !loading) {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#FFEFCB" barStyle="dark-content" />
        <NavigationContainer>
          <Tabs weather={weather} />
        </NavigationContainer>
      </View>
        
    )
  }

  return (
    <View style={styles.container}>
      {/* <OurButton /> */}
      {error ? <ErrorItem /> : <ActivityIndicator size={'large'} color={'#FFEFCB'} /> }
    </View>
  )
  
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#FFEFCB'
  }
})


export default App
