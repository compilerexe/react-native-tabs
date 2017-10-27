/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native'
import Tabs from './components/Tabs'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
  'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu'
})

export default class App extends Component<{}> {

  constructor (props) {
    super(props)
    this.state = {selectTab: 'first'}
  }

  render () {

    const styles = StyleSheet.create({
      // App container
      container: {
        flex: 1,                            // Take up all screen
        backgroundColor: '#E91E63',         // Background color
      },
      // Tab content container
      content: {
        flex: 1,                            // Take up all available space
        justifyContent: 'center',           // Center vertically
        alignItems: 'center',               // Center horizontally
        backgroundColor: '#C2185B',         // Darker background for content area
      },
      // Content header
      header: {
        margin: 10,                         // Add margin
        color: '#FFFFFF',                   // White color
        fontFamily: 'Avenir',               // Change font family
        fontSize: 26,                       // Bigger font size
      },
      // Content text
      text: {
        marginHorizontal: 20,               // Add horizontal margin
        color: 'rgba(255, 255, 255, 0.75)', // Semi-transparent text
        textAlign: 'center',                // Center
        fontFamily: 'Avenir',
        fontSize: 18,
      },
    });

    return (
      <View style={styles.container}>
        <Tabs>
          {/* First tab */}
          <View title="WELCOME" style={styles.content}>
            <Text style={styles.header}>
              Welcome to React Native
            </Text>
            <Text style={styles.text}>
              The best technology to build cross platform mobile apps with
            </Text>
          </View>
          {/* Second tab */}
          <View title="NATIVE" style={styles.content}>
            <Text style={styles.header}>
              Truly Native
            </Text>
            <Text style={styles.text}>
              Components you define will end up rendering as native platform widgets
            </Text>
          </View>
          {/* Third tab */}
          <View title="EASY" style={styles.content}>
            <Text style={styles.header}>
              Ease of Learning
            </Text>
            <Text style={styles.text}>
              It’s much easier to read and write comparing to native platform’s code
            </Text>
          </View>

        </Tabs>
      </View>
    )

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})
