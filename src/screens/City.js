/* eslint-disable prettier/prettier */
import React from 'react'
import { 
  SafeAreaView, 
  Text, 
  ImageBackground, 
  StyleSheet, 
  View
} from 'react-native'
import moment from 'moment'
import IconText from '../components/IconText'

const City = ({ weatherData }) => {
  const { container, imageLayout, cityName, countryName, cityText, populationWrapper, populationText, riseSetWrapper, riseSetText, rowLayout } = styles
  const { name, country, population, sunrise, sunset } = weatherData
  return (
    <SafeAreaView style={container}>
      <ImageBackground 
        source={require('../../assets/brown-city2-edit.png')} 
        style={imageLayout}
        resizeMode="cover"
      >
          <Text style={[cityName, cityText]}>{name}</Text>
          <Text style={[countryName, cityText]}>{country}</Text>
          <View style={[populationWrapper, rowLayout]}>
            <IconText 
              iconName={'user'} 
              iconColor="#353839" 
              bodyText={`Population: ${population}`}
              bodyTextStyles={populationText} 
            />
          </View>
          <View style={[riseSetWrapper, rowLayout]}>
            <IconText 
              iconName={'sunrise'} 
              iconColor={'white'} 
              bodyText={moment(sunrise).format('h:mm:ss a')} 
              bodyTextStyles={riseSetText} 
            />
            <IconText 
              iconName={'sunset'} 
              iconColor={'white'} 
              bodyText={moment(sunset).format('h:mm:ss a')} 
              bodyTextStyles={riseSetText} 
            />
          </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#FFEFCB'
  },
  imageLayout: {
    flex: 1,
    paddingTop: 100
  },
  countryName: {
    fontSize: 30
  },
  cityName: {
    fontSize: 40
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#353839'
  },
  populationWrapper: {
    justifyContent: 'center',
    marginTop: 30
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: '#353839'
  },
  riseSetWrapper: {
    justifyContent: 'space-around',
    marginTop: 30,
    backgroundColor: '#CFB284',
    width: '80%',
    alignSelf: 'center',
    borderRadius: 10,
    borderWidth: 3,
    paddingVertical: 10
  },
  riseSetText: {
    fontSize: 20,
    color: 'white'
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export default City
