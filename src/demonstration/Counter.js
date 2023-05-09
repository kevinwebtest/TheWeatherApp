/* eslint-disable prettier/prettier */
import React, {useState, useEffect } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const Counter = () => {
  const [count, setCount] = useState(0)
  const [newCount, setNewCount] = useState(0)
  useEffect(()=>{
    console.log(`Our count value is ${count}`)
    return ()=>{
      console.log('Useeffect Cleanup')
    }
  },[count])
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`count ${count} ${newCount}`}</Text>
      <Button
        color={'red'}
        title={'Increase the count'}
        onPress={() => {
          setCount(prevCount=>prevCount+1)
        }}
      />
      <Button
        color={'green'}
        title={'Decrease the count'}
        onPress={() => {
            setCount(prevCount=>prevCount-1)
        }}
      />
      <Button
        color={'red'}
        title={'Increase the count'}
        onPress={() => {
          setNewCount(prevCount=>prevCount+1)
        }}
      />
      <Button
        color={'green'}
        title={'Decrease the count'}
        onPress={() => {
            setNewCount(prevCount=>prevCount-1)
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange'
  },
  title: {
    alignSelf: 'center',
    fontSize: 25,
    marginTop: 25
  }
})

export default Counter
