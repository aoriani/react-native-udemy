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
      running : false,
      startTime: null, 
      laps: []
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
          {this.renderLaps()}
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
    return <TouchableHighlight 
              underlayColor="gray"
              onPress={this.handleLapPress}
              style={styles.button}>
          <Text>Lap</Text>
        </TouchableHighlight>
  },

  handleStartPress: function() {
    if (this.state.running) {
      clearInterval(this.interval)
      this.setState({running: false});
      return;
    }

    this.setState({startTime: new Date()});

    this.interval = setInterval(() =>
      {
        this.setState({
          timeElapsed: new Date() - this.state.startTime,
          running: true
        }); 
      }, 30);
    
  },

  handleLapPress: function() {
    var lap = this.state.timeElapsed;
    this.setState({
      startTime: new Date(),
      laps: this.state.laps.concat([lap])
    });
  },

  renderLaps: function() {
    return this.state.laps.map((time, index) => 
        <View style={styles.lap}>
          <Text style={styles.lapText}>Lap #{index + 1}</Text>
          <Text style={styles.lapText}>{formatTime(time)} </Text>
        </View>

      );
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
  },

  lap: {
    justifyContent: 'space-around',
    flexDirection: 'row'
  }, 

  lapText: {
    fontSize: 30
  }

});

AppRegistry.registerComponent('react_native_stopwatch', () => StopWatch);