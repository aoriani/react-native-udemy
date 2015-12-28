'use strict'

import React from 'react-native';

var {
  AppRegistry,
  MapView,
  View,
  StyleSheet
} = React;

var Weather = React.createClass({
  render: function() {
    var pins = [{
      latitude: 37,
      longitude: -95
    }];

    return <MapView 
              annotations = {pins}
              onRegionChangeComplete = {this.onRegionChangeComplete}
              style = {styles.map} />
  },

  onRegionChangeComplete: function(region) {
    
  }
});

var styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

AppRegistry.registerComponent('weather', () => Weather);