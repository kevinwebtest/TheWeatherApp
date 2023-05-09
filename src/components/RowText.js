/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text } from 'react-native'

const RowText = (props)=> {
    const {question, questionStyles, messageOne, messageTwo, containerStyles, messageOneStyles, messageTwoStyles} = props
    // const {} = styles
    return (
        <View style={containerStyles}>
          <Text style={questionStyles}>{question}</Text>
          <Text style={messageOneStyles}>{messageOne}</Text>
          <Text style={messageTwoStyles}>{messageTwo}</Text>
        </View>
    )
}

export default RowText