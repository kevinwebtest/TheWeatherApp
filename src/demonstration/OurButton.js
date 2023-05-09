/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native'

const OurButton = () => {
  const onPress = () => {
    console.log('press')
  }
  return (
    <TouchableOpacity style={sytles.container} onPress={onPress}>
      <Text style={sytles.buttonText}>Hello</Text>
    </TouchableOpacity>
  )
}

const sytles = StyleSheet.create({
  container: {
    elevation: 8,
    backgroundColor: 'blue',
    borderRadius: 10,
    padding: 5
  },
  buttonText: {
    fontSize: 15,
    color: 'white',
    alignSelf: 'center'
  }
})
export default OurButton
