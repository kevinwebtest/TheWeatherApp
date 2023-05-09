/* eslint-disable prettier/prettier */
import React from 'react'
import { Feather } from '@expo/vector-icons'
import CurrentWeather from '../screens/CurrentWeather'
import UpcomingWeather from '../screens/UpcomingWeather'
import City from '../screens/City'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'



const Tab = createBottomTabNavigator()

const Tabs = ({weather}) => {
  return (
    <Tab.Navigator 
      screenOptions={{
        tabBarActiveTintColor: '#353839',
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: {
          backgroundColor: '#FFEFCB'
        },
        headerStyle: {
          backgroundColor: '#FFEFCB'
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25,
          color: '#353839'
        },
        headerTitleAlign: 'center'
      }}
      // tabBarOptions={{
      //   showLabel: false,
      //   style: {
      //     position: 'absolute',
      //     bottom: 25,
      //     left: 20,
      //     right: 20,
      //     elevation: 0,
      //     backgroundColor: 'white',
      //     borderRadius: 15
      //   }
      // }}
    >
      <Tab.Screen
        name={'Current'}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'droplet'}
              size={25}
              color={focused ? 'black' : 'grey'}
            />
          )
        }}
      >
        {()=> <CurrentWeather weatherData={weather.list[0]} />}
      </Tab.Screen>
      <Tab.Screen
        name={'Upcoming'}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'clock'}
              size={25}
              color={focused ? 'black' : 'grey'}
            />
          )
        }}
      >
        {()=><UpcomingWeather weatherData={weather.list} />}
      </Tab.Screen>
      <Tab.Screen
        name={'City'}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'home'}
              size={25}
              color={focused ? 'black' : 'grey'}
            />
          )
        }}
      >
        {()=><City weatherData={weather.city} />}
      </Tab.Screen>
    </Tab.Navigator>
  )
}

export default Tabs
