/* eslint-disable prettier/prettier */
import React from 'react'
import { SafeAreaView } from 'react-native'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'
import { weatherType } from '../utilities/weatherType'

const CurrentWeather = ({ weatherData }) => {
  const { highLowWrapper, highLow, bodyWrapper, description, message, wrapper, container, tempStyles, feels, question } = styles
  const {
    main: {temp, feels_like, temp_max, temp_min}, weather
  } = weatherData

  const weatherCondition = weather[0]?.main
  return (
    <SafeAreaView 
      style={wrapper}
    >
      <View style={container}>
        <Feather 
          name={weatherType[weatherCondition]?.icon} 
          size={100} 
          color={weatherType[weatherCondition]?.backgroundColor}
        />
        <Text>Current Weather</Text>
        <Text style={tempStyles}>{temp}°</Text>
        <Text style={feels}>{`Feels like ${feels_like}°`}</Text>
        <RowText
          messageOne={`High: ${temp_max}° `}
          messageTwo={`Low: ${temp_min}°`}
          containerStyles={highLowWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />
      </View>
      <RowText
        question="What's the weather with you?"
        messageOne={`I'm ${weather[0]?.description}`}
        messageTwo={weatherType[weatherCondition]?.message}
        containerStyles={bodyWrapper}
        questionStyles={question}
        messageOneStyles={description}
        messageTwoStyles={message}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFEFCB'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tempStyles: {
    color: '#353839',
    fontSize: 48,
    fontWeight: '500'
  },
  feels: {
    color: '#353839',
    fontSize: 30
  },
  highLow: {
    color: '#353839',
    fontSize: 20
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 33,
    textTransform: 'capitalize',
    color:'#353839'
  },
  message: {
    fontSize: 25,
    color:'#353839'
  },
  question: {
    fontSize: 15,
    color:'#353839'
  }
})

export default CurrentWeather
