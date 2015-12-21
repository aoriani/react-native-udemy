import React from 'react-native';
import formatTime from 'minutes-seconds-milliseconds'
const {
  Text,
  View,
  TouchableHighlight,
  AppRegistry,
  StyleSheet
} = React;


var StopWatch = React.createClass({

  getInitialState: function() {
    return {
      timeElapsed: null,
      running : false
    }
  },

  render: function() {
      return <View style={styles.container}>

        <View style={styles.header}>
          <View style={styles.timeWrapper}>
            <Text style={styles.timer}>{formatTime(this.state.timeElapsed)}</Text>
          </View>
          <View style={styles.buttonWrapper}>
            {this.startStopButton()}
            {this.lapButton()}
          </View>
        </View>

        <View style={styles.footer}>
          <Text> List of Laps </Text>
        </View>

      </View> 
  },

  startStopButton: function() {

    var style = this.state.running ?  styles.stopButton : styles.startButton;

    return <TouchableHighlight 
              underlayColor="gray"
              onPress={this.handleStartPress}
              style={[styles.button, style]}>
          <Text>{this.state.running ? "Stop" : "Start"}</Text>
        </TouchableHighlight>
  },

  lapButton: function() {
    return <TouchableHighlight style={styles.button}>
          <Text>Lap</Text>
        </TouchableHighlight>
  },

  handleStartPress: function() {

    if (this.state.running) {
      clearInterval(this.interval)
      this.setState({running: false});
      return;
    }

    var startTime = new Date();

    this.interval = setInterval(() =>
      {
        this.setState({
          timeElapsed: new Date() - startTime,
          running: true
        }); 
      }, 30);
    
  }

});

var styles = StyleSheet.create({
  container : {
    flex: 1,
    alignItems: 'stretch'
  },
  
  header: {
    flex: 1
  },

  footer: {
    flex: 1
  },

  timeWrapper: {
    flex: 5 ,
    justifyContent: 'center',
    alignItems: 'center'  
  },

  buttonWrapper: {
    flex: 3,
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems: 'center'
  },

  timer: {
    fontSize: 60
  },

  button: {
    borderWidth: 2,
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center', 
    alignItems: 'center'
  },

  startButton : {
    borderColor: 'green'
  },

  stopButton : {
    borderColor: 'red'
  }

});

AppRegistry.registerComponent('react_native_stopwatch', () => StopWatch);