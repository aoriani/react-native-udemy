'use strict'

import React from 'react-native';
import WeatherApi from './src/apis';

var {
  AppRegistry,
  MapView,
  View,
  Text,
  StyleSheet
} = React;

var Weather = React.createClass({

  getInitialState : function() {
    return {
      pin: {
        latitude: 0,
        longitude: 0
      },
      city: '',
      temperatue: '',
      description: ''
    };
  }, 

  render: function() {
    return <View style={styles.container}>
                <MapView 
                  style={styles.map}
                  annotations = {[this.state.pin]}
                  onRegionChangeComplete = {this.onRegionChangeComplete}
                  style = {styles.map} />

                  <View style={styles.textWrapper}>
                    <Text style={styles.text}>{this.state.city}</Text>
                    <Text style={styles.text}>{this.state.temperature}</Text>
                    <Text style={styles.text}>{this.state.description}</Text>
                  </View>
            </View>
  },

  onRegionChangeComplete: function(region) {
    this.setState({
      pin : {
        longitude: region.longitude,
        latitude: region.latitude
      }
    });

    WeatherApi(region.latitude, region.longitude)
        .then(data => {
            this.setState(data);
            console.log(data)
        })
  }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF'
    },

    map: {
        flex: 2,
        marginTop: 30
    },

    textWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    text: {
        fontSize: 30
    }
});

AppRegistry.registerComponent('weather', () => Weather);